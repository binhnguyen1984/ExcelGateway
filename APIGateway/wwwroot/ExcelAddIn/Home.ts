import * as ExcelHandler from "./ExcelHandler";
import * as Common from "./Common";
import * as $ from 'jquery';

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
            $('#component-datalist-text').text("Comp.ids");

            //project ids list
            $('#project-datalist-text').text("Proj.ids");

            //load data button
            $('#fetch-button-text').text("Load data");
            $('#fetch-button-desc').text("Fetch all the components.");
            $('#fetch-button').click(loadParameters);

            //update data button
            $('#put-button-text').text("Update data");
            $('#put-button-desc').text("Update components.");
            $('#put-button').click(updateParameters);

            loadInitialSearchValues();
        });
    };

})();



async function loadParameters() {
    let componentId = $("#componentIdsList").val();
    let projectId = $("#projectIdsList").val();
    let searchValues = ["components/componentID:" + componentId, "projects/id:"+projectId];
    await ExcelHandler.loadParameters(searchValues);
}

function updateParameters() {
    ExcelHandler.updateParameters();
}

function setConfigForAutoTextbox(tbName, getDataApi) {
    getDataApi((response) => {
        let respJson = JSON.parse(response);
        if (respJson.isSuccessful)
        $(tbName).autocomplete(
            {
                source: function (request, response) {
                    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
                    response($.grep(respJson.data, function (item: string) {
                        return matcher.test(item);
                    }));
                },
                position: { my: "right center", at: "right bottom" },
                minLength: 1
            });
    })

}
function loadInitialSearchValues() {
    //Common.showNotification("Message:", "Loading search values");
    //get list of component ids
    setConfigForAutoTextbox("#componentIdsList", ExcelHandler.getComponentIdsList);

    //get list of project ids
    setConfigForAutoTextbox("#projectIdsList", ExcelHandler.getProjectIdsList);
    //Common.showNotification("Message:", "Search values have been loaded");
}

