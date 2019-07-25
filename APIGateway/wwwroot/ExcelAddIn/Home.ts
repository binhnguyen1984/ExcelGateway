import * as ExcelHandler from "./ExcelHandler";
import * as Common from "./Common";
let sheetName: string;
(function () {
    "use strict";
    // The initialize function must be run each time a new page is loaded.
    Office.initialize = function (reason) {
        $(document).ready(async function () {
            sheetName = await ExcelHandler.getSheetName();
            loadExcelConfiguration();
            
            // Initialize the FabricUI notification mechanism and hide it
            Common.initializeMessageBanner();
            
            // If not using Excel 2016, use fallback logic.
            if (!Office.context.requirements.isSetSupported('ExcelApi', 1.1)) {
                $("#template-description").text("This sample allows reading/writing from/to the Excel sheet.");
                $('#fetch-button-text').text("Fetch");
                $('#fetch-button-desc').text("Fetch components");

                $('#fetch-button').click(loadParameters);

                $('#put-button-text').text("Update");
                $('#put-button-desc').text("Update components");

                $('#put-button').click(updateParameters);

                return;
            }

            //$("#template-description").text("This sample will fetch all the components to the Excel sheet.");
            $('#fetch-button-text').text("Fetch");
            $('#fetch-button-desc').text("Fetch all the components.");

            // Add a click event handler for the fetch button.
            $('#fetch-button').click(loadParameters);

            $('#put-button-text').text("Update");
            $('#put-button-desc').text("Update components.");

            // Add a click event handler for the put button.
            $('#put-button').click(updateParameters);
        });
    };

})();

function loadExcelConfiguration() {
    ExcelHandler.loadExcelConfiguration(sheetName);
}
function loadParameters() {
    ExcelHandler.loadParameters(sheetName);
}

function updateParameters() {
    ExcelHandler.updateParameters(sheetName);
}