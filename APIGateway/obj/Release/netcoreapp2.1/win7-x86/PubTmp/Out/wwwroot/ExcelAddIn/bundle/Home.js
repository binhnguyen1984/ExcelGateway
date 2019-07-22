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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0FQSUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi93d3dyb290L0V4Y2VsQWRkSW4vRXhjZWxIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3d3d3Jvb3QvRXhjZWxBZGRJbi9Ib21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLFNBQWdCLGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUTtJQUM1QyxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0lBQy9CLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFB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LFFBQVEsQ0FBQyxDQUFDO3dCQUNyQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQzt3QkFFaEQsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3QkFFdEQsc0JBQU87cUJBQ1Y7b0JBRUQsbUdBQW1HO29CQUNuRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3RDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO29CQUUxRCxrREFBa0Q7b0JBQ2xELENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUV0RCxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3JDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUVqRCxnREFBZ0Q7b0JBQ2hELENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Ozs7U0FDekQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJIb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93d3dyb290L0V4Y2VsQWRkSW4vSG9tZS50c1wiKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBhc3luY0FwaUdldENhbGwoYXBpVVJMLCBjYWxsYmFjaykge1xyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgYXBpVVJMLCB0cnVlKTtcclxuICAgIHhoci5vbmxvYWQgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDApXHJcbiAgICAgICAgICAgIGF3YWl0IGNhbGxiYWNrKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgfVxyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzeW5jQXBpUHV0Q2FsbChhcGlVUkwsIHJhd0RhdGEsIGNhbGxiYWNrKSB7XHJcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICBsZXQganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeShyYXdEYXRhKTtcclxuICAgIHhoci5vcGVuKFwiUFVUXCIsIGFwaVVSTCwgdHJ1ZSk7XHJcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxuICAgIHhoci5vbmxvYWQgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDApXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgfVxyXG4gICAgeGhyLnNlbmQoanNvbkRhdGEpO1xyXG59XHJcbiIsImxldCBtZXNzYWdlQmFubmVyO1xyXG5sZXQgaGRiVVJMLCBjZHBVUkw7XHJcbmV4cG9ydCB7IGhkYlVSTCwgY2RwVVJMfTtcclxuZGVjbGFyZSBsZXQgZmFicmljOiBhbnk7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldF91cmxzKGNvbmZpZ19kYXRhKVxyXG57XHJcbiAgICBoZGJVUkwgPSBjb25maWdfZGF0YS5oZGJVUkw7IFxyXG4gICAgY2RwVVJMID0gY29uZmlnX2RhdGEuY2RwVVJMO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydF9zdHJpbmdfdG9fYXJyYXkoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS50cmltKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZU1lc3NhZ2VCYW5uZXIoKVxyXG57XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tcy1NZXNzYWdlQmFubmVyJyk7XHJcbiAgICBtZXNzYWdlQmFubmVyID0gbmV3IGZhYnJpYy5NZXNzYWdlQmFubmVyKGVsZW1lbnQpO1xyXG4gICAgbWVzc2FnZUJhbm5lci5oaWRlQmFubmVyKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5KGRhdGEpIHtcclxuICAgIGlmICh0eXBlb2YgKGRhdGEpID09ICdudW1iZXInIHx8IHR5cGVvZiAoZGF0YSkgPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiAoZGF0YSkgPT0gJ3VuZGVmaW5lZCcgfHwgZGF0YSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiAoZGF0YS5sZW5ndGgpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLy8gdGhpcyBpcyBraW5kIG9mIGEgcGF0dGVybiBmb3IgaGFuZGxpbmcgY29udGVudHMgaW4gdGhlIGN1cnJlbnQgZXhjZWwgc2hlZXRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4Y2VsQWN0aW9uSGFuZGxlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgRXhjZWwucnVuKGFjdGlvbik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGVycm9ySGFuZGxlcihlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBmb3IgdHJlYXRpbmcgZXJyb3JzXHJcbmV4cG9ydCBmdW5jdGlvbiBlcnJvckhhbmRsZXIoZXJyb3IpIHtcclxuICAgIC8vIEFsd2F5cyBiZSBzdXJlIHRvIGNhdGNoIGFueSBhY2N1bXVsYXRlZCBlcnJvcnMgdGhhdCBidWJibGUgdXAgZnJvbSB0aGUgRXhjZWwucnVuIGV4ZWN1dGlvblxyXG4gICAgc2hvd05vdGlmaWNhdGlvbihcIkVycm9yXCIsIGVycm9yKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpO1xyXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgT2ZmaWNlRXh0ZW5zaW9uLkVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEZWJ1ZyBpbmZvOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yLmRlYnVnSW5mbykpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gZm9yIGRpc3BsYXlpbmcgbm90aWZpY2F0aW9uc1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbihoZWFkZXIsIGNvbnRlbnQpIHtcclxuICAgICQoXCIjbm90aWZpY2F0aW9uLWhlYWRlclwiKS50ZXh0KGhlYWRlcik7XHJcbiAgICAkKFwiI25vdGlmaWNhdGlvbi1ib2R5XCIpLnRleHQoY29udGVudCk7XHJcbiAgICBtZXNzYWdlQmFubmVyLnNob3dCYW5uZXIoKTtcclxuICAgIG1lc3NhZ2VCYW5uZXIudG9nZ2xlRXhwYW5zaW9uKCk7XHJcbn1cclxuXHJcbiIsImltcG9ydCAqIGFzIEFQSUhhbmRsZXIgZnJvbSBcIi4vQVBJSGFuZGxlclwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4vQ29tbW9uXCI7XHJcblxyXG5sZXQgc2VhcmNoVmFsdWVMb2NzID0gW107XHJcbmxldCBleHBvcnRQYXRocyA9IFtdO1xyXG5sZXQgZXhwb3J0VmFsdWVMb2NzID0gW107XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRFeGNlbENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICBBUElIYW5kbGVyLmFzeW5jQXBpR2V0Q2FsbChcImFwaS9sb2FkZXhjZWxjb25maWdcIiwgZXhjZWxDb25maWdIYW5kbGVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQYXJhbWV0ZXJzKCkge1xyXG4gICAgQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlXCIsIFwiRGF0YSBpcyBsb2FkaW5nIC4uLlwiKVxyXG4gICAgZ2V0U2VhcmNoVmFsdWVzKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICBBUElIYW5kbGVyLmFzeW5jQXBpR2V0Q2FsbChcImFwaS9sb2FkcGFyYW1ldGVycy9cIiArIGRhdGEsIHNldFBhcmFtZXRlcnMpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFNlYXJjaFZhbHVlcygpIHtcclxuICAgIGxldCBzZWFyY2hWYWx1ZXMgPSBbXTtcclxuICAgIGF3YWl0IENvbW1vbi5leGNlbEFjdGlvbkhhbmRsZXIoYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgICAgIGxldCBzaGVldCA9IGN0eC53b3JrYm9vay53b3Jrc2hlZXRzLmdldEFjdGl2ZVdvcmtzaGVldCgpO1xyXG4gICAgICAgIGZvciAobGV0IGNvbXBJRCA9IDA7IGNvbXBJRCA8IHNlYXJjaFZhbHVlTG9jcy5sZW5ndGg7IGNvbXBJRCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wU2VhcmNoVmFsdWVMb2NzID0gc2VhcmNoVmFsdWVMb2NzW2NvbXBJRF1cclxuICAgICAgICAgICAgZm9yIChsZXQgdmFsdWVJRCA9IDA7IHZhbHVlSUQgPCBjb21wU2VhcmNoVmFsdWVMb2NzLmxlbmd0aDsgdmFsdWVJRCsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZ2UgPSBzaGVldC5nZXRSYW5nZShjb21wU2VhcmNoVmFsdWVMb2NzW3ZhbHVlSURdKS5sb2FkKFwidmFsdWVzXCIpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFZhbHVlcy5wdXNoKHJhbmdlLnZhbHVlc1swXVswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzZWFyY2hWYWx1ZXMudG9TdHJpbmcoKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2V0UGFyYW1ldGVycyhwYXJhbVN0cikge1xyXG4gICAgYXdhaXQgQ29tbW9uLmV4Y2VsQWN0aW9uSGFuZGxlcihhc3luYyAoY3R4KSA9PiB7XHJcbiAgICAgICAgQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlXCIsIFwiRGF0YSBoYXMgYmVlbiBsb2FkZWQuXCIpO1xyXG4gICAgICAgIGxldCBwYXJhbWV0ZXJzID0gSlNPTi5wYXJzZShwYXJhbVN0cik7XHJcbiAgICAgICAgbGV0IHNoZWV0ID0gY3R4Lndvcmtib29rLndvcmtzaGVldHMuZ2V0QWN0aXZlV29ya3NoZWV0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUxvY2F0aW9ucyA9IHBhcmFtZXRlcnNbaV1bXCJWYWx1ZUxvY2F0aW9uc1wiXTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyYW1ldGVyc1tpXVtcIlZhbHVlXCJdO1xyXG4gICAgICAgICAgICBsZXQgaW1wb3J0UmFuZ2UgPSBzaGVldC5nZXRSYW5nZSh2YWx1ZUxvY2F0aW9uc1swXSk7XHJcbiAgICAgICAgICAgIGltcG9ydFJhbmdlLnZhbHVlcyA9IFtbdmFsdWVdXTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlTG9jYXRpb25zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBleHBvcnRSYW5nZSA9IHNoZWV0LmdldFJhbmdlKHZhbHVlTG9jYXRpb25zWzFdKVxyXG4gICAgICAgICAgICAgICAgZXhwb3J0UmFuZ2UudmFsdWVzID0gW1t2YWx1ZV1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IGN0eC5zeW5jKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RXhwb3J0UGFyYW1ldGVycygpIHtcclxuICAgIGxldCBleHBvcnRQYXJhbXMgPSBbXTtcclxuICAgIGF3YWl0IENvbW1vbi5leGNlbEFjdGlvbkhhbmRsZXIoYXN5bmMgZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZTpcIiwgXCJVcGRhdGluZyB0aGUgY29tcG9uZW50cy4uLiBcIik7XHJcbiAgICAgICAgLy8gY3JlYXRlIGEgMmQtYXJyYXkgdG8gc3RvcmUgYWxsIHRoZSBjb21wb25lbnQgaW5mb3JtYXRpb25cclxuICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cG9ydFZhbHVlTG9jcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlUmFuZ2UgPSBzaGVldC5nZXRSYW5nZShleHBvcnRWYWx1ZUxvY3NbaV0pLmxvYWQoXCJ2YWx1ZXNcIik7XHJcbiAgICAgICAgICAgIGF3YWl0IGN0eC5zeW5jKCk7XHJcbiAgICAgICAgICAgIGV4cG9ydFBhcmFtcy5wdXNoKHVwZGF0ZVJhbmdlLnZhbHVlc1swXVswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZXhwb3J0UGFyYW1zLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQYXJhbWV0ZXJzKCkge1xyXG4gICAgQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlOlwiLCBcIlVwZGF0aW5nIHRoZSBjb21wb25lbnRzLi4uIFwiKTtcclxuICAgIGdldEV4cG9ydFBhcmFtZXRlcnMoKS50aGVuKGV4cG9ydFBhcmFtcyA9PiBBUElIYW5kbGVyLnN5bmNBcGlQdXRDYWxsKFwiYXBpL3VwZGF0ZXBhcmFtZXRlcnNcIiwgZXhwb3J0UGFyYW1zLCBoYW5kbGVFeHBvcnRQYXJhbXNGZWVkYmFjaykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFeHBvcnRQYXJhbXNGZWVkYmFjayhyZXNwb25zZUNvZGUpIHtcclxuICAgIGlmIChyZXNwb25zZUNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlQ29kZSA9PSA1MDApXHJcbiAgICAgICAgICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZTpcIiwgXCJVcGRhdGluZyBmYWlsZWQgZHVlIHRvIGRhdGEgaW5jb25zaXN0ZW5jeS4gWW91IG11c3QgZmV0Y2ggZGF0YSBiZWZvcmUgdXBkYXRpbmcuXCIpO1xyXG4gICAgICAgIGVsc2UgQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlOlwiLCBcIlVwZGF0aW5nIGZhaWxlZCFcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZTpcIiwgXCJVcGRhdGluZyBzdWNjZWVkZWQhXCIpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBleGNlbENvbmZpZ0hhbmRsZXIoY29uZmlnOiBzdHJpbmcpIHtcclxuICAgIGxldCBjb25maWdBcnIgPSBKU09OLnBhcnNlKGNvbmZpZyk7XHJcbiAgICBwcm9jZXNzRXhjZWxTZWFyY2hDcml0ZXJpYShjb25maWdBcnJbMF0pO1xyXG4gICAgcHJvY2Vzc0V4cG9ydFBhcmFtZXRlcnMoY29uZmlnQXJyWzFdKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHN0b3JlU2VhcmNoVmFsdWVMb2NhdGlvbnMoc2VhcmNoUHJvcHMpIHtcclxuICAgIGxldCB2YWx1ZUxvY3MgPSBbXTtcclxuICAgIC8vYWRkIHRoZSB0ZXh0cyB0byBiZSBkaXNwbGF5ZWRcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VhcmNoUHJvcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YWx1ZUxvY3MucHVzaChzZWFyY2hQcm9wc1tpXVtcIlZhbHVlTG9jYXRpb25cIl0pO1xyXG4gICAgfVxyXG4gICAgc2VhcmNoVmFsdWVMb2NzLnB1c2godmFsdWVMb2NzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U2VhcmNoVGV4dHNUb0V4Y2VsU2hlZXQoc2hlZXQsIHNlYXJjaFByb3BzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlYXJjaFByb3BzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHRleHRMb2MgPSBzZWFyY2hQcm9wc1tpXVtcIkNlbGxMb2NhdGlvblwiXTtcclxuXHJcbiAgICAgICAgLy9nZXQgYSByYW5nZSB0aGF0IGNvdmVycyB0aGUgc2VhcmNoIGNlbGxzXHJcbiAgICAgICAgbGV0IHRleHRSYW5nZSA9IHNoZWV0LmdldFJhbmdlKHRleHRMb2MpO1xyXG4gICAgICAgIHRleHRSYW5nZS52YWx1ZXMgPSBbW3NlYXJjaFByb3BzW2ldW1wiRGlzcGxheVRleHRcIl1dXTtcclxuXHJcbiAgICAgICAgLy9mb3JtYXQgdGV4dCBjZWxsXHJcbiAgICAgICAgLy90ZXh0UmFuZ2UuZm9ybWF0LmF1dG9maXRDb2x1bW5zKCk7IC8vIHRoaXMgZG9lcyBub3Qgc2VlbSB0byBiZSBzdXBwb3J0ZWQgaW4gRXhjZWwgMjAxNlxyXG4gICAgICAgIHRleHRSYW5nZS5mb3JtYXQuZm9udC5ib2xkID0gdHJ1ZTtcclxuICAgICAgICB0ZXh0UmFuZ2UuZm9ybWF0LmZpbGwuY29sb3IgPSBcInllbGxvd1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzRXhjZWxTZWFyY2hDcml0ZXJpYShzZWFyY2hDZWxsRGljdCkge1xyXG4gICAgLy8gUnVuIGEgYmF0Y2ggb3BlcmF0aW9uIGFnYWluc3QgdGhlIEV4Y2VsIG9iamVjdCBtb2RlbFxyXG4gICAgYXdhaXQgQ29tbW9uLmV4Y2VsQWN0aW9uSGFuZGxlcihhc3luYyBjdHggPT4ge1xyXG4gICAgICAgIC8vIENyZWF0ZSBhIHByb3h5IG9iamVjdCBmb3IgdGhlIGFjdGl2ZSBzaGVldFxyXG4gICAgICAgIGxldCBzaGVldCA9IGN0eC53b3JrYm9vay53b3Jrc2hlZXRzLmdldEFjdGl2ZVdvcmtzaGVldCgpO1xyXG5cclxuICAgICAgICAvL3Byb2Nlc3MgdGhlIHRleHQgdG8gYmUgZGlzcGxheWVkIGluIHNlYXJjaCBjZWxsc1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNlYXJjaENlbGxEaWN0KSkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hQcm9wcyA9IHNlYXJjaENlbGxEaWN0W2tleV1bXCJTZWFyY2hQYXJhbUxpc3RcIl07XHJcbiAgICAgICAgICAgIHN0b3JlU2VhcmNoVmFsdWVMb2NhdGlvbnMoc2VhcmNoUHJvcHMpO1xyXG4gICAgICAgICAgICBzZXRTZWFyY2hUZXh0c1RvRXhjZWxTaGVldChzaGVldCwgc2VhcmNoUHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzRXhwb3J0UGFyYW1ldGVycyhleHBvcnRQYXJhbUxpc3QpIHtcclxuICAgIC8vIFJ1biBhIGJhdGNoIG9wZXJhdGlvbiBhZ2FpbnN0IHRoZSBFeGNlbCBvYmplY3QgbW9kZWxcclxuICAgIGF3YWl0IENvbW1vbi5leGNlbEFjdGlvbkhhbmRsZXIoYXN5bmMgY3R4ID0+IHtcclxuICAgICAgICAvL3Byb2Nlc3MgdGhlIHRleHQgdG8gYmUgZGlzcGxheWVkIGluIHNlYXJjaCBjZWxsc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwb3J0UGFyYW1MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGV4cG9ydFBhdGhzLnB1c2goZXhwb3J0UGFyYW1MaXN0W2ldW1wiUHJvcHNcIl0pO1xyXG4gICAgICAgICAgICBleHBvcnRWYWx1ZUxvY3MucHVzaChleHBvcnRQYXJhbUxpc3RbaV1bXCJWYWx1ZUxvY2F0aW9uc1wiXVsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgRXhjZWxIYW5kbGVyIGZyb20gXCIuL0V4Y2VsSGFuZGxlclwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4vQ29tbW9uXCI7XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIC8vIFRoZSBpbml0aWFsaXplIGZ1bmN0aW9uIG11c3QgYmUgcnVuIGVhY2ggdGltZSBhIG5ldyBwYWdlIGlzIGxvYWRlZC5cclxuICAgIE9mZmljZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHJlYXNvbikge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgRXhjZWxIYW5kbGVyLmxvYWRFeGNlbENvbmZpZ3VyYXRpb24oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgdGhlIEZhYnJpY1VJIG5vdGlmaWNhdGlvbiBtZWNoYW5pc20gYW5kIGhpZGUgaXRcclxuICAgICAgICAgICAgQ29tbW9uLmluaXRpYWxpemVNZXNzYWdlQmFubmVyKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJZiBub3QgdXNpbmcgRXhjZWwgMjAxNiwgdXNlIGZhbGxiYWNrIGxvZ2ljLlxyXG4gICAgICAgICAgICBpZiAoIU9mZmljZS5jb250ZXh0LnJlcXVpcmVtZW50cy5pc1NldFN1cHBvcnRlZCgnRXhjZWxBcGknLCAxLjEpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3RlbXBsYXRlLWRlc2NyaXB0aW9uXCIpLnRleHQoXCJUaGlzIHNhbXBsZSBhbGxvd3MgcmVhZGluZy93cml0aW5nIGZyb20vdG8gdGhlIEV4Y2VsIHNoZWV0LlwiKTtcclxuICAgICAgICAgICAgICAgICQoJyNmZXRjaC1idXR0b24tdGV4dCcpLnRleHQoXCJGZXRjaFwiKTtcclxuICAgICAgICAgICAgICAgICQoJyNmZXRjaC1idXR0b24tZGVzYycpLnRleHQoXCJGZXRjaCBjb21wb25lbnRzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNmZXRjaC1idXR0b24nKS5jbGljayhFeGNlbEhhbmRsZXIubG9hZFBhcmFtZXRlcnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNwdXQtYnV0dG9uLXRleHQnKS50ZXh0KFwiVXBkYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3B1dC1idXR0b24tZGVzYycpLnRleHQoXCJVcGRhdGUgY29tcG9uZW50c1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjcHV0LWJ1dHRvbicpLmNsaWNrKEV4Y2VsSGFuZGxlci51cGRhdGVQYXJhbWV0ZXJzKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vJChcIiN0ZW1wbGF0ZS1kZXNjcmlwdGlvblwiKS50ZXh0KFwiVGhpcyBzYW1wbGUgd2lsbCBmZXRjaCBhbGwgdGhlIGNvbXBvbmVudHMgdG8gdGhlIEV4Y2VsIHNoZWV0LlwiKTtcclxuICAgICAgICAgICAgJCgnI2ZldGNoLWJ1dHRvbi10ZXh0JykudGV4dChcIkZldGNoXCIpO1xyXG4gICAgICAgICAgICAkKCcjZmV0Y2gtYnV0dG9uLWRlc2MnKS50ZXh0KFwiRmV0Y2ggYWxsIHRoZSBjb21wb25lbnRzLlwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBhIGNsaWNrIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBmZXRjaCBidXR0b24uXHJcbiAgICAgICAgICAgICQoJyNmZXRjaC1idXR0b24nKS5jbGljayhFeGNlbEhhbmRsZXIubG9hZFBhcmFtZXRlcnMpO1xyXG5cclxuICAgICAgICAgICAgJCgnI3B1dC1idXR0b24tdGV4dCcpLnRleHQoXCJVcGRhdGVcIik7XHJcbiAgICAgICAgICAgICQoJyNwdXQtYnV0dG9uLWRlc2MnKS50ZXh0KFwiVXBkYXRlIGNvbXBvbmVudHMuXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGEgY2xpY2sgZXZlbnQgaGFuZGxlciBmb3IgdGhlIHB1dCBidXR0b24uXHJcbiAgICAgICAgICAgICQoJyNwdXQtYnV0dG9uJykuY2xpY2soRXhjZWxIYW5kbGVyLnVwZGF0ZVBhcmFtZXRlcnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=