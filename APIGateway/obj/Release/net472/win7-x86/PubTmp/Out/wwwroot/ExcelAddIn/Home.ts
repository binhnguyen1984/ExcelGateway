import * as ComponentsHandler from "./ComponentsHandler";
import * as Common from "./Common";
import * as FileHandler from "./FileHandler";
(function () {
    "use strict";

    // The initialize function must be run each time a new page is loaded.
    Office.initialize = function (reason) {
        $(document).ready(function () {
            FileHandler.asyncLoadFile("api/loadexcelconfig", initializeExcelData);
            //loadExcelFile("./config.xlsx");

            // Initialize the FabricUI notification mechanism and hide it
            Common.initializeMessageBanner();
            
            // If not using Excel 2016, use fallback logic.
            if (!Office.context.requirements.isSetSupported('ExcelApi', 1.1)) {
                $("#template-description").text("This sample allows reading/writing from/to the Excel sheet.");
                $('#fetch-button-text').text("Fetch");
                $('#fetch-button-desc').text("Fetch components");

                $('#fetch-button').click(ComponentsHandler.loadComponentsDetail);

                $('#put-button-text').text("Update");
                $('#put-button-desc').text("Update components");

                $('#put-button').click(ComponentsHandler.loadComponentsDetail);

                return;
            }

            //$("#template-description").text("This sample will fetch all the components to the Excel sheet.");
            $('#fetch-button-text').text("Fetch");
            $('#fetch-button-desc').text("Fetch all the components.");

            // Add a click event handler for the fetch button.
            $('#fetch-button').click(ComponentsHandler.loadComponentsDetail);

            $('#put-button-text').text("Update");
            $('#put-button-desc').text("Update components.");

            // Add a click event handler for the put button.
            $('#put-button').click(ComponentsHandler.updateComponents);
        });
    };

    async function initializeExcelData(config: string) {
        let config_data = JSON.parse(config);
        let excel_config = config_data.Excel;
        let database_config = config_data.Database;
        ComponentsHandler.set_compopnents_configuration(excel_config);
        Common.set_urls(database_config);
        await setExcelHeaders();
    }


    async function setExcelHeaders() {
        // Run a batch operation against the Excel object model
        await Common.excelHandler(async ctx => {
            // Create a proxy object for the active sheet
            let sheet = ctx.workbook.worksheets.getActiveWorksheet();
            let searchRange = sheet.getRange(ComponentsHandler.startSearchColName + ComponentsHandler.startHeaders + ":" + ComponentsHandler.endSearchColName + ComponentsHandler.startHeaders);
            searchRange.values = ComponentsHandler.search_cols;
            await ctx.sync();
            for (let col = 0; col < ComponentsHandler.search_cols[0].length / 2; col++) {
                let cell = searchRange.getCell(0, 2 * col);
                cell.format.font.bold = true;
                cell.format.fill.color = "yellow";
            }
            let componentRange = sheet.getRange(ComponentsHandler.startCompColName + ComponentsHandler.startComponentHeaders + ":" + ComponentsHandler.endCompColName + ComponentsHandler.startComponentHeaders);
            componentRange.values = ComponentsHandler.component_cols;
            componentRange.format.font.bold = true;
            componentRange.format.fill.color = "orange";
            componentRange.format.autofitColumns();
            await ctx.sync();
        });
    }


})();
