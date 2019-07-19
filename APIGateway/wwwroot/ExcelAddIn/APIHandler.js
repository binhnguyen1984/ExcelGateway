"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Common = require("./Common");
//let startHeaders = 1;
//let startComponentHeaders = 3;
//let startSearchColCode = 65;
//let startCompColCode = 65;
//let search_cols = [];
//let search_props;
//let component_cols = [];
//let component_col_db;
//let compPropCount;
//let startSearchColName;
//let startUpdateColName;
//let endUpdateColName;
//let endSearchColName;
//let startCompColName;
//let endCompColName;
//let start_update_col;
//let end_update_col;
//let compList;
//let rowCounter = 0;
//export { startSearchColName, endSearchColName, startHeaders, startCompColName, startComponentHeaders, endCompColName, search_cols, component_cols };
function asyncAPICall(apiURL, callback) {
    var rawFile = new XMLHttpRequest();
    //rawFile.overrideMimeType("application/json");
    rawFile.open("GET", apiURL, true);
    rawFile.onreadystatechange = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(rawFile.readyState === 4 && rawFile.status == 200)) return [3 /*break*/, 2];
                        return [4 /*yield*/, callback(rawFile.responseText)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    rawFile.send(null);
}
exports.asyncAPICall = asyncAPICall;
function fetchComponents(filterValues) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
function getFilterValues(ctx) {
    // Create a proxy object for the active sheet
    //let sheet = ctx.workbook.worksheets.getActiveWorksheet();
    //let startSearchDataColName = String.fromCharCode(startSearchColCode + 1);
    //let endSearchDataColName = String.fromCharCode(startSearchColCode + search_cols[0].length - 1);
    //// delete old data
    //for (let col = 0; col < component_cols[0].length; col++) {
    //    let componentColName = String.fromCharCode(startCompColCode + col);
    //    let startIndex = startComponentHeaders + 1;
    //    let endIndex = startIndex + rowCounter;
    //    let dataRange = sheet.getRange(componentColName + startIndex + ":" + componentColName + endIndex);
    //    dataRange.clear();
    //}
    ////
    //let filterRange = sheet.getRange(startSearchDataColName + startHeaders + ":" + endSearchDataColName + startHeaders);
    //let filterValues = filterRange.load("values");
    //return filterValues;
}
function loadComponentsDetail() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Run a batch operation against the Excel object model
                return [4 /*yield*/, Common.excelHandler(function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                        var filterValues, data;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    Common.showNotification("Message", "Data is loading ...");
                                    filterValues = getFilterValues(ctx);
                                    return [4 /*yield*/, ctx.sync()];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, fetchComponents(filterValues)];
                                case 2:
                                    data = _a.sent();
                                    fillComponents(data);
                                    return [4 /*yield*/, ctx.sync()];
                                case 3:
                                    _a.sent();
                                    Common.showNotification("Message", "Data has been loaded.");
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
                case 1:
                    // Run a batch operation against the Excel object model
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadComponentsDetail = loadComponentsDetail;
function parseJSONComponents(data) {
    var message = data.message;
    //compList = message["components"];
    //if (compList == null || compList.length == 0)
    //    return null;
    //let compValues = new Array(compList.length);
    //for (let row = 0; row < compValues.length; row++) {
    //    compValues[row] = new Array(compPropCount);
    //    for (let col = 0; col < compPropCount; col++) {
    //        compValues[row][col] = compList[row][component_col_db[col]];
    //    }
    //}
    //return compValues;
}
function fillComponents(data) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Run a batch operation against the Excel object model
                return [4 /*yield*/, Common.excelHandler(function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                        var compValues, sheet;
                        return __generator(this, function (_a) {
                            compValues = parseJSONComponents(data);
                            if (compValues != null) {
                                sheet = ctx.workbook.worksheets.getActiveWorksheet();
                                //let dataRange = sheet.getRange(startCompColName + (startComponentHeaders + 1) + ":" + endCompColName + (compValues.length + startComponentHeaders)).load("values");
                                //await ctx.sync();
                                //rowCounter = compValues.length
                                //if (rowCounter > 0) {
                                //    dataRange.values = compValues;
                                //    await ctx.sync();
                                //}
                            }
                            return [2 /*return*/];
                        });
                    }); })];
                case 1:
                    // Run a batch operation against the Excel object model
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function putComponent(compStr, componentID) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = Common.hdbURL + '(' + componentID + ')';
                    return [4 /*yield*/, fetch(url, {
                            method: 'PUT',
                            body: compStr,
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    });
}
// Update components
function updateComponents() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Run a batch operation against the Excel object model
                return [4 /*yield*/, Common.excelHandler(function (ctx) {
                        return __awaiter(this, void 0, void 0, function () {
                            var sheet;
                            return __generator(this, function (_a) {
                                Common.showNotification("Message:", "Updating the components... ");
                                sheet = ctx.workbook.worksheets.getActiveWorksheet();
                                return [2 /*return*/];
                            });
                        });
                    })];
                case 1:
                    // Run a batch operation against the Excel object model
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateComponents = updateComponents;
//# sourceMappingURL=APIHandler.js.map