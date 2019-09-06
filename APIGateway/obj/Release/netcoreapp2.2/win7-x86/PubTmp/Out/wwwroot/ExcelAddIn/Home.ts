import * as ExcelHandler from "./ExcelHandler";
import * as HDBLoader from "./HDBLoader";
import * as CDPLoader from "./CDPLoader";

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
            $('#component-datalist-text').text("Components");

            //project names list
            $('#cdp-project-datalist-text').text("Projects");
            $('#cdp-project-variant-datalist-text').text("Variants");
            $('#cdp-project-revision-datalist-text').text("Versions");

            //load data button
            $('#fetch-button-text').text("Load data");
            $('#fetch-button-desc').text("Fetch all the components.");
            $('#fetch-button').click(loadParameters);

            //update data button
            $('#put-button-text').text("Update data");
            $('#put-button-desc').text("Update components.");
            $('#put-button').click(updateParameters);

            //action handling
            //$('#projectNamesList').autocomplete({ change: projectNameOnChange });
            //$('#projectVariantsList').autocomplete({ change: variantNameOnChange });
            assignTextboxEventHandlers();
            //load initial values for search text boxes
            loadInitialSearchValues();
        });
    };

})();

function assignTextboxEventHandlers()
{
    document.querySelector('input[list="projectNamesList"]').addEventListener('focusout', projectNameOnChange);
    document.querySelector('input[list="projectVariantsList"]').addEventListener('focusout', variantNameOnChange);
}

function projectNameOnChange(e) {
    let projectName = e.target.value;
    //get list of variant names
    CDPLoader.getVariantsByProjectName((response) => updateTextbox("projectVariantsList", response), projectName);
}

function variantNameOnChange(e) {
    let projectName = $('#projectNames').val();
    let variantName = e.target.value;
    //get list of variant names
    CDPLoader.getVersionsByProjectAndVariant((response) => updateTextbox("projectVersionsList", response), projectName, variantName);
}

async function loadParameters() {
    let componentId = $("#componentIds").val();
    let projectName = $('#projectNames').val();
    let variantName = $("#projectVariants").val();
    let revisionName = $('#projectVersions').val();
    let searchValues =
        [
            "hdb:components/componentID=" + componentId,
            "cdp:projects/id=" + projectName,
            "cdp:variants/id=" + variantName,
            "cdp:versions/id" + revisionName
        ];
    await ExcelHandler.loadParameters(searchValues);
}

function updateParameters() {
    ExcelHandler.updateParameters();
}

function updateTextbox(tboxId, response) {
    let respJson = JSON.parse(response);
    if (respJson.isSuccessful)
    {
        respJson.data.forEach(value => addListEntry(tboxId, value));
        //$(tboxId).autocomplete(
        //    {
        //        source: function (request, response) {
        //            var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
        //            response($.grep(respJson.data, function (item: string) {
        //                return matcher.test(item);
        //            }));
        //        },
        //        position: { my: "right center", at: "right bottom" },
        //        minLength: 1
        //    });
    }
    else Common.showNotification("Message:", respJson.data);
}

function addListEntry(tboxId, value) {
    let optionNode = document.createElement("option");
    optionNode.value = value;
    document.getElementById(tboxId).appendChild(optionNode);
}

function setConfigForAutoTextbox(tbName, getData) {
    getData((response) => updateTextbox(tbName, response));
}
function loadInitialSearchValues() {
    //Common.showNotification("Message:", "Loading search values");
    //get list of component ids
    setConfigForAutoTextbox("componentIdsList", HDBLoader.getComponentIds);

    //get list of project ids
    setConfigForAutoTextbox("projectNamesList", CDPLoader.getProjectIds);

    //Common.showNotification("Message:", "Search values have been loaded");
}

