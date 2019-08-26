import * as APIHandler from "./APIHandler";
import * as Common from "./Common";

const importStartCol = 0;
const exportStartCol = 3;
export function getHdbComponentIdsList(callback) {
    APIHandler.syncApiGetCall("api/loadhdbcomponentids", callback);
}

export function getCdpProjectIdsList(callback) {
    APIHandler.syncApiGetCall("api/loadcdpprojectids", callback);
}

export function getHdbProjectNamesList(callback) {
    APIHandler.syncApiGetCall("api/loadhdbprojectnames", callback);
}


export async function loadParameters(searchValues) {
    Common.showNotification("Message", "Data is loading ...");
    let importProps = await getImportPropNames();
    let propNames = importProps[0];
    let importValueLocs = importProps[1];
    APIHandler.asyncApiGetCall("api/loadparameters/" + "?propNames=" + propNames.toString() + "&searchValues=" + searchValues, setImportParameters, importValueLocs);
}

export async function updateParameters() {
    Common.showNotification("Message:", "Updating the components... ");
    let exportParams = await getExportPropNames();
    let exportPropNames = exportParams[0];
    let exportValues = exportParams[1];
    APIHandler.syncApiPutCall("api/updateparameters/?propNames=" + exportPropNames.toString() ,exportValues.toString(), handleExportParamsFeedback);
}

function handleExportParamsFeedback(response) {
    let respJson = JSON.parse(response);
    if (respJson.isSuccessful) {
        Common.showNotification("Message:", "Updating succeeded!");
    }
    else Common.showNotification("Message:", respJson.data);
}


async function getImportPropNames() {
    let propNames = [];
    let locs = [];
    await Common.excelActionHandler(async (ctx) => {
        let sheet = ctx.workbook.worksheets.getActiveWorksheet();
        let range = sheet.getUsedRange().load("rowCount");
        await ctx.sync();
        let rowCount = range.rowCount;
        let firstPropCell = sheet.getUsedRange().getCell(0, importStartCol).load("address");
        let lastPropCell = sheet.getUsedRange().getCell(rowCount - 1, importStartCol).load("address");
        await ctx.sync();
        range = sheet.getRange(firstPropCell.address + ":" + lastPropCell.address).load("values");
        await ctx.sync();
        let props = range.values;

        //search for all parameter names
        for (let row = 0; row < rowCount; row++) {
            let propName = props[row][0];
            if (propName.indexOf("/") >= 0) {
                propNames.push(propName);
                locs.push(row);
            }
        }
    });
    return [propNames, locs] ;
}


async function getExportPropNames() {
    let propNames = [];
    let values = [];
    await Common.excelActionHandler(async (ctx) => {
        let sheet = ctx.workbook.worksheets.getActiveWorksheet();
        let range = sheet.getUsedRange().load("rowCount");
        await ctx.sync();
        let rowCount = range.rowCount;
        let firstPropCell = sheet.getUsedRange().getCell(0, exportStartCol).load("address");
        let lastPropCell = sheet.getUsedRange().getCell(rowCount - 1, exportStartCol+1).load("address");
        await ctx.sync();
        range = sheet.getRange(firstPropCell.address + ":" + lastPropCell.address).load("values");
        await ctx.sync();
        let props = range.values;

        //search for all parameter names
        for (let row = 0; row < rowCount; row++) {
            let propName = props[row][0];
            if (propName.indexOf("/") >= 0) {
                propNames.push(propName);
                values.push(props[row][1]);
            }
        }
    });
    return [propNames, values];
}


//we pad the import parameter array with empty strings at locations of empty rows
//and turn it into column array
function formatParamArr(paramArr, importValueLocs) {
    let params = [];
    for (let i = 0; i < importValueLocs.length; i++) {
        if (i > 0){
            let distance = importValueLocs[i] - importValueLocs[i - 1]-1;
            if (distance > 0)
                for (let j = 0; j < distance; j++)
                    params.push([""]);
        }
        params.push([paramArr[i]]);
    }
    return params;
}

async function setImportParameters(response, importValueLocs) {
    await Common.excelActionHandler(async (ctx) => {
        let respJson = JSON.parse(response);
        if (respJson.isSuccessful) {
            let paramArr = formatParamArr(respJson.data, importValueLocs);
            let sheet = ctx.workbook.worksheets.getActiveWorksheet();
            let firstValueCell = sheet.getUsedRange().getCell(importValueLocs[0], importStartCol + 1).load("address");
            let lastValueCell = sheet.getUsedRange().getCell(importValueLocs[importValueLocs.length-1], importStartCol + 1).load("address");
            await ctx.sync();
            let importRange = sheet.getRange(firstValueCell.address + ":" + lastValueCell.address);
            importRange.values = paramArr;
            //importRange.format.wrapText = true;
            //importRange.format.autofitColumns();
            //importRange.style = Excel.BuiltInStyle.neutral;
            //importRange.format.horizontalAlignment = "Right";
            Common.showNotification("Message", "Data has been loaded.");
        }
        else Common.showNotification("Message", respJson.data);
        await ctx.sync();
    });
}
