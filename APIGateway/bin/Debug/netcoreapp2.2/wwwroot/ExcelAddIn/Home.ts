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
            $('#component-datalist-text').text("Component IDs");
            $("#componentIdsList").autocomplete("option", "minLength", 4);
            $("#componentIdsList").autocomplete({
                position: { my: "right top", at: "right bottom" }
            });
            $("#componentIdsList").autocomplete({ source: beginningMatched });

            //project ids list
            $('#project-datalist-text').text("Project IDs");
            $("#projectIdsList").autocomplete("option", "minLength", 4);
            $("#projectIdsList").autocomplete({
                position: { my: "right top", at: "right bottom" }
            });
            $("#projectIdsList").autocomplete({ source: beginningMatched });

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

function loadInitialSearchValues() {
    //get list of component ids
    ExcelHandler.getComponentIdsList((data) => {
        let dataArr = JSON.parse(data);
        $("#componentIdsList").autocomplete({ source: dataArr, response: function (event, ui) { }});
    })

    ExcelHandler.getProjectIdsList((data) => {
        let dataArr = JSON.parse(data);
        $("#projectIdsList").autocomplete({ source: dataArr, response: function (event, ui) { } });
    })
}

