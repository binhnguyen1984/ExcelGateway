/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/ExcelAddIn/Home.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/ExcelAddIn/APIHandler.ts":
/*!******************************************!*\
  !*** ./wwwroot/ExcelAddIn/APIHandler.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
function asyncApiGetCall(apiURL, callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", apiURL, true);
    xhr.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(xhr.readyState == 4 && xhr.status == 200)) return [3 /*break*/, 2];
                        return [4 /*yield*/, callback(xhr.responseText)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    xhr.send(null);
}
exports.asyncApiGetCall = asyncApiGetCall;
function syncApiPutCall(apiURL, rawData, callback) {
    var xhr = new XMLHttpRequest();
    var jsonData = JSON.stringify(rawData);
    xhr.open("PUT", apiURL, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (xhr.readyState == 4 && xhr.status == 200)
                    callback(xhr.responseText);
                return [2 /*return*/];
            });
        });
    };
    xhr.send(jsonData);
}
exports.syncApiPutCall = syncApiPutCall;


/***/ }),

/***/ "./wwwroot/ExcelAddIn/Common.ts":
/*!**************************************!*\
  !*** ./wwwroot/ExcelAddIn/Common.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var messageBanner;
var hdbURL, cdpURL;
exports.hdbURL = hdbURL;
exports.cdpURL = cdpURL;
function set_urls(config_data) {
    exports.hdbURL = hdbURL = config_data.hdbURL;
    exports.cdpURL = cdpURL = config_data.cdpURL;
}
exports.set_urls = set_urls;
function convert_string_to_array(str) {
    return str.split(",").map(function (item) {
        return item.trim();
    });
}
exports.convert_string_to_array = convert_string_to_array;
function initializeMessageBanner() {
    var element = document.querySelector('.ms-MessageBanner');
    messageBanner = new fabric.MessageBanner(element);
    messageBanner.hideBanner();
}
exports.initializeMessageBanner = initializeMessageBanner;
function empty(data) {
    if (typeof (data) == 'number' || typeof (data) == 'boolean') {
        return false;
    }
    if (typeof (data) == 'undefined' || data === null) {
        return true;
    }
    if (typeof (data.length) != 'undefined') {
        return data.length == 0;
    }
    return true;
}
exports.empty = empty;
// this is kind of a pattern for handling contents in the current excel sheet
function excelActionHandler(action) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Excel.run(action)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    errorHandler(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.excelActionHandler = excelActionHandler;
// Helper function for treating errors
function errorHandler(error) {
    // Always be sure to catch any accumulated errors that bubble up from the Excel.run execution
    showNotification("Error", error);
    console.log("Error: " + error);
    if (error instanceof OfficeExtension.Error) {
        console.log("Debug info: " + JSON.stringify(error.debugInfo));
    }
}
exports.errorHandler = errorHandler;
// Helper function for displaying notifications
function showNotification(header, content) {
    $("#notification-header").text(header);
    $("#notification-body").text(content);
    messageBanner.showBanner();
    messageBanner.toggleExpansion();
}
exports.showNotification = showNotification;


/***/ }),

/***/ "./wwwroot/ExcelAddIn/ExcelHandler.ts":
/*!********************************************!*\
  !*** ./wwwroot/ExcelAddIn/ExcelHandler.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var APIHandler = __webpack_require__(/*! ./APIHandler */ "./wwwroot/ExcelAddIn/APIHandler.ts");
var Common = __webpack_require__(/*! ./Common */ "./wwwroot/ExcelAddIn/Common.ts");
var searchValueLocs = [];
//let exportPaths = [];
var exportValueLocs = [];
function loadExcelConfiguration(sheetName) {
    APIHandler.asyncApiGetCall("api/loadexcelconfig/" + sheetName, excelConfigHandler);
}
exports.loadExcelConfiguration = loadExcelConfiguration;
function loadParameters(sheetName) {
    Common.showNotification("Message", "Data is loading ...");
    getSearchValues().then(function (data) {
        APIHandler.asyncApiGetCall("api/loadparameters/" + sheetName + "?searchValues=" + data, setParameters);
    });
}
exports.loadParameters = loadParameters;
function getSheetName() {
    return __awaiter(this, void 0, void 0, function () {
        var sheetName;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sheetName = "";
                    return [4 /*yield*/, Common.excelActionHandler(function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                            var sheet;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        sheet = ctx.workbook.worksheets.getActiveWorksheet();
                                        sheet.load("name");
                                        return [4 /*yield*/, ctx.sync()];
                                    case 1:
                                        _a.sent();
                                        sheetName = sheet.name;
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, sheetName];
            }
        });
    });
}
exports.getSheetName = getSheetName;
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
                        var parameters, sheet, i, valueLocations, value, importRange;
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
                                        // do not update values to export parameters as these are only set by the user via calculation tool
                                        //if (valueLocations.length > 1) {
                                        //    let exportRange = sheet.getRange(valueLocations[1])
                                        //    exportRange.values = [[value]];
                                        //}
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
function updateParameters(sheetName) {
    Common.showNotification("Message:", "Updating the components... ");
    getExportParameters().then(function (exportParams) { return APIHandler.syncApiPutCall("api/updateparameters/" + sheetName, exportParams, handleExportParamsFeedback); });
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
function storeSearchValueLocations(searchParamCells) {
    var valueLocs = [];
    //add the texts to be displayed
    for (var i = 0; i < searchParamCells.length; i++) {
        valueLocs.push(searchParamCells[i]["ValueLocation"]);
    }
    searchValueLocs.push(valueLocs);
}
function setSearchTextsToExcelSheet(sheet, searchParamCells) {
    for (var i = 0; i < searchParamCells.length; i++) {
        var textLoc = searchParamCells[i]["CellLocation"];
        //get a range that covers the search cells
        var textRange = sheet.getRange(textLoc);
        textRange.values = [[searchParamCells[i]["DisplayText"]]];
        //format text cell
        //textRange.format.autofitColumns(); // this does not seem to be supported in Excel 2016
        textRange.format.font.bold = true;
        textRange.format.fill.color = "yellow";
    }
}
function processExcelSearchCriteria(searchParamCells) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Run a batch operation against the Excel object model
                return [4 /*yield*/, Common.excelActionHandler(function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                        var sheet;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    sheet = ctx.workbook.worksheets.getActiveWorksheet();
                                    //process the text to be displayed in search cells
                                    storeSearchValueLocations(searchParamCells);
                                    setSearchTextsToExcelSheet(sheet, searchParamCells);
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
function processExportParameters(exportParamLocs) {
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
                                    for (i = 0; i < exportParamLocs.length; i++) {
                                        //exportPaths.push(exportParamList[i]["Props"]);
                                        exportValueLocs.push(exportParamLocs[i]);
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


/***/ }),

/***/ "./wwwroot/ExcelAddIn/Home.ts":
/*!************************************!*\
  !*** ./wwwroot/ExcelAddIn/Home.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var ExcelHandler = __webpack_require__(/*! ./ExcelHandler */ "./wwwroot/ExcelAddIn/ExcelHandler.ts");
var Common = __webpack_require__(/*! ./Common */ "./wwwroot/ExcelAddIn/Common.ts");
var sheetName;
(function () {
    "use strict";
    // The initialize function must be run each time a new page is loaded.
    Office.initialize = function (reason) {
        $(document).ready(function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ExcelHandler.getSheetName()];
                        case 1:
                            sheetName = _a.sent();
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
                                return [2 /*return*/];
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
                            return [2 /*return*/];
                    }
                });
            });
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0FQSUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi93d3dyb290L0V4Y2VsQWRkSW4vRXhjZWxIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3d3d3Jvb3QvRXhjZWxBZGRJbi9Ib21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLFNBQWdCLGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUTtJQUM1QyxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0lBQy9CLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFB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QUM7QUFDM0MsQ0FBQztBQUVELFNBQVMsZ0JBQWdCO0lBQ3JCLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3QyxDQUFDIiwiZmlsZSI6IkhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3d3d3Jvb3QvRXhjZWxBZGRJbi9Ib21lLnRzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGFzeW5jQXBpR2V0Q2FsbChhcGlVUkwsIGNhbGxiYWNrKSB7XHJcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCBhcGlVUkwsIHRydWUpO1xyXG4gICAgeGhyLm9ubG9hZCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMClcclxuICAgICAgICAgICAgYXdhaXQgY2FsbGJhY2soeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN5bmNBcGlQdXRDYWxsKGFwaVVSTCwgcmF3RGF0YSwgY2FsbGJhY2spIHtcclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIGxldCBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KHJhd0RhdGEpO1xyXG4gICAgeGhyLm9wZW4oXCJQVVRcIiwgYXBpVVJMLCB0cnVlKTtcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgeGhyLm9ubG9hZCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMClcclxuICAgICAgICAgICAgY2FsbGJhY2soeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChqc29uRGF0YSk7XHJcbn1cclxuIiwibGV0IG1lc3NhZ2VCYW5uZXI7XHJcbmxldCBoZGJVUkwsIGNkcFVSTDtcclxuZXhwb3J0IHsgaGRiVVJMLCBjZHBVUkx9O1xyXG5kZWNsYXJlIGxldCBmYWJyaWM6IGFueTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0X3VybHMoY29uZmlnX2RhdGEpXHJcbntcclxuICAgIGhkYlVSTCA9IGNvbmZpZ19kYXRhLmhkYlVSTDsgXHJcbiAgICBjZHBVUkwgPSBjb25maWdfZGF0YS5jZHBVUkw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0X3N0cmluZ190b19hcnJheShzdHIpIHtcclxuICAgIHJldHVybiBzdHIuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnRyaW0oKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplTWVzc2FnZUJhbm5lcigpXHJcbntcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1zLU1lc3NhZ2VCYW5uZXInKTtcclxuICAgIG1lc3NhZ2VCYW5uZXIgPSBuZXcgZmFicmljLk1lc3NhZ2VCYW5uZXIoZWxlbWVudCk7XHJcbiAgICBtZXNzYWdlQmFubmVyLmhpZGVCYW5uZXIoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZW1wdHkoZGF0YSkge1xyXG4gICAgaWYgKHR5cGVvZiAoZGF0YSkgPT0gJ251bWJlcicgfHwgdHlwZW9mIChkYXRhKSA9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIChkYXRhKSA9PSAndW5kZWZpbmVkJyB8fCBkYXRhID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIChkYXRhLmxlbmd0aCkgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGggPT0gMDtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vLyB0aGlzIGlzIGtpbmQgb2YgYSBwYXR0ZXJuIGZvciBoYW5kbGluZyBjb250ZW50cyBpbiB0aGUgY3VycmVudCBleGNlbCBzaGVldFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhjZWxBY3Rpb25IYW5kbGVyKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBFeGNlbC5ydW4oYWN0aW9uKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZXJyb3JIYW5kbGVyKGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGZvciB0cmVhdGluZyBlcnJvcnNcclxuZXhwb3J0IGZ1bmN0aW9uIGVycm9ySGFuZGxlcihlcnJvcikge1xyXG4gICAgLy8gQWx3YXlzIGJlIHN1cmUgdG8gY2F0Y2ggYW55IGFjY3VtdWxhdGVkIGVycm9ycyB0aGF0IGJ1YmJsZSB1cCBmcm9tIHRoZSBFeGNlbC5ydW4gZXhlY3V0aW9uXHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKFwiRXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBPZmZpY2VFeHRlbnNpb24uRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRlYnVnIGluZm86IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IuZGVidWdJbmZvKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBmb3IgZGlzcGxheWluZyBub3RpZmljYXRpb25zXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKGhlYWRlciwgY29udGVudCkge1xyXG4gICAgJChcIiNub3RpZmljYXRpb24taGVhZGVyXCIpLnRleHQoaGVhZGVyKTtcclxuICAgICQoXCIjbm90aWZpY2F0aW9uLWJvZHlcIikudGV4dChjb250ZW50KTtcclxuICAgIG1lc3NhZ2VCYW5uZXIuc2hvd0Jhbm5lcigpO1xyXG4gICAgbWVzc2FnZUJhbm5lci50b2dnbGVFeHBhbnNpb24oKTtcclxufVxyXG5cclxuIiwiaW1wb3J0ICogYXMgQVBJSGFuZGxlciBmcm9tIFwiLi9BUElIYW5kbGVyXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi9Db21tb25cIjtcclxuXHJcbmxldCBzZWFyY2hWYWx1ZUxvY3MgPSBbXTtcclxuLy9sZXQgZXhwb3J0UGF0aHMgPSBbXTtcclxubGV0IGV4cG9ydFZhbHVlTG9jcyA9IFtdO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRXhjZWxDb25maWd1cmF0aW9uKHNoZWV0TmFtZSkge1xyXG4gICAgQVBJSGFuZGxlci5hc3luY0FwaUdldENhbGwoXCJhcGkvbG9hZGV4Y2VsY29uZmlnL1wiICsgc2hlZXROYW1lLCBleGNlbENvbmZpZ0hhbmRsZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFBhcmFtZXRlcnMoc2hlZXROYW1lKSB7XHJcbiAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2VcIiwgXCJEYXRhIGlzIGxvYWRpbmcgLi4uXCIpXHJcbiAgICBnZXRTZWFyY2hWYWx1ZXMoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIEFQSUhhbmRsZXIuYXN5bmNBcGlHZXRDYWxsKFwiYXBpL2xvYWRwYXJhbWV0ZXJzL1wiICsgc2hlZXROYW1lICtcIj9zZWFyY2hWYWx1ZXM9XCIgKyBkYXRhLCBzZXRQYXJhbWV0ZXJzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2hlZXROYW1lKCkge1xyXG4gICAgbGV0IHNoZWV0TmFtZSA9IFwiXCI7XHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuICAgICAgICBzaGVldC5sb2FkKFwibmFtZVwiKTtcclxuICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgIHNoZWV0TmFtZT0gc2hlZXQubmFtZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNoZWV0TmFtZTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0U2VhcmNoVmFsdWVzKCkge1xyXG4gICAgbGV0IHNlYXJjaFZhbHVlcyA9IFtdO1xyXG4gICAgYXdhaXQgQ29tbW9uLmV4Y2VsQWN0aW9uSGFuZGxlcihhc3luYyAoY3R4KSA9PiB7XHJcbiAgICAgICAgbGV0IHNoZWV0ID0gY3R4Lndvcmtib29rLndvcmtzaGVldHMuZ2V0QWN0aXZlV29ya3NoZWV0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgY29tcElEID0gMDsgY29tcElEIDwgc2VhcmNoVmFsdWVMb2NzLmxlbmd0aDsgY29tcElEKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvbXBTZWFyY2hWYWx1ZUxvY3MgPSBzZWFyY2hWYWx1ZUxvY3NbY29tcElEXVxyXG4gICAgICAgICAgICBmb3IgKGxldCB2YWx1ZUlEID0gMDsgdmFsdWVJRCA8IGNvbXBTZWFyY2hWYWx1ZUxvY3MubGVuZ3RoOyB2YWx1ZUlEKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCByYW5nZSA9IHNoZWV0LmdldFJhbmdlKGNvbXBTZWFyY2hWYWx1ZUxvY3NbdmFsdWVJRF0pLmxvYWQoXCJ2YWx1ZXNcIik7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoVmFsdWVzLnB1c2gocmFuZ2UudmFsdWVzWzBdWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNlYXJjaFZhbHVlcy50b1N0cmluZygpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXRQYXJhbWV0ZXJzKHBhcmFtU3RyKSB7XHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2VcIiwgXCJEYXRhIGhhcyBiZWVuIGxvYWRlZC5cIik7XHJcbiAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSBKU09OLnBhcnNlKHBhcmFtU3RyKTtcclxuICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlTG9jYXRpb25zID0gcGFyYW1ldGVyc1tpXVtcIlZhbHVlTG9jYXRpb25zXCJdO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJhbWV0ZXJzW2ldW1wiVmFsdWVcIl07XHJcbiAgICAgICAgICAgIGxldCBpbXBvcnRSYW5nZSA9IHNoZWV0LmdldFJhbmdlKHZhbHVlTG9jYXRpb25zWzBdKTtcclxuICAgICAgICAgICAgaW1wb3J0UmFuZ2UudmFsdWVzID0gW1t2YWx1ZV1dO1xyXG4gICAgICAgICAgICAvLyBkbyBub3QgdXBkYXRlIHZhbHVlcyB0byBleHBvcnQgcGFyYW1ldGVycyBhcyB0aGVzZSBhcmUgb25seSBzZXQgYnkgdGhlIHVzZXIgdmlhIGNhbGN1bGF0aW9uIHRvb2xcclxuICAgICAgICAgICAgLy9pZiAodmFsdWVMb2NhdGlvbnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAvLyAgICBsZXQgZXhwb3J0UmFuZ2UgPSBzaGVldC5nZXRSYW5nZSh2YWx1ZUxvY2F0aW9uc1sxXSlcclxuICAgICAgICAgICAgLy8gICAgZXhwb3J0UmFuZ2UudmFsdWVzID0gW1t2YWx1ZV1dO1xyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRFeHBvcnRQYXJhbWV0ZXJzKCkge1xyXG4gICAgbGV0IGV4cG9ydFBhcmFtcyA9IFtdO1xyXG4gICAgYXdhaXQgQ29tbW9uLmV4Y2VsQWN0aW9uSGFuZGxlcihhc3luYyBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlOlwiLCBcIlVwZGF0aW5nIHRoZSBjb21wb25lbnRzLi4uIFwiKTtcclxuICAgICAgICAvLyBjcmVhdGUgYSAyZC1hcnJheSB0byBzdG9yZSBhbGwgdGhlIGNvbXBvbmVudCBpbmZvcm1hdGlvblxyXG4gICAgICAgIGxldCBzaGVldCA9IGN0eC53b3JrYm9vay53b3Jrc2hlZXRzLmdldEFjdGl2ZVdvcmtzaGVldCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwb3J0VmFsdWVMb2NzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVSYW5nZSA9IHNoZWV0LmdldFJhbmdlKGV4cG9ydFZhbHVlTG9jc1tpXSkubG9hZChcInZhbHVlc1wiKTtcclxuICAgICAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgICAgICAgICAgZXhwb3J0UGFyYW1zLnB1c2godXBkYXRlUmFuZ2UudmFsdWVzWzBdWzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBleHBvcnRQYXJhbXMudG9TdHJpbmcoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBhcmFtZXRlcnMoc2hlZXROYW1lKSB7XHJcbiAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIFwiVXBkYXRpbmcgdGhlIGNvbXBvbmVudHMuLi4gXCIpO1xyXG4gICAgZ2V0RXhwb3J0UGFyYW1ldGVycygpLnRoZW4oZXhwb3J0UGFyYW1zID0+IEFQSUhhbmRsZXIuc3luY0FwaVB1dENhbGwoXCJhcGkvdXBkYXRlcGFyYW1ldGVycy9cIiArIHNoZWV0TmFtZSwgZXhwb3J0UGFyYW1zLCBoYW5kbGVFeHBvcnRQYXJhbXNGZWVkYmFjaykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFeHBvcnRQYXJhbXNGZWVkYmFjayhyZXNwb25zZUNvZGUpIHtcclxuICAgIGlmIChyZXNwb25zZUNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlQ29kZSA9PSA1MDApXHJcbiAgICAgICAgICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZTpcIiwgXCJVcGRhdGluZyBmYWlsZWQgZHVlIHRvIGRhdGEgaW5jb25zaXN0ZW5jeS4gWW91IG11c3QgZmV0Y2ggZGF0YSBiZWZvcmUgdXBkYXRpbmcuXCIpO1xyXG4gICAgICAgIGVsc2UgQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlOlwiLCBcIlVwZGF0aW5nIGZhaWxlZCFcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZTpcIiwgXCJVcGRhdGluZyBzdWNjZWVkZWQhXCIpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBleGNlbENvbmZpZ0hhbmRsZXIoY29uZmlnOiBzdHJpbmcpIHtcclxuICAgIGxldCBjb25maWdBcnIgPSBKU09OLnBhcnNlKGNvbmZpZyk7XHJcbiAgICBwcm9jZXNzRXhjZWxTZWFyY2hDcml0ZXJpYShjb25maWdBcnJbMF0pO1xyXG4gICAgcHJvY2Vzc0V4cG9ydFBhcmFtZXRlcnMoY29uZmlnQXJyWzFdKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHN0b3JlU2VhcmNoVmFsdWVMb2NhdGlvbnMoc2VhcmNoUGFyYW1DZWxscykge1xyXG4gICAgbGV0IHZhbHVlTG9jcyA9IFtdO1xyXG4gICAgLy9hZGQgdGhlIHRleHRzIHRvIGJlIGRpc3BsYXllZFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWFyY2hQYXJhbUNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFsdWVMb2NzLnB1c2goc2VhcmNoUGFyYW1DZWxsc1tpXVtcIlZhbHVlTG9jYXRpb25cIl0pO1xyXG4gICAgfVxyXG4gICAgc2VhcmNoVmFsdWVMb2NzLnB1c2godmFsdWVMb2NzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U2VhcmNoVGV4dHNUb0V4Y2VsU2hlZXQoc2hlZXQsIHNlYXJjaFBhcmFtQ2VsbHMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VhcmNoUGFyYW1DZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCB0ZXh0TG9jID0gc2VhcmNoUGFyYW1DZWxsc1tpXVtcIkNlbGxMb2NhdGlvblwiXTtcclxuXHJcbiAgICAgICAgLy9nZXQgYSByYW5nZSB0aGF0IGNvdmVycyB0aGUgc2VhcmNoIGNlbGxzXHJcbiAgICAgICAgbGV0IHRleHRSYW5nZSA9IHNoZWV0LmdldFJhbmdlKHRleHRMb2MpO1xyXG4gICAgICAgIHRleHRSYW5nZS52YWx1ZXMgPSBbW3NlYXJjaFBhcmFtQ2VsbHNbaV1bXCJEaXNwbGF5VGV4dFwiXV1dO1xyXG5cclxuICAgICAgICAvL2Zvcm1hdCB0ZXh0IGNlbGxcclxuICAgICAgICAvL3RleHRSYW5nZS5mb3JtYXQuYXV0b2ZpdENvbHVtbnMoKTsgLy8gdGhpcyBkb2VzIG5vdCBzZWVtIHRvIGJlIHN1cHBvcnRlZCBpbiBFeGNlbCAyMDE2XHJcbiAgICAgICAgdGV4dFJhbmdlLmZvcm1hdC5mb250LmJvbGQgPSB0cnVlO1xyXG4gICAgICAgIHRleHRSYW5nZS5mb3JtYXQuZmlsbC5jb2xvciA9IFwieWVsbG93XCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NFeGNlbFNlYXJjaENyaXRlcmlhKHNlYXJjaFBhcmFtQ2VsbHMpIHtcclxuICAgIC8vIFJ1biBhIGJhdGNoIG9wZXJhdGlvbiBhZ2FpbnN0IHRoZSBFeGNlbCBvYmplY3QgbW9kZWxcclxuICAgIGF3YWl0IENvbW1vbi5leGNlbEFjdGlvbkhhbmRsZXIoYXN5bmMgY3R4ID0+IHtcclxuICAgICAgICAvLyBDcmVhdGUgYSBwcm94eSBvYmplY3QgZm9yIHRoZSBhY3RpdmUgc2hlZXRcclxuICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuXHJcbiAgICAgICAgLy9wcm9jZXNzIHRoZSB0ZXh0IHRvIGJlIGRpc3BsYXllZCBpbiBzZWFyY2ggY2VsbHNcclxuICAgICAgICBzdG9yZVNlYXJjaFZhbHVlTG9jYXRpb25zKHNlYXJjaFBhcmFtQ2VsbHMpO1xyXG4gICAgICAgIHNldFNlYXJjaFRleHRzVG9FeGNlbFNoZWV0KHNoZWV0LCBzZWFyY2hQYXJhbUNlbGxzKTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzRXhwb3J0UGFyYW1ldGVycyhleHBvcnRQYXJhbUxvY3MpIHtcclxuICAgIC8vIFJ1biBhIGJhdGNoIG9wZXJhdGlvbiBhZ2FpbnN0IHRoZSBFeGNlbCBvYmplY3QgbW9kZWxcclxuICAgIGF3YWl0IENvbW1vbi5leGNlbEFjdGlvbkhhbmRsZXIoYXN5bmMgY3R4ID0+IHtcclxuICAgICAgICAvL3Byb2Nlc3MgdGhlIHRleHQgdG8gYmUgZGlzcGxheWVkIGluIHNlYXJjaCBjZWxsc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwb3J0UGFyYW1Mb2NzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vZXhwb3J0UGF0aHMucHVzaChleHBvcnRQYXJhbUxpc3RbaV1bXCJQcm9wc1wiXSk7XHJcbiAgICAgICAgICAgIGV4cG9ydFZhbHVlTG9jcy5wdXNoKGV4cG9ydFBhcmFtTG9jc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgRXhjZWxIYW5kbGVyIGZyb20gXCIuL0V4Y2VsSGFuZGxlclwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4vQ29tbW9uXCI7XHJcbmxldCBzaGVldE5hbWU6IHN0cmluZztcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgLy8gVGhlIGluaXRpYWxpemUgZnVuY3Rpb24gbXVzdCBiZSBydW4gZWFjaCB0aW1lIGEgbmV3IHBhZ2UgaXMgbG9hZGVkLlxyXG4gICAgT2ZmaWNlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAocmVhc29uKSB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzaGVldE5hbWUgPSBhd2FpdCBFeGNlbEhhbmRsZXIuZ2V0U2hlZXROYW1lKCk7XHJcbiAgICAgICAgICAgIGxvYWRFeGNlbENvbmZpZ3VyYXRpb24oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgdGhlIEZhYnJpY1VJIG5vdGlmaWNhdGlvbiBtZWNoYW5pc20gYW5kIGhpZGUgaXRcclxuICAgICAgICAgICAgQ29tbW9uLmluaXRpYWxpemVNZXNzYWdlQmFubmVyKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJZiBub3QgdXNpbmcgRXhjZWwgMjAxNiwgdXNlIGZhbGxiYWNrIGxvZ2ljLlxyXG4gICAgICAgICAgICBpZiAoIU9mZmljZS5jb250ZXh0LnJlcXVpcmVtZW50cy5pc1NldFN1cHBvcnRlZCgnRXhjZWxBcGknLCAxLjEpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3RlbXBsYXRlLWRlc2NyaXB0aW9uXCIpLnRleHQoXCJUaGlzIHNhbXBsZSBhbGxvd3MgcmVhZGluZy93cml0aW5nIGZyb20vdG8gdGhlIEV4Y2VsIHNoZWV0LlwiKTtcclxuICAgICAgICAgICAgICAgICQoJyNmZXRjaC1idXR0b24tdGV4dCcpLnRleHQoXCJGZXRjaFwiKTtcclxuICAgICAgICAgICAgICAgICQoJyNmZXRjaC1idXR0b24tZGVzYycpLnRleHQoXCJGZXRjaCBjb21wb25lbnRzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNmZXRjaC1idXR0b24nKS5jbGljayhsb2FkUGFyYW1ldGVycyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI3B1dC1idXR0b24tdGV4dCcpLnRleHQoXCJVcGRhdGVcIik7XHJcbiAgICAgICAgICAgICAgICAkKCcjcHV0LWJ1dHRvbi1kZXNjJykudGV4dChcIlVwZGF0ZSBjb21wb25lbnRzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNwdXQtYnV0dG9uJykuY2xpY2sodXBkYXRlUGFyYW1ldGVycyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyQoXCIjdGVtcGxhdGUtZGVzY3JpcHRpb25cIikudGV4dChcIlRoaXMgc2FtcGxlIHdpbGwgZmV0Y2ggYWxsIHRoZSBjb21wb25lbnRzIHRvIHRoZSBFeGNlbCBzaGVldC5cIik7XHJcbiAgICAgICAgICAgICQoJyNmZXRjaC1idXR0b24tdGV4dCcpLnRleHQoXCJGZXRjaFwiKTtcclxuICAgICAgICAgICAgJCgnI2ZldGNoLWJ1dHRvbi1kZXNjJykudGV4dChcIkZldGNoIGFsbCB0aGUgY29tcG9uZW50cy5cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgYSBjbGljayBldmVudCBoYW5kbGVyIGZvciB0aGUgZmV0Y2ggYnV0dG9uLlxyXG4gICAgICAgICAgICAkKCcjZmV0Y2gtYnV0dG9uJykuY2xpY2sobG9hZFBhcmFtZXRlcnMpO1xyXG5cclxuICAgICAgICAgICAgJCgnI3B1dC1idXR0b24tdGV4dCcpLnRleHQoXCJVcGRhdGVcIik7XHJcbiAgICAgICAgICAgICQoJyNwdXQtYnV0dG9uLWRlc2MnKS50ZXh0KFwiVXBkYXRlIGNvbXBvbmVudHMuXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGEgY2xpY2sgZXZlbnQgaGFuZGxlciBmb3IgdGhlIHB1dCBidXR0b24uXHJcbiAgICAgICAgICAgICQoJyNwdXQtYnV0dG9uJykuY2xpY2sodXBkYXRlUGFyYW1ldGVycyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRFeGNlbENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICBFeGNlbEhhbmRsZXIubG9hZEV4Y2VsQ29uZmlndXJhdGlvbihzaGVldE5hbWUpO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRQYXJhbWV0ZXJzKCkge1xyXG4gICAgRXhjZWxIYW5kbGVyLmxvYWRQYXJhbWV0ZXJzKHNoZWV0TmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBhcmFtZXRlcnMoKSB7XHJcbiAgICBFeGNlbEhhbmRsZXIudXBkYXRlUGFyYW1ldGVycyhzaGVldE5hbWUpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==