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
(function () {
    "use strict";
    // The initialize function must be run each time a new page is loaded.
    Office.initialize = function (reason) {
        $(document).ready(function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    ExcelHandler.loadExcelConfiguration();
                    // Initialize the FabricUI notification mechanism and hide it
                    Common.initializeMessageBanner();
                    // If not using Excel 2016, use fallback logic.
                    if (!Office.context.requirements.isSetSupported('ExcelApi', 1.1)) {
                        $("#template-description").text("This sample allows reading/writing from/to the Excel sheet.");
                        $('#fetch-button-text').text("Fetch");
                        $('#fetch-button-desc').text("Fetch components");
                        $('#fetch-button').click(ExcelHandler.loadParameters);
                        $('#put-button-text').text("Update");
                        $('#put-button-desc').text("Update components");
                        $('#put-button').click(ExcelHandler.updateParameters);
                        return [2 /*return*/];
                    }
                    //$("#template-description").text("This sample will fetch all the components to the Excel sheet.");
                    $('#fetch-button-text').text("Fetch");
                    $('#fetch-button-desc').text("Fetch all the components.");
                    // Add a click event handler for the fetch button.
                    $('#fetch-button').click(ExcelHandler.loadParameters);
                    $('#put-button-text').text("Update");
                    $('#put-button-desc').text("Update components.");
                    // Add a click event handler for the put button.
                    $('#put-button').click(ExcelHandler.updateParameters);
                    return [2 /*return*/];
                });
            });
        });
    };
})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0FQSUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi93d3dyb290L0V4Y2VsQWRkSW4vRXhjZWxIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3d3d3Jvb3QvRXhjZWxBZGRJbi9Ib21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLFNBQWdCLGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUTtJQUM1QyxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0lBQy9CLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixHQUFHLENBQUMsTUFBTSxHQUFHOzs7Ozs2QkFDTCxJQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsR0FBeEMsd0JBQXdDO3dCQUN4QyxxQkFBTSxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQzs7d0JBQWhDLFNBQWdDLENBQUM7Ozs7OztLQUN4QztJQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQVRELDBDQVNDO0FBRUQsU0FBZ0IsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUTtJQUNwRCxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0lBQy9CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztJQUN4RSxHQUFHLENBQUMsTUFBTSxHQUFHOzs7Z0JBQ1QsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUc7b0JBQ3hDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Ozs7S0FDbEM7SUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7QUFWRCx3Q0FVQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkQsSUFBSSxhQUFhLENBQUM7QUFDbEIsSUFBSSxNQUFNLEVBQUUsTUFBTSxDQUFDO0FBQ1Ysd0JBQU07QUFBRSx3QkFBTTtBQUl2QixTQUFnQixRQUFRLENBQUMsV0FBVztJQUVoQyx1QkFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDNUIsdUJBQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO0FBQ2hDLENBQUM7QUFKRCw0QkFJQztBQUVELFNBQWdCLHVCQUF1QixDQUFDLEdBQUc7SUFDdkMsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUk7UUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUpELDBEQUlDO0FBRUQsU0FBZ0IsdUJBQXVCO0lBRW5DLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMxRCxhQUFhLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUMvQixDQUFDO0FBTEQsMERBS0M7QUFDRCxTQUFnQixLQUFLLENBQUMsSUFBSTtJQUN0QixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsRUFBRTtRQUN6RCxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQy9DLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksV0FBVyxFQUFFO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7S0FDM0I7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBWEQsc0JBV0M7QUFFRCw2RUFBNkU7QUFDN0UsU0FBc0Isa0JBQWtCLENBQUMsTUFBTTs7Ozs7OztvQkFFdkMscUJBQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7O29CQUF2QixTQUF1QixDQUFDOzs7O29CQUV4QixZQUFZLENBQUMsT0FBSyxDQUFDLENBQUM7Ozs7OztDQUUzQjtBQU5ELGdEQU1DO0FBRUQsc0NBQXNDO0FBQ3RDLFNBQWdCLFlBQVksQ0FBQyxLQUFLO0lBQzlCLDZGQUE2RjtJQUM3RixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDL0IsSUFBSSxLQUFLLFlBQVksZUFBZSxDQUFDLEtBQUssRUFBRTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBQ2pFO0FBQ0wsQ0FBQztBQVBELG9DQU9DO0FBRUQsK0NBQStDO0FBQy9DLFNBQWdCLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxPQUFPO0lBQzVDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNCLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNwQyxDQUFDO0FBTEQsNENBS0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURELCtGQUEyQztBQUMzQyxtRkFBbUM7QUFFbkMsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLHVCQUF1QjtBQUN2QixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFHekIsU0FBZ0Isc0JBQXNCO0lBQ2xDLFVBQVUsQ0FBQyxlQUFlLENBQUMscUJBQXFCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUMxRSxDQUFDO0FBRkQsd0RBRUM7QUFFRCxTQUFnQixjQUFjO0lBQzFCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUscUJBQXFCLENBQUM7SUFDekQsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQUk7UUFDdkIsVUFBVSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDNUUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBTEQsd0NBS0M7QUFFRCxTQUFlLGVBQWU7Ozs7Ozs7b0JBQ3RCLFlBQVksR0FBRyxFQUFFLENBQUM7b0JBQ3RCLHFCQUFNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxVQUFPLEdBQUc7Ozs7O3dDQUNsQyxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzt3Q0FDaEQsTUFBTSxHQUFHLENBQUM7Ozs2Q0FBRSxPQUFNLEdBQUcsZUFBZSxDQUFDLE1BQU07d0NBQzVDLG1CQUFtQixHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUM7d0NBQ3hDLE9BQU8sR0FBRyxDQUFDOzs7NkNBQUUsUUFBTyxHQUFHLG1CQUFtQixDQUFDLE1BQU07d0NBQ2xELEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dDQUN4RSxxQkFBTSxHQUFHLENBQUMsSUFBSSxFQUFFOzt3Q0FBaEIsU0FBZ0IsQ0FBQzt3Q0FDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozt3Q0FIa0IsT0FBTyxFQUFFOzs7d0NBRm5CLE1BQU0sRUFBRTs7Ozs7NkJBUWpFLENBQUM7O29CQVZGLFNBVUUsQ0FBQztvQkFDSCxzQkFBTyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUM7Ozs7Q0FDbEM7QUFFRCxTQUFlLGFBQWEsQ0FBQyxRQUFROzs7Ozt3QkFDakMscUJBQU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDLFVBQU8sR0FBRzs7Ozs7b0NBQ3RDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztvQ0FDeEQsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7b0NBQ2xDLEtBQUssR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29DQUN6RCxLQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0NBQ3BDLGNBQWMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3Q0FDakQsS0FBSyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3Q0FDL0IsV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0NBQ3BELFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0NBQy9CLG1HQUFtRzt3Q0FDbkcsa0NBQWtDO3dDQUNsQyx5REFBeUQ7d0NBQ3pELHFDQUFxQzt3Q0FDckMsR0FBRztxQ0FDTjtvQ0FDRCxxQkFBTSxHQUFHLENBQUMsSUFBSSxFQUFFOztvQ0FBaEIsU0FBZ0IsQ0FBQzs7Ozt5QkFDcEIsQ0FBQzs7b0JBaEJGLFNBZ0JFLENBQUM7Ozs7O0NBQ047QUFFRCxTQUFlLG1CQUFtQjs7Ozs7O29CQUMxQixZQUFZLEdBQUcsRUFBRSxDQUFDO29CQUN0QixxQkFBTSxNQUFNLENBQUMsa0JBQWtCLENBQUMsVUFBZ0IsR0FBRzs7Ozs7OzRDQUMvQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLDZCQUE2QixDQUFDLENBQUM7NENBRS9ELEtBQUssR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDOzRDQUNoRCxDQUFDLEdBQUcsQ0FBQzs7O2lEQUFFLEVBQUMsR0FBRyxlQUFlLENBQUMsTUFBTTs0Q0FDbEMsV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRDQUNwRSxxQkFBTSxHQUFHLENBQUMsSUFBSSxFQUFFOzs0Q0FBaEIsU0FBZ0IsQ0FBQzs0Q0FDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs0Q0FISixDQUFDLEVBQUU7Ozs7Ozt5QkFLbEQsQ0FBQzs7b0JBVEYsU0FTRSxDQUFDO29CQUNILHNCQUFPLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBQzs7OztDQUNsQztBQUVELFNBQWdCLGdCQUFnQjtJQUM1QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLDZCQUE2QixDQUFDLENBQUM7SUFDbkUsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQVksSUFBSSxpQkFBVSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLEVBQUUsMEJBQTBCLENBQUMsRUFBM0YsQ0FBMkYsQ0FBQyxDQUFDO0FBQzVJLENBQUM7QUFIRCw0Q0FHQztBQUVELFNBQVMsMEJBQTBCLENBQUMsWUFBWTtJQUM1QyxJQUFJLFlBQVksSUFBSSxHQUFHLEVBQUU7UUFDckIsSUFBSSxZQUFZLElBQUksR0FBRztZQUNuQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLGlGQUFpRixDQUFDLENBQUM7O1lBQ3RILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztLQUNoRTs7UUFDSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLHFCQUFxQixDQUFDLENBQUM7QUFDcEUsQ0FBQztBQUVELFNBQWUsa0JBQWtCLENBQUMsTUFBYzs7OztZQUN4QyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6Qyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztDQUN6QztBQUdELFNBQVMseUJBQXlCLENBQUMsZ0JBQWdCO0lBQy9DLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNuQiwrQkFBK0I7SUFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM5QyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7S0FDeEQ7SUFDRCxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFFRCxTQUFTLDBCQUEwQixDQUFDLEtBQUssRUFBRSxnQkFBZ0I7SUFDdkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM5QyxJQUFJLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVsRCwwQ0FBMEM7UUFDMUMsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUQsa0JBQWtCO1FBQ2xCLHdGQUF3RjtRQUN4RixTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7S0FDMUM7QUFDTCxDQUFDO0FBRUQsU0FBZSwwQkFBMEIsQ0FBQyxnQkFBZ0I7Ozs7OztnQkFDdEQsdURBQXVEO2dCQUN2RCxxQkFBTSxNQUFNLENBQUMsa0JBQWtCLENBQUMsVUFBTSxHQUFHOzs7OztvQ0FFakMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLENBQUM7b0NBRXpELGtEQUFrRDtvQ0FDbEQseUJBQXlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQ0FDNUMsMEJBQTBCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUM7b0NBQzdDLHFCQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUU7d0NBQXZCLHNCQUFPLFNBQWdCLEVBQUM7Ozt5QkFDM0IsQ0FBQzs7b0JBVEYsdURBQXVEO29CQUN2RCxTQVFFLENBQUM7Ozs7O0NBQ047QUFFRCxTQUFlLHVCQUF1QixDQUFDLGVBQWU7Ozs7OztnQkFDbEQsdURBQXVEO2dCQUN2RCxxQkFBTSxNQUFNLENBQUMsa0JBQWtCLENBQUMsVUFBTSxHQUFHOzs7OztvQ0FDckMsa0RBQWtEO29DQUNsRCxLQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0NBQzdDLGdEQUFnRDt3Q0FDaEQsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQ0FDNUM7b0NBQ00scUJBQU0sR0FBRyxDQUFDLElBQUksRUFBRTt3Q0FBdkIsc0JBQU8sU0FBZ0IsRUFBQzs7O3lCQUMzQixDQUFDOztvQkFSRix1REFBdUQ7b0JBQ3ZELFNBT0UsQ0FBQzs7Ozs7Q0FDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSUQscUdBQStDO0FBQy9DLG1GQUFtQztBQUNuQyxDQUFDO0lBQ0csWUFBWSxDQUFDO0lBQ2Isc0VBQXNFO0lBQ3RFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVSxNQUFNO1FBQ2hDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7OztvQkFDZCxZQUFZLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztvQkFFdEMsNkRBQTZEO29CQUM3RCxNQUFNLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztvQkFFakMsK0NBQStDO29CQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsRUFBRTt3QkFDOUQsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLDZEQUE2RCxDQUFDLENBQUM7d0JBQy9GLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDdEMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7d0JBRWpELENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUV0RCxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3JDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3dCQUVoRCxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUV0RCxzQkFBTztxQkFDVjtvQkFFRCxtR0FBbUc7b0JBQ25HLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdEMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7b0JBRTFELGtEQUFrRDtvQkFDbEQsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBRXRELENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDckMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7b0JBRWpELGdEQUFnRDtvQkFDaEQsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7OztTQUN6RCxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7QUFFTixDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6IkhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3d3d3Jvb3QvRXhjZWxBZGRJbi9Ib21lLnRzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGFzeW5jQXBpR2V0Q2FsbChhcGlVUkwsIGNhbGxiYWNrKSB7XHJcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCBhcGlVUkwsIHRydWUpO1xyXG4gICAgeGhyLm9ubG9hZCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMClcclxuICAgICAgICAgICAgYXdhaXQgY2FsbGJhY2soeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN5bmNBcGlQdXRDYWxsKGFwaVVSTCwgcmF3RGF0YSwgY2FsbGJhY2spIHtcclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIGxldCBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KHJhd0RhdGEpO1xyXG4gICAgeGhyLm9wZW4oXCJQVVRcIiwgYXBpVVJMLCB0cnVlKTtcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgeGhyLm9ubG9hZCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMClcclxuICAgICAgICAgICAgY2FsbGJhY2soeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChqc29uRGF0YSk7XHJcbn1cclxuIiwibGV0IG1lc3NhZ2VCYW5uZXI7XHJcbmxldCBoZGJVUkwsIGNkcFVSTDtcclxuZXhwb3J0IHsgaGRiVVJMLCBjZHBVUkx9O1xyXG5kZWNsYXJlIGxldCBmYWJyaWM6IGFueTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0X3VybHMoY29uZmlnX2RhdGEpXHJcbntcclxuICAgIGhkYlVSTCA9IGNvbmZpZ19kYXRhLmhkYlVSTDsgXHJcbiAgICBjZHBVUkwgPSBjb25maWdfZGF0YS5jZHBVUkw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0X3N0cmluZ190b19hcnJheShzdHIpIHtcclxuICAgIHJldHVybiBzdHIuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnRyaW0oKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplTWVzc2FnZUJhbm5lcigpXHJcbntcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1zLU1lc3NhZ2VCYW5uZXInKTtcclxuICAgIG1lc3NhZ2VCYW5uZXIgPSBuZXcgZmFicmljLk1lc3NhZ2VCYW5uZXIoZWxlbWVudCk7XHJcbiAgICBtZXNzYWdlQmFubmVyLmhpZGVCYW5uZXIoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZW1wdHkoZGF0YSkge1xyXG4gICAgaWYgKHR5cGVvZiAoZGF0YSkgPT0gJ251bWJlcicgfHwgdHlwZW9mIChkYXRhKSA9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIChkYXRhKSA9PSAndW5kZWZpbmVkJyB8fCBkYXRhID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIChkYXRhLmxlbmd0aCkgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGggPT0gMDtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vLyB0aGlzIGlzIGtpbmQgb2YgYSBwYXR0ZXJuIGZvciBoYW5kbGluZyBjb250ZW50cyBpbiB0aGUgY3VycmVudCBleGNlbCBzaGVldFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhjZWxBY3Rpb25IYW5kbGVyKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBFeGNlbC5ydW4oYWN0aW9uKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZXJyb3JIYW5kbGVyKGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGZvciB0cmVhdGluZyBlcnJvcnNcclxuZXhwb3J0IGZ1bmN0aW9uIGVycm9ySGFuZGxlcihlcnJvcikge1xyXG4gICAgLy8gQWx3YXlzIGJlIHN1cmUgdG8gY2F0Y2ggYW55IGFjY3VtdWxhdGVkIGVycm9ycyB0aGF0IGJ1YmJsZSB1cCBmcm9tIHRoZSBFeGNlbC5ydW4gZXhlY3V0aW9uXHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKFwiRXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBPZmZpY2VFeHRlbnNpb24uRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRlYnVnIGluZm86IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IuZGVidWdJbmZvKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBmb3IgZGlzcGxheWluZyBub3RpZmljYXRpb25zXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKGhlYWRlciwgY29udGVudCkge1xyXG4gICAgJChcIiNub3RpZmljYXRpb24taGVhZGVyXCIpLnRleHQoaGVhZGVyKTtcclxuICAgICQoXCIjbm90aWZpY2F0aW9uLWJvZHlcIikudGV4dChjb250ZW50KTtcclxuICAgIG1lc3NhZ2VCYW5uZXIuc2hvd0Jhbm5lcigpO1xyXG4gICAgbWVzc2FnZUJhbm5lci50b2dnbGVFeHBhbnNpb24oKTtcclxufVxyXG5cclxuIiwiaW1wb3J0ICogYXMgQVBJSGFuZGxlciBmcm9tIFwiLi9BUElIYW5kbGVyXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi9Db21tb25cIjtcclxuXHJcbmxldCBzZWFyY2hWYWx1ZUxvY3MgPSBbXTtcclxuLy9sZXQgZXhwb3J0UGF0aHMgPSBbXTtcclxubGV0IGV4cG9ydFZhbHVlTG9jcyA9IFtdO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRXhjZWxDb25maWd1cmF0aW9uKCkge1xyXG4gICAgQVBJSGFuZGxlci5hc3luY0FwaUdldENhbGwoXCJhcGkvbG9hZGV4Y2VsY29uZmlnXCIsIGV4Y2VsQ29uZmlnSGFuZGxlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUGFyYW1ldGVycygpIHtcclxuICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZVwiLCBcIkRhdGEgaXMgbG9hZGluZyAuLi5cIilcclxuICAgIGdldFNlYXJjaFZhbHVlcygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgQVBJSGFuZGxlci5hc3luY0FwaUdldENhbGwoXCJhcGkvbG9hZHBhcmFtZXRlcnMvXCIgKyBkYXRhLCBzZXRQYXJhbWV0ZXJzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRTZWFyY2hWYWx1ZXMoKSB7XHJcbiAgICBsZXQgc2VhcmNoVmFsdWVzID0gW107XHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuICAgICAgICBmb3IgKGxldCBjb21wSUQgPSAwOyBjb21wSUQgPCBzZWFyY2hWYWx1ZUxvY3MubGVuZ3RoOyBjb21wSUQrKykge1xyXG4gICAgICAgICAgICBsZXQgY29tcFNlYXJjaFZhbHVlTG9jcyA9IHNlYXJjaFZhbHVlTG9jc1tjb21wSURdXHJcbiAgICAgICAgICAgIGZvciAobGV0IHZhbHVlSUQgPSAwOyB2YWx1ZUlEIDwgY29tcFNlYXJjaFZhbHVlTG9jcy5sZW5ndGg7IHZhbHVlSUQrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlID0gc2hlZXQuZ2V0UmFuZ2UoY29tcFNlYXJjaFZhbHVlTG9jc1t2YWx1ZUlEXSkubG9hZChcInZhbHVlc1wiKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGN0eC5zeW5jKCk7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hWYWx1ZXMucHVzaChyYW5nZS52YWx1ZXNbMF1bMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc2VhcmNoVmFsdWVzLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldFBhcmFtZXRlcnMocGFyYW1TdHIpIHtcclxuICAgIGF3YWl0IENvbW1vbi5leGNlbEFjdGlvbkhhbmRsZXIoYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZVwiLCBcIkRhdGEgaGFzIGJlZW4gbG9hZGVkLlwiKTtcclxuICAgICAgICBsZXQgcGFyYW1ldGVycyA9IEpTT04ucGFyc2UocGFyYW1TdHIpO1xyXG4gICAgICAgIGxldCBzaGVldCA9IGN0eC53b3JrYm9vay53b3Jrc2hlZXRzLmdldEFjdGl2ZVdvcmtzaGVldCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVMb2NhdGlvbnMgPSBwYXJhbWV0ZXJzW2ldW1wiVmFsdWVMb2NhdGlvbnNcIl07XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcmFtZXRlcnNbaV1bXCJWYWx1ZVwiXTtcclxuICAgICAgICAgICAgbGV0IGltcG9ydFJhbmdlID0gc2hlZXQuZ2V0UmFuZ2UodmFsdWVMb2NhdGlvbnNbMF0pO1xyXG4gICAgICAgICAgICBpbXBvcnRSYW5nZS52YWx1ZXMgPSBbW3ZhbHVlXV07XHJcbiAgICAgICAgICAgIC8vIGRvIG5vdCB1cGRhdGUgdmFsdWVzIHRvIGV4cG9ydCBwYXJhbWV0ZXJzIGFzIHRoZXNlIGFyZSBvbmx5IHNldCBieSB0aGUgdXNlciB2aWEgY2FsY3VsYXRpb24gdG9vbFxyXG4gICAgICAgICAgICAvL2lmICh2YWx1ZUxvY2F0aW9ucy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIC8vICAgIGxldCBleHBvcnRSYW5nZSA9IHNoZWV0LmdldFJhbmdlKHZhbHVlTG9jYXRpb25zWzFdKVxyXG4gICAgICAgICAgICAvLyAgICBleHBvcnRSYW5nZS52YWx1ZXMgPSBbW3ZhbHVlXV07XHJcbiAgICAgICAgICAgIC8vfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEV4cG9ydFBhcmFtZXRlcnMoKSB7XHJcbiAgICBsZXQgZXhwb3J0UGFyYW1zID0gW107XHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIFwiVXBkYXRpbmcgdGhlIGNvbXBvbmVudHMuLi4gXCIpO1xyXG4gICAgICAgIC8vIGNyZWF0ZSBhIDJkLWFycmF5IHRvIHN0b3JlIGFsbCB0aGUgY29tcG9uZW50IGluZm9ybWF0aW9uXHJcbiAgICAgICAgbGV0IHNoZWV0ID0gY3R4Lndvcmtib29rLndvcmtzaGVldHMuZ2V0QWN0aXZlV29ya3NoZWV0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHBvcnRWYWx1ZUxvY3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZVJhbmdlID0gc2hlZXQuZ2V0UmFuZ2UoZXhwb3J0VmFsdWVMb2NzW2ldKS5sb2FkKFwidmFsdWVzXCIpO1xyXG4gICAgICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgICAgICBleHBvcnRQYXJhbXMucHVzaCh1cGRhdGVSYW5nZS52YWx1ZXNbMF1bMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGV4cG9ydFBhcmFtcy50b1N0cmluZygpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGFyYW1ldGVycygpIHtcclxuICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZTpcIiwgXCJVcGRhdGluZyB0aGUgY29tcG9uZW50cy4uLiBcIik7XHJcbiAgICBnZXRFeHBvcnRQYXJhbWV0ZXJzKCkudGhlbihleHBvcnRQYXJhbXMgPT4gQVBJSGFuZGxlci5zeW5jQXBpUHV0Q2FsbChcImFwaS91cGRhdGVwYXJhbWV0ZXJzXCIsIGV4cG9ydFBhcmFtcywgaGFuZGxlRXhwb3J0UGFyYW1zRmVlZGJhY2spKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRXhwb3J0UGFyYW1zRmVlZGJhY2socmVzcG9uc2VDb2RlKSB7XHJcbiAgICBpZiAocmVzcG9uc2VDb2RlICE9IDIwMCkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZUNvZGUgPT0gNTAwKVxyXG4gICAgICAgICAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIFwiVXBkYXRpbmcgZmFpbGVkIGR1ZSB0byBkYXRhIGluY29uc2lzdGVuY3kuIFlvdSBtdXN0IGZldGNoIGRhdGEgYmVmb3JlIHVwZGF0aW5nLlwiKTtcclxuICAgICAgICBlbHNlIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZTpcIiwgXCJVcGRhdGluZyBmYWlsZWQhXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIFwiVXBkYXRpbmcgc3VjY2VlZGVkIVwiKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZXhjZWxDb25maWdIYW5kbGVyKGNvbmZpZzogc3RyaW5nKSB7XHJcbiAgICBsZXQgY29uZmlnQXJyID0gSlNPTi5wYXJzZShjb25maWcpO1xyXG4gICAgcHJvY2Vzc0V4Y2VsU2VhcmNoQ3JpdGVyaWEoY29uZmlnQXJyWzBdKTtcclxuICAgIHByb2Nlc3NFeHBvcnRQYXJhbWV0ZXJzKGNvbmZpZ0FyclsxXSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzdG9yZVNlYXJjaFZhbHVlTG9jYXRpb25zKHNlYXJjaFBhcmFtQ2VsbHMpIHtcclxuICAgIGxldCB2YWx1ZUxvY3MgPSBbXTtcclxuICAgIC8vYWRkIHRoZSB0ZXh0cyB0byBiZSBkaXNwbGF5ZWRcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VhcmNoUGFyYW1DZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhbHVlTG9jcy5wdXNoKHNlYXJjaFBhcmFtQ2VsbHNbaV1bXCJWYWx1ZUxvY2F0aW9uXCJdKTtcclxuICAgIH1cclxuICAgIHNlYXJjaFZhbHVlTG9jcy5wdXNoKHZhbHVlTG9jcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNlYXJjaFRleHRzVG9FeGNlbFNoZWV0KHNoZWV0LCBzZWFyY2hQYXJhbUNlbGxzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlYXJjaFBhcmFtQ2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgdGV4dExvYyA9IHNlYXJjaFBhcmFtQ2VsbHNbaV1bXCJDZWxsTG9jYXRpb25cIl07XHJcblxyXG4gICAgICAgIC8vZ2V0IGEgcmFuZ2UgdGhhdCBjb3ZlcnMgdGhlIHNlYXJjaCBjZWxsc1xyXG4gICAgICAgIGxldCB0ZXh0UmFuZ2UgPSBzaGVldC5nZXRSYW5nZSh0ZXh0TG9jKTtcclxuICAgICAgICB0ZXh0UmFuZ2UudmFsdWVzID0gW1tzZWFyY2hQYXJhbUNlbGxzW2ldW1wiRGlzcGxheVRleHRcIl1dXTtcclxuXHJcbiAgICAgICAgLy9mb3JtYXQgdGV4dCBjZWxsXHJcbiAgICAgICAgLy90ZXh0UmFuZ2UuZm9ybWF0LmF1dG9maXRDb2x1bW5zKCk7IC8vIHRoaXMgZG9lcyBub3Qgc2VlbSB0byBiZSBzdXBwb3J0ZWQgaW4gRXhjZWwgMjAxNlxyXG4gICAgICAgIHRleHRSYW5nZS5mb3JtYXQuZm9udC5ib2xkID0gdHJ1ZTtcclxuICAgICAgICB0ZXh0UmFuZ2UuZm9ybWF0LmZpbGwuY29sb3IgPSBcInllbGxvd1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzRXhjZWxTZWFyY2hDcml0ZXJpYShzZWFyY2hQYXJhbUNlbGxzKSB7XHJcbiAgICAvLyBSdW4gYSBiYXRjaCBvcGVyYXRpb24gYWdhaW5zdCB0aGUgRXhjZWwgb2JqZWN0IG1vZGVsXHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIGN0eCA9PiB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgcHJveHkgb2JqZWN0IGZvciB0aGUgYWN0aXZlIHNoZWV0XHJcbiAgICAgICAgbGV0IHNoZWV0ID0gY3R4Lndvcmtib29rLndvcmtzaGVldHMuZ2V0QWN0aXZlV29ya3NoZWV0KCk7XHJcblxyXG4gICAgICAgIC8vcHJvY2VzcyB0aGUgdGV4dCB0byBiZSBkaXNwbGF5ZWQgaW4gc2VhcmNoIGNlbGxzXHJcbiAgICAgICAgc3RvcmVTZWFyY2hWYWx1ZUxvY2F0aW9ucyhzZWFyY2hQYXJhbUNlbGxzKTtcclxuICAgICAgICBzZXRTZWFyY2hUZXh0c1RvRXhjZWxTaGVldChzaGVldCwgc2VhcmNoUGFyYW1DZWxscyk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGN0eC5zeW5jKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0V4cG9ydFBhcmFtZXRlcnMoZXhwb3J0UGFyYW1Mb2NzKSB7XHJcbiAgICAvLyBSdW4gYSBiYXRjaCBvcGVyYXRpb24gYWdhaW5zdCB0aGUgRXhjZWwgb2JqZWN0IG1vZGVsXHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIGN0eCA9PiB7XHJcbiAgICAgICAgLy9wcm9jZXNzIHRoZSB0ZXh0IHRvIGJlIGRpc3BsYXllZCBpbiBzZWFyY2ggY2VsbHNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cG9ydFBhcmFtTG9jcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvL2V4cG9ydFBhdGhzLnB1c2goZXhwb3J0UGFyYW1MaXN0W2ldW1wiUHJvcHNcIl0pO1xyXG4gICAgICAgICAgICBleHBvcnRWYWx1ZUxvY3MucHVzaChleHBvcnRQYXJhbUxvY3NbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIEV4Y2VsSGFuZGxlciBmcm9tIFwiLi9FeGNlbEhhbmRsZXJcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuL0NvbW1vblwiO1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAvLyBUaGUgaW5pdGlhbGl6ZSBmdW5jdGlvbiBtdXN0IGJlIHJ1biBlYWNoIHRpbWUgYSBuZXcgcGFnZSBpcyBsb2FkZWQuXHJcbiAgICBPZmZpY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChyZWFzb24pIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIEV4Y2VsSGFuZGxlci5sb2FkRXhjZWxDb25maWd1cmF0aW9uKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBGYWJyaWNVSSBub3RpZmljYXRpb24gbWVjaGFuaXNtIGFuZCBoaWRlIGl0XHJcbiAgICAgICAgICAgIENvbW1vbi5pbml0aWFsaXplTWVzc2FnZUJhbm5lcigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSWYgbm90IHVzaW5nIEV4Y2VsIDIwMTYsIHVzZSBmYWxsYmFjayBsb2dpYy5cclxuICAgICAgICAgICAgaWYgKCFPZmZpY2UuY29udGV4dC5yZXF1aXJlbWVudHMuaXNTZXRTdXBwb3J0ZWQoJ0V4Y2VsQXBpJywgMS4xKSkge1xyXG4gICAgICAgICAgICAgICAgJChcIiN0ZW1wbGF0ZS1kZXNjcmlwdGlvblwiKS50ZXh0KFwiVGhpcyBzYW1wbGUgYWxsb3dzIHJlYWRpbmcvd3JpdGluZyBmcm9tL3RvIHRoZSBFeGNlbCBzaGVldC5cIik7XHJcbiAgICAgICAgICAgICAgICAkKCcjZmV0Y2gtYnV0dG9uLXRleHQnKS50ZXh0KFwiRmV0Y2hcIik7XHJcbiAgICAgICAgICAgICAgICAkKCcjZmV0Y2gtYnV0dG9uLWRlc2MnKS50ZXh0KFwiRmV0Y2ggY29tcG9uZW50c1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjZmV0Y2gtYnV0dG9uJykuY2xpY2soRXhjZWxIYW5kbGVyLmxvYWRQYXJhbWV0ZXJzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjcHV0LWJ1dHRvbi10ZXh0JykudGV4dChcIlVwZGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgICQoJyNwdXQtYnV0dG9uLWRlc2MnKS50ZXh0KFwiVXBkYXRlIGNvbXBvbmVudHNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI3B1dC1idXR0b24nKS5jbGljayhFeGNlbEhhbmRsZXIudXBkYXRlUGFyYW1ldGVycyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyQoXCIjdGVtcGxhdGUtZGVzY3JpcHRpb25cIikudGV4dChcIlRoaXMgc2FtcGxlIHdpbGwgZmV0Y2ggYWxsIHRoZSBjb21wb25lbnRzIHRvIHRoZSBFeGNlbCBzaGVldC5cIik7XHJcbiAgICAgICAgICAgICQoJyNmZXRjaC1idXR0b24tdGV4dCcpLnRleHQoXCJGZXRjaFwiKTtcclxuICAgICAgICAgICAgJCgnI2ZldGNoLWJ1dHRvbi1kZXNjJykudGV4dChcIkZldGNoIGFsbCB0aGUgY29tcG9uZW50cy5cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgYSBjbGljayBldmVudCBoYW5kbGVyIGZvciB0aGUgZmV0Y2ggYnV0dG9uLlxyXG4gICAgICAgICAgICAkKCcjZmV0Y2gtYnV0dG9uJykuY2xpY2soRXhjZWxIYW5kbGVyLmxvYWRQYXJhbWV0ZXJzKTtcclxuXHJcbiAgICAgICAgICAgICQoJyNwdXQtYnV0dG9uLXRleHQnKS50ZXh0KFwiVXBkYXRlXCIpO1xyXG4gICAgICAgICAgICAkKCcjcHV0LWJ1dHRvbi1kZXNjJykudGV4dChcIlVwZGF0ZSBjb21wb25lbnRzLlwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBhIGNsaWNrIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBwdXQgYnV0dG9uLlxyXG4gICAgICAgICAgICAkKCcjcHV0LWJ1dHRvbicpLmNsaWNrKEV4Y2VsSGFuZGxlci51cGRhdGVQYXJhbWV0ZXJzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG59KSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9