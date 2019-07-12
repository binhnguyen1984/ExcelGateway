import * as Common from "./Common";
let startHeaders = 1;
let startComponentHeaders = 3;
let startSearchColCode = 65;
let startCompColCode = 65;
let search_cols = [];
let search_props;
let component_cols = [];
let component_col_db;
let compPropCount;
let startSearchColName;
let startUpdateColName;
let endUpdateColName;
let endSearchColName;
let startCompColName;
let endCompColName;
let start_update_col;
let end_update_col;
let compList;
let rowCounter = 0;

export { startSearchColName, endSearchColName, startHeaders, startCompColName, startComponentHeaders, endCompColName, search_cols, component_cols };
export function set_compopnents_configuration(excel_config) {
    //Excel configuration setting
    startHeaders = excel_config.start_headers;
    startComponentHeaders = excel_config.start_component_headers;
    startSearchColCode = excel_config.start_search_col_code;
    startCompColCode = excel_config.start_component_col_code;
    start_update_col = excel_config.start_update_col;
    end_update_col = excel_config.end_update_col;
    search_cols.push(Common.convert_string_to_array(excel_config.search_col_names_and_values));
    search_props = Common.convert_string_to_array(excel_config.search_prop_names);
    component_cols.push(Common.convert_string_to_array(excel_config.component_col_names));
    component_col_db = Common.convert_string_to_array(excel_config.component_col_db);
    compPropCount = component_cols[0].length;
    startSearchColName = String.fromCharCode(startSearchColCode);
    endSearchColName = String.fromCharCode(startSearchColCode + search_cols[0].length - 1);
    startCompColName = String.fromCharCode(startCompColCode);
    endCompColName = String.fromCharCode(startCompColCode + compPropCount - 1);
    startUpdateColName = String.fromCharCode(startCompColCode + start_update_col);
    endUpdateColName = String.fromCharCode(startCompColCode + end_update_col);
}
async function fetchComponents(filterValues) {
    // create url to query for the data
    let url = Common.hdbURL + ".json?";
    let filter = '';
    let i = 0, col;
    for (; i < search_props.length; i++) {
        col = (i << 1);
        if (!Common.empty(filterValues.values[0][col]))
            filter += search_props[i] + " eq '" + filterValues.values[0][col] + "' and ";
    }
    if (filter.length > 0) {
        filter = filter.substring(0, filter.length - 5);
        url += "$filter=" + filter;
    }


    // call the api to fetch all the components
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

function getFilterValues(ctx) {
    // Create a proxy object for the active sheet
    let sheet = ctx.workbook.worksheets.getActiveWorksheet();
    let startSearchDataColName = String.fromCharCode(startSearchColCode + 1);
    let endSearchDataColName = String.fromCharCode(startSearchColCode + search_cols[0].length - 1);

    // delete old data
    for (let col = 0; col < component_cols[0].length; col++) {
        let componentColName = String.fromCharCode(startCompColCode + col);
        let startIndex = startComponentHeaders + 1;
        let endIndex = startIndex + rowCounter;
        let dataRange = sheet.getRange(componentColName + startIndex + ":" + componentColName + endIndex);
        dataRange.clear();
    }

    //
    let filterRange = sheet.getRange(startSearchDataColName + startHeaders + ":" + endSearchDataColName + startHeaders);
    let filterValues = filterRange.load("values");
    return filterValues;
}


export async function loadComponentsDetail() {
    // Run a batch operation against the Excel object model
    await Common.excelHandler(async (ctx) => {
        Common.showNotification("Message", "Data is loading ...")
        let filterValues = getFilterValues(ctx);
        await ctx.sync();
        let data = await fetchComponents(filterValues);
        fillComponents(data);
        await ctx.sync();
        Common.showNotification("Message", "Data has been loaded.");
    });
}

function parseJSONComponents(data) {
    let message = data.message;
    compList = message.components;
    if (compList == null || compList.length == 0)
        return null;
    let compValues = new Array(compList.length);
    for (let row = 0; row < compValues.length; row++) {
        compValues[row] = new Array(compPropCount);
        for (let col = 0; col < compPropCount; col++) {
            compValues[row][col] = compList[row][component_col_db[col]];
        }
    }
    return compValues;
}

async function fillComponents(data) {
    // Run a batch operation against the Excel object model
    await Common.excelHandler(async (ctx) => {
        let compValues = parseJSONComponents(data);
        if (compValues != null) {
            // create a 2d-array to store all the component information
            let sheet = ctx.workbook.worksheets.getActiveWorksheet();
            let dataRange = sheet.getRange(startCompColName + (startComponentHeaders + 1) + ":" + endCompColName + (compValues.length + startComponentHeaders)).load("values");
            await ctx.sync();
            rowCounter = compValues.length
            if (rowCounter > 0) {
                dataRange.values = compValues;
                await ctx.sync();
            }
        }
    });
}

async function putComponent(compStr, componentID) {
    // create PUT url
    let url = Common.hdbURL + '(' + componentID + ')';
    let response = await fetch(url, {
        method: 'PUT',
        body: compStr,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let result = await response.json();
    return result;
}

// Update components
export async function updateComponents() {
    // Run a batch operation against the Excel object model
    await Common.excelHandler(async function (ctx) {
        Common.showNotification("Message:", "Updating the components... ");
        // create a 2d-array to store all the component information
        let sheet = ctx.workbook.worksheets.getActiveWorksheet();
        let updateRange = sheet.getRange(startUpdateColName + (startComponentHeaders + 1) + ":" + endUpdateColName + (rowCounter + startComponentHeaders)).load("values");
        await ctx.sync();
        for (let row = 0; row < rowCounter; row++)
            if (compList[row].locked == false) {
                // update the values
                for (let col = start_update_col; col <= end_update_col; col++) {
                    compList[row][component_col_db[col]] = updateRange.values[row][col - start_update_col];
                }

                // convert updated component information to a string
                let compStr = JSON.stringify(compList[row]);
                let result = await putComponent(compStr, compList[row].componentID);
                if (result.code != 200) {
                    if (result.code == 500)
                        Common.showNotification("Message:", "Updating row " + row +
                            " failed due to data inconsistency. You must fetch data before updating.");
                    else Common.showNotification("Message:", "Updating row " + row + " failed [" + result.status + "]");
                    break;
                }
                else if (row == rowCounter - 1)
                    Common.showNotification("Message:", "Updating succeeded!");
            }
    });
}
