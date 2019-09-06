import * as APIHandler from "./APIHandler";

export function getComponentIds(callback) {
    APIHandler.syncApiGetCall("api/loadattributevalues?attrPath=hdb:components/componentID", callback);
}
export function getProjectNames(callback) {
    APIHandler.syncApiGetCall("api/loadattributevalues?attrPath=hdb:projects/name", callback);
}
