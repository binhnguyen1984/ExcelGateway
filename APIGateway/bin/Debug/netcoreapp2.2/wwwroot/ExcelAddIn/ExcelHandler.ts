import * as APIHandler from "./APIHandler";
import * as Common from "./Common";

let searchValueLocs = [];
//let exportPaths = [];
let exportValueLocs = [];


export function loadExcelConfiguration(sheetName) {
    APIHandler.asyncApiGetCall("api/loadexcelconfig/" + sheetName, excelConfigHandler);
}

export async function loadParameters(sheetName) {
    Common.showNotification("Message", "Data is loading ...")
    let data = await getSearchValues();
    APIHandler.asyncApiGetCall("api/loadparameters/" + sheetName +"?searchValues=" + data, setParameters);
}

async function excelConfigHandler(config: string) {
    let configArr = JSON.parse(config);
    await processExcelSearchCriteria(configArr[0]);
    await processExportParameters(configArr[1]);
    Common.showNotification("Message:", "The configuration has been loaded");
}

export async function updateParameters(sheetName) {
    Common.showNotification("Message:", "Updating the components... ");
    let exportParams = await getExportParameters();
    APIHandler.syncApiPutCall("api/updateparameters/" + sheetName, exportParams, handleExportParamsFeedback);
}

function handleExportParamsFeedback(isSuccessful) {
    if (isSuccessful) {
            Common.showNotification("Message:", "Updating failed!");
    }
    else Common.showNotification("Message:", "Updating succeeded!");
}


export async function getSheetName() {
    let sheetName = "";
    await Common.excelActionHandler(async (ctx) => {
        let sheet = ctx.workbook.worksheets.getActiveWorksheet();
        sheet.load("name");
        await ctx.sync();
        sheetName= sheet.name;
    });
    return sheetName;
}

async function getSearchValues() {
    let searchValues = [];
    await Common.excelActionHandler(async (ctx) => {
        let sheet = ctx.workbook.worksheets.getActiveWorksheet();
        for (let compID = 0; compID < searchValueLocs.length; compID++) {
            let compSearchValueLocs = searchValueLocs[compID]
            for (let valueID = 0; valueID < compSearchValueLocs.length; valueID++) {
                let range = sheet.getRange(compSearchValueLocs[valueID]).load("values");
                await ctx.sync();
                searchValues.push(range.values[0][0]);
            }
        }
    });
    return searchValues.toString();
}

async function setParameters(paramStr) {
    await Common.excelActionHandler(async (ctx) => {
        let parameters = JSON.parse(paramStr);
        let sheet = ctx.workbook.worksheets.getActiveWorksheet();
        for (let i = 0; i < parameters.length; i++) {
            let valueLocations = parameters[i]["ValueLocations"];
            let value = parameters[i]["Value"];
            let importRange = sheet.getRange(valueLocations[0]);
            importRange.values = [[value]];
            // do not update values to export parameters as these are only set by the user via calculation tool
            //if (valueLocations.length > 1) {
            //    let exportRange = sheet.getRange(valueLocations[1])
            //    exportRange.values = [[value]];
            //}
        }
        Common.showNotification("Message", "Data has been loaded.");
        await ctx.sync();
    });
}

async function getExportParameters() {
    let exportParams = [];
    await Common.excelActionHandler(async function (ctx) {
        Common.showNotification("Message:", "Updating the components... ");
        // create a 2d-array to store all the component information
        let sheet = ctx.workbook.worksheets.getActiveWorksheet();
        for (let i = 0; i < exportValueLocs.length; i++) {
            let updateRange = sheet.getRange(exportValueLocs[i]).load("values");
            await ctx.sync();
            exportParams.push(updateRange.values[0][0]);
        }
    });
    return exportParams.toString();
}

function storeSearchValueLocations(searchParamCells) {
    let valueLocs = [];
    //add the texts to be displayed
    for (var i = 0; i < searchParamCells.length; i++) {
        valueLocs.push(searchParamCells[i]["ValueLocation"]);
    }
    searchValueLocs.push(valueLocs);
}

function setSearchTextsToExcelSheet(sheet, searchParamCells) {
    for (let i = 0; i < searchParamCells.length; i++) {
        let textLoc = searchParamCells[i]["CellLocation"];

        //get a range that covers the search cells
        let textRange = sheet.getRange(textLoc);
        textRange.values = [[searchParamCells[i]["DisplayText"]]];

        //format text cell
        //textRange.format.autofitColumns(); // this does not seem to be supported in Excel 2016
        textRange.format.font.bold = true;
        textRange.format.fill.color = "yellow";
    }
}

async function processExcelSearchCriteria(searchParamCells) {
    // Run a batch operation against the Excel object model
    await Common.excelActionHandler(async ctx => {
        // Create a proxy object for the active sheet
        let sheet = ctx.workbook.worksheets.getActiveWorksheet();

        //process the text to be displayed in search cells
        storeSearchValueLocations(searchParamCells);
        setSearchTextsToExcelSheet(sheet, searchParamCells);
        return await ctx.sync();
    });
}

async function processExportParameters(exportParamLocs) {
    // Run a batch operation against the Excel object model
    await Common.excelActionHandler(async ctx => {
        //process the text to be displayed in search cells
        for (let i = 0; i < exportParamLocs.length; i++) {
            //exportPaths.push(exportParamList[i]["Props"]);
            exportValueLocs.push(exportParamLocs[i]);
        }
        return await ctx.sync();
    });
}
