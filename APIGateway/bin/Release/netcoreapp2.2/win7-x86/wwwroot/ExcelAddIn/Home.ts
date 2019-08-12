import * as ExcelHandler from "./ExcelHandler";
import * as Common from "./Common";
import * as $ from 'jquery';

let sheetName: string;
(function () {
    "use strict";
    // The initialize function must be run each time a new page is loaded.
    Office.initialize = function (reason) {
        $(document).ready(function () {
            
            // Initialize the FabricUI notification mechanism and hide it
            Common.initializeMessageBanner();
            //description
            $("#template-description").text("This sample allows reading/writing from/to the Excel sheet.");

            // search data lists
            //component ids list
            $('#component-datalist-text').text("Comp.Ids");

            //project ids list
            $('#project-datalist-text').text("Proj.Ids");

            // load configuration button
            $('#config-button-text').text("Load config");
            $('#config-button-desc').text("Load excel configuration for this sheet");
            $('#config-button').click(loadExcelConfiguration);

            //load data button
            $('#fetch-button-text').text("Load data");
            $('#fetch-button-desc').text("Fetch all the components.");
            $('#fetch-button').click(loadParameters);

            //update data button
            $('#put-button-text').text("Update data");
            $('#put-button-desc').text("Update components.");
            $('#put-button').click(updateParameters);
        });
    };

})();

function beginningMatched(request, response) {
    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
    response($.grep([], function (item) {
        return matcher.test(item);
    }));
};

async function loadExcelConfiguration() {
    Common.showNotification("Message:", "Loading configuration");
    sheetName = await ExcelHandler.getSheetName();
    ExcelHandler.loadExcelConfiguration(sheetName);
    loadInitialSearchValues();
    Common.showNotification("Message:", "Finish loading configuration");
}

async function loadParameters() {
    let componentId = $("#componentIdsList").val();
    let projectId = $("#projectIdsList").val();
    let searchValues = [componentId, projectId];
    await ExcelHandler.loadParameters(sheetName, searchValues);
}

function updateParameters() {
    ExcelHandler.updateParameters(sheetName);
}

function setConfigForAutoTextbox(tbName, getDataApi) {
    getDataApi((data) => {
        let dataArr = JSON.parse(data);
        $(tbName).autocomplete(
            {
                source: function (request, response) {
                    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
                    response($.grep(dataArr, function (item: string) {
                        return matcher.test(item);
                    }));
                },
                position: { my: "right center", at: "right bottom" },
                minLength: 2
            });
    })

}
function loadInitialSearchValues() {
    //get list of component ids
    setConfigForAutoTextbox("#componentIdsList", ExcelHandler.getComponentIdsList);

    //get list of project ids
    setConfigForAutoTextbox("#projectIdsList", ExcelHandler.getProjectIdsList);
}

