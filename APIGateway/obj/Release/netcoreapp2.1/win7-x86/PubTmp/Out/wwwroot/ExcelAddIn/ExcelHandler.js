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
var APIHandler = require("./APIHandler");
var Common = require("./Common");
var searchValueLocs = [];
var exportPaths = [];
var exportValueLocs = [];
function loadExcelConfiguration() {
    APIHandler.asyncApiGetCall("api/loadexcelconfig", excelConfigHandler);
}
exports.loadExcelConfiguration = loadExcelConfiguration;
function loadParameters() {
    Common.showNotification("Message", "Data is loading ...");
    getSearchValues().then(function (data) {
        APIHandler.asyncApiGetCall("api/loadparameters/" + data, setParameters);
    });
}
exports.loadParameters = loadParameters;
function getSearchValues() {
    return __awaiter(this, void 0, void 0, function () {
        var searchValues;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    searchValues = [];
                    return [4 /*yield*/, Common.excelActionHandler(function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                            var sheet, compID, compSearchValueLocs, valueID, range;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        sheet = ctx.workbook.worksheets.getActiveWorksheet();
                                        compID = 0;
                                        _a.label = 1;
                                    case 1:
                                        if (!(compID < searchValueLocs.length)) return [3 /*break*/, 6];
                                        compSearchValueLocs = searchValueLocs[compID];
                                        valueID = 0;
                                        _a.label = 2;
                                    case 2:
                                        if (!(valueID < compSearchValueLocs.length)) return [3 /*break*/, 5];
                                        range = sheet.getRange(compSearchValueLocs[valueID]).load("values");
                                        return [4 /*yield*/, ctx.sync()];
                                    case 3:
                                        _a.sent();
                                        searchValues.push(range.values[0][0]);
                                        _a.label = 4;
                                    case 4:
                                        valueID++;
                                        return [3 /*break*/, 2];
                                    case 5:
                                        compID++;
                                        return [3 /*break*/, 1];
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, searchValues.toString()];
            }
        });
    });
}
function setParameters(paramStr) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Common.excelActionHandler(function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                        var parameters, sheet, i, valueLocations, value, importRange, exportRange;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    Common.showNotification("Message", "Data has been loaded.");
                                    parameters = JSON.parse(paramStr);
                                    sheet = ctx.workbook.worksheets.getActiveWorksheet();
                                    for (i = 0; i < parameters.length; i++) {
                                        valueLocations = parameters[i]["ValueLocations"];
                                        value = parameters[i]["Value"];
                                        importRange = sheet.getRange(valueLocations[0]);
                                        importRange.values = [[value]];
                                        if (valueLocations.length > 1) {
                                            exportRange = sheet.getRange(valueLocations[1]);
                                            exportRange.values = [[value]];
                                        }
                                    }
                                    return [4 /*yield*/, ctx.sync()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getExportParameters() {
    return __awaiter(this, void 0, void 0, function () {
        var exportParams;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    exportParams = [];
                    return [4 /*yield*/, Common.excelActionHandler(function (ctx) {
                            return __awaiter(this, void 0, void 0, function () {
                                var sheet, i, updateRange;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            Common.showNotification("Message:", "Updating the components... ");
                                            sheet = ctx.workbook.worksheets.getActiveWorksheet();
                                            i = 0;
                                            _a.label = 1;
                                        case 1:
                                            if (!(i < exportValueLocs.length)) return [3 /*break*/, 4];
                                            updateRange = sheet.getRange(exportValueLocs[i]).load("values");
                                            return [4 /*yield*/, ctx.sync()];
                                        case 2:
                                            _a.sent();
                                            exportParams.push(updateRange.values[0][0]);
                                            _a.label = 3;
                                        case 3:
                                            i++;
                                            return [3 /*break*/, 1];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            });
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, exportParams.toString()];
            }
        });
    });
}
function updateParameters() {
    Common.showNotification("Message:", "Updating the components... ");
    getExportParameters().then(function (exportParams) { return APIHandler.syncApiPutCall("api/updateparameters", exportParams, handleExportParamsFeedback); });
}
exports.updateParameters = updateParameters;
function handleExportParamsFeedback(responseCode) {
    if (responseCode != 200) {
        if (responseCode == 500)
            Common.showNotification("Message:", "Updating failed due to data inconsistency. You must fetch data before updating.");
        else
            Common.showNotification("Message:", "Updating failed!");
    }
    else
        Common.showNotification("Message:", "Updating succeeded!");
}
function excelConfigHandler(config) {
    return __awaiter(this, void 0, void 0, function () {
        var configArr;
        return __generator(this, function (_a) {
            configArr = JSON.parse(config);
            processExcelSearchCriteria(configArr[0]);
            processExportParameters(configArr[1]);
            return [2 /*return*/];
        });
    });
}
function storeSearchValueLocations(searchProps) {
    var valueLocs = [];
    //add the texts to be displayed
    for (var i = 0; i < searchProps.length; i++) {
        valueLocs.push(searchProps[i]["ValueLocation"]);
    }
    searchValueLocs.push(valueLocs);
}
function setSearchTextsToExcelSheet(sheet, searchProps) {
    for (var i = 0; i < searchProps.length; i++) {
        var textLoc = searchProps[i]["CellLocation"];
        //get a range that covers the search cells
        var textRange = sheet.getRange(textLoc);
        textRange.values = [[searchProps[i]["DisplayText"]]];
        //format text cell
        //textRange.format.autofitColumns(); // this does not seem to be supported in Excel 2016
        textRange.format.font.bold = true;
        textRange.format.fill.color = "yellow";
    }
}
function processExcelSearchCriteria(searchCellDict) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Run a batch operation against the Excel object model
                return [4 /*yield*/, Common.excelActionHandler(function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                        var sheet, _i, _a, key, searchProps;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    sheet = ctx.workbook.worksheets.getActiveWorksheet();
                                    //process the text to be displayed in search cells
                                    for (_i = 0, _a = Object.keys(searchCellDict); _i < _a.length; _i++) {
                                        key = _a[_i];
                                        searchProps = searchCellDict[key]["SearchParamList"];
                                        storeSearchValueLocations(searchProps);
                                        setSearchTextsToExcelSheet(sheet, searchProps);
                                    }
                                    return [4 /*yield*/, ctx.sync()];
                                case 1: return [2 /*return*/, _b.sent()];
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
function processExportParameters(exportParamList) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Run a batch operation against the Excel object model
                return [4 /*yield*/, Common.excelActionHandler(function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                        var i;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    //process the text to be displayed in search cells
                                    for (i = 0; i < exportParamList.length; i++) {
                                        exportPaths.push(exportParamList[i]["Props"]);
                                        exportValueLocs.push(exportParamList[i]["ValueLocations"][1]);
                                    }
                                    return [4 /*yield*/, ctx.sync()];
                                case 1: return [2 /*return*/, _a.sent()];
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
//# sourceMappingURL=ExcelHandler.js.map