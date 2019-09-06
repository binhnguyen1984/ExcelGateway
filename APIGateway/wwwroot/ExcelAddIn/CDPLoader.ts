import * as APIHandler from "./APIHandler";
export function getProjectIds(callback) {
    APIHandler.syncApiGetCall("api/loadattributevalues?attrPath=cdp:projects/id", callback);
}

export function getProjectNames(callback) {
    APIHandler.syncApiGetCall("api/loadattributevalues?attrPath=cdp:projects/name", callback);
}

export function getVariantsByProjectName(callback, projectName) {
    APIHandler.asyncApiGetCall("api/loadvariantsbyprojectname?projectName=" + projectName, callback);
}

export function getVersionsByProjectAndVariant(callback, projectName, variantName) {
    APIHandler.syncApiGetCall("api/loadversionsbyprojectandvariant?projectName="+projectName+"&variantName="+variantName, callback);
}

