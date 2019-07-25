import * as ExcelHandler from "./ExcelHandler";
import * as Common from "./Common";
let sheetName: string;
(function () {
    "use strict";
    // The initialize function must be run each time a new page is loaded.
    Office.initialize = function (reason) {
        $(document).ready(function () {
            
            // Initialize the FabricUI notification mechanism and hide it
            Common.initializeMessageBanner();
            
            $("#template-description").text("This sample allows reading/writing from/to the Excel sheet.");
            $('#config-button-text').text("Load configugration");
            $('#config-button-desc').text("Load excel configuration for this sheet");
            $('#config-button').click(loadExcelConfiguration);

            $('#fetch-button-text').text("Load data");
            $('#fetch-button-desc').text("Fetch all the components.");
            $('#fetch-button').click(loadParameters);

            $('#put-button-text').text("Update data");
            $('#put-button-desc').text("Update components.");
            $('#put-button').click(updateParameters);
        });
    };

})();

async function loadExcelConfiguration() {
    sheetName = await ExcelHandler.getSheetName();
    ExcelHandler.loadExcelConfiguration(sheetName);
}

async function loadParameters() {
    await ExcelHandler.loadParameters(sheetName);
}

function updateParameters() {
    ExcelHandler.updateParameters(sheetName);
}