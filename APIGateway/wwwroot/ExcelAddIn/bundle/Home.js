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
        if (xhr.readyState == 4 && xhr.status == 200)
            callback(xhr.responseText);
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
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Common.showNotification("Message", "Data is loading ...");
                    return [4 /*yield*/, getSearchValues()];
                case 1:
                    data = _a.sent();
                    APIHandler.asyncApiGetCall("api/loadparameters/" + sheetName + "?searchValues=" + data, setParameters);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadParameters = loadParameters;
function excelConfigHandler(config) {
    return __awaiter(this, void 0, void 0, function () {
        var configArr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    configArr = JSON.parse(config);
                    return [4 /*yield*/, processExcelSearchCriteria(configArr[0])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, processExportParameters(configArr[1])];
                case 2:
                    _a.sent();
                    Common.showNotification("Message:", "The configuration has been loaded");
                    return [2 /*return*/];
            }
        });
    });
}
function updateParameters(sheetName) {
    return __awaiter(this, void 0, void 0, function () {
        var exportParams;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Common.showNotification("Message:", "Updating the components... ");
                    return [4 /*yield*/, getExportParameters()];
                case 1:
                    exportParams = _a.sent();
                    APIHandler.syncApiPutCall("api/updateparameters/" + sheetName, exportParams, handleExportParamsFeedback);
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateParameters = updateParameters;
function handleExportParamsFeedback(isSuccessful) {
    if (isSuccessful) {
        Common.showNotification("Message:", "Updating failed!");
    }
    else
        Common.showNotification("Message:", "Updating succeeded!");
}
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
                                    if (paramStr.length > 0) {
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
                                        Common.showNotification("Message", "Data has been loaded.");
                                    }
                                    else
                                        Common.showNotification("Message", "No data is loaded.");
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
            // Initialize the FabricUI notification mechanism and hide it
            Common.initializeMessageBanner();
            $("#template-description").text("This sample allows reading/writing from/to the Excel sheet.");
            $('#config-button-text').text("Load configugration");
            $('#config-button-desc').text("Load excel configuration for this sheet");
            $('#config-button').click(loadExcelConfiguration);
            $('#fetch-button-text').text("Load data");
            $('#fetch-button-desc').text("Fetch all the components.");
            $('#fetch-button').click(loadParameters);
            $('#put-button-text').text("Update data");
            $('#put-button-desc').text("Update components.");
            $('#put-button').click(updateParameters);
        });
    };
})();
function loadExcelConfiguration() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ExcelHandler.getSheetName()];
                case 1:
                    sheetName = _a.sent();
                    ExcelHandler.loadExcelConfiguration(sheetName);
                    return [2 /*return*/];
            }
        });
    });
}
function loadParameters() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ExcelHandler.loadParameters(sheetName)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function updateParameters() {
    ExcelHandler.updateParameters(sheetName);
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0FQSUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi93d3dyb290L0V4Y2VsQWRkSW4vRXhjZWxIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3d3d3Jvb3QvRXhjZWxBZGRJbi9Ib21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLFNBQWdCLGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUTtJQUM1QyxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0lBQy9CLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFB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Z0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUVsRCxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDMUQsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUV6QyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDakQsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVMLFNBQWUsc0JBQXNCOzs7O3dCQUNyQixxQkFBTSxZQUFZLENBQUMsWUFBWSxFQUFFOztvQkFBN0MsU0FBUyxHQUFHLFNBQWlDLENBQUM7b0JBQzlDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7Q0FDbEQ7QUFFRCxTQUFlLGNBQWM7Ozs7d0JBQ3pCLHFCQUFNLFlBQVksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDOztvQkFBNUMsU0FBNEMsQ0FBQzs7Ozs7Q0FDaEQ7QUFFRCxTQUFTLGdCQUFnQjtJQUNyQixZQUFZLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDN0MsQ0FBQyIsImZpbGUiOiJIb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93d3dyb290L0V4Y2VsQWRkSW4vSG9tZS50c1wiKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBhc3luY0FwaUdldENhbGwoYXBpVVJMLCBjYWxsYmFjaykge1xyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgYXBpVVJMLCB0cnVlKTtcclxuICAgIHhoci5vbmxvYWQgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwKVxyXG4gICAgICAgICAgICBhd2FpdCBjYWxsYmFjayh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgIH1cclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3luY0FwaVB1dENhbGwoYXBpVVJMLCByYXdEYXRhLCBjYWxsYmFjaykge1xyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgbGV0IGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkocmF3RGF0YSk7XHJcbiAgICB4aHIub3BlbihcIlBVVFwiLCBhcGlVUkwsIHRydWUpO1xyXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwKVxyXG4gICAgICAgICAgICBjYWxsYmFjayh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgIH1cclxuICAgIHhoci5zZW5kKGpzb25EYXRhKTtcclxufVxyXG4iLCJsZXQgbWVzc2FnZUJhbm5lcjtcclxubGV0IGhkYlVSTCwgY2RwVVJMO1xyXG5leHBvcnQgeyBoZGJVUkwsIGNkcFVSTH07XHJcbmRlY2xhcmUgbGV0IGZhYnJpYzogYW55O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRfdXJscyhjb25maWdfZGF0YSlcclxue1xyXG4gICAgaGRiVVJMID0gY29uZmlnX2RhdGEuaGRiVVJMOyBcclxuICAgIGNkcFVSTCA9IGNvbmZpZ19kYXRhLmNkcFVSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRfc3RyaW5nX3RvX2FycmF5KHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0udHJpbSgpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVNZXNzYWdlQmFubmVyKClcclxue1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXMtTWVzc2FnZUJhbm5lcicpO1xyXG4gICAgbWVzc2FnZUJhbm5lciA9IG5ldyBmYWJyaWMuTWVzc2FnZUJhbm5lcihlbGVtZW50KTtcclxuICAgIG1lc3NhZ2VCYW5uZXIuaGlkZUJhbm5lcigpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBlbXB0eShkYXRhKSB7XHJcbiAgICBpZiAodHlwZW9mIChkYXRhKSA9PSAnbnVtYmVyJyB8fCB0eXBlb2YgKGRhdGEpID09ICdib29sZWFuJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgKGRhdGEpID09ICd1bmRlZmluZWQnIHx8IGRhdGEgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgKGRhdGEubGVuZ3RoKSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBkYXRhLmxlbmd0aCA9PSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8vIHRoaXMgaXMga2luZCBvZiBhIHBhdHRlcm4gZm9yIGhhbmRsaW5nIGNvbnRlbnRzIGluIHRoZSBjdXJyZW50IGV4Y2VsIHNoZWV0XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGNlbEFjdGlvbkhhbmRsZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IEV4Y2VsLnJ1bihhY3Rpb24pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBlcnJvckhhbmRsZXIoZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gZm9yIHRyZWF0aW5nIGVycm9yc1xyXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JIYW5kbGVyKGVycm9yKSB7XHJcbiAgICAvLyBBbHdheXMgYmUgc3VyZSB0byBjYXRjaCBhbnkgYWNjdW11bGF0ZWQgZXJyb3JzIHRoYXQgYnViYmxlIHVwIGZyb20gdGhlIEV4Y2VsLnJ1biBleGVjdXRpb25cclxuICAgIHNob3dOb3RpZmljYXRpb24oXCJFcnJvclwiLCBlcnJvcik7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKTtcclxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIE9mZmljZUV4dGVuc2lvbi5FcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVidWcgaW5mbzogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvci5kZWJ1Z0luZm8pKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGZvciBkaXNwbGF5aW5nIG5vdGlmaWNhdGlvbnNcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24oaGVhZGVyLCBjb250ZW50KSB7XHJcbiAgICAkKFwiI25vdGlmaWNhdGlvbi1oZWFkZXJcIikudGV4dChoZWFkZXIpO1xyXG4gICAgJChcIiNub3RpZmljYXRpb24tYm9keVwiKS50ZXh0KGNvbnRlbnQpO1xyXG4gICAgbWVzc2FnZUJhbm5lci5zaG93QmFubmVyKCk7XHJcbiAgICBtZXNzYWdlQmFubmVyLnRvZ2dsZUV4cGFuc2lvbigpO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBBUElIYW5kbGVyIGZyb20gXCIuL0FQSUhhbmRsZXJcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuL0NvbW1vblwiO1xyXG5cclxubGV0IHNlYXJjaFZhbHVlTG9jcyA9IFtdO1xyXG4vL2xldCBleHBvcnRQYXRocyA9IFtdO1xyXG5sZXQgZXhwb3J0VmFsdWVMb2NzID0gW107XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRFeGNlbENvbmZpZ3VyYXRpb24oc2hlZXROYW1lKSB7XHJcbiAgICBBUElIYW5kbGVyLmFzeW5jQXBpR2V0Q2FsbChcImFwaS9sb2FkZXhjZWxjb25maWcvXCIgKyBzaGVldE5hbWUsIGV4Y2VsQ29uZmlnSGFuZGxlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUGFyYW1ldGVycyhzaGVldE5hbWUpIHtcclxuICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZVwiLCBcIkRhdGEgaXMgbG9hZGluZyAuLi5cIilcclxuICAgIGxldCBkYXRhID0gYXdhaXQgZ2V0U2VhcmNoVmFsdWVzKCk7XHJcbiAgICBBUElIYW5kbGVyLmFzeW5jQXBpR2V0Q2FsbChcImFwaS9sb2FkcGFyYW1ldGVycy9cIiArIHNoZWV0TmFtZSArXCI/c2VhcmNoVmFsdWVzPVwiICsgZGF0YSwgc2V0UGFyYW1ldGVycyk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGV4Y2VsQ29uZmlnSGFuZGxlcihjb25maWc6IHN0cmluZykge1xyXG4gICAgbGV0IGNvbmZpZ0FyciA9IEpTT04ucGFyc2UoY29uZmlnKTtcclxuICAgIGF3YWl0IHByb2Nlc3NFeGNlbFNlYXJjaENyaXRlcmlhKGNvbmZpZ0FyclswXSk7XHJcbiAgICBhd2FpdCBwcm9jZXNzRXhwb3J0UGFyYW1ldGVycyhjb25maWdBcnJbMV0pO1xyXG4gICAgQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlOlwiLCBcIlRoZSBjb25maWd1cmF0aW9uIGhhcyBiZWVuIGxvYWRlZFwiKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBhcmFtZXRlcnMoc2hlZXROYW1lKSB7XHJcbiAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIFwiVXBkYXRpbmcgdGhlIGNvbXBvbmVudHMuLi4gXCIpO1xyXG4gICAgbGV0IGV4cG9ydFBhcmFtcyA9IGF3YWl0IGdldEV4cG9ydFBhcmFtZXRlcnMoKTtcclxuICAgIEFQSUhhbmRsZXIuc3luY0FwaVB1dENhbGwoXCJhcGkvdXBkYXRlcGFyYW1ldGVycy9cIiArIHNoZWV0TmFtZSwgZXhwb3J0UGFyYW1zLCBoYW5kbGVFeHBvcnRQYXJhbXNGZWVkYmFjayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUV4cG9ydFBhcmFtc0ZlZWRiYWNrKGlzU3VjY2Vzc2Z1bCkge1xyXG4gICAgaWYgKGlzU3VjY2Vzc2Z1bCkge1xyXG4gICAgICAgICAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIFwiVXBkYXRpbmcgZmFpbGVkIVwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlOlwiLCBcIlVwZGF0aW5nIHN1Y2NlZWRlZCFcIik7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2hlZXROYW1lKCkge1xyXG4gICAgbGV0IHNoZWV0TmFtZSA9IFwiXCI7XHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuICAgICAgICBzaGVldC5sb2FkKFwibmFtZVwiKTtcclxuICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgIHNoZWV0TmFtZT0gc2hlZXQubmFtZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNoZWV0TmFtZTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0U2VhcmNoVmFsdWVzKCkge1xyXG4gICAgbGV0IHNlYXJjaFZhbHVlcyA9IFtdO1xyXG4gICAgYXdhaXQgQ29tbW9uLmV4Y2VsQWN0aW9uSGFuZGxlcihhc3luYyAoY3R4KSA9PiB7XHJcbiAgICAgICAgbGV0IHNoZWV0ID0gY3R4Lndvcmtib29rLndvcmtzaGVldHMuZ2V0QWN0aXZlV29ya3NoZWV0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgY29tcElEID0gMDsgY29tcElEIDwgc2VhcmNoVmFsdWVMb2NzLmxlbmd0aDsgY29tcElEKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvbXBTZWFyY2hWYWx1ZUxvY3MgPSBzZWFyY2hWYWx1ZUxvY3NbY29tcElEXVxyXG4gICAgICAgICAgICBmb3IgKGxldCB2YWx1ZUlEID0gMDsgdmFsdWVJRCA8IGNvbXBTZWFyY2hWYWx1ZUxvY3MubGVuZ3RoOyB2YWx1ZUlEKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCByYW5nZSA9IHNoZWV0LmdldFJhbmdlKGNvbXBTZWFyY2hWYWx1ZUxvY3NbdmFsdWVJRF0pLmxvYWQoXCJ2YWx1ZXNcIik7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoVmFsdWVzLnB1c2gocmFuZ2UudmFsdWVzWzBdWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNlYXJjaFZhbHVlcy50b1N0cmluZygpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXRQYXJhbWV0ZXJzKHBhcmFtU3RyKSB7XHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBpZiAocGFyYW1TdHIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1ldGVycyA9IEpTT04ucGFyc2UocGFyYW1TdHIpO1xyXG4gICAgICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVMb2NhdGlvbnMgPSBwYXJhbWV0ZXJzW2ldW1wiVmFsdWVMb2NhdGlvbnNcIl07XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJhbWV0ZXJzW2ldW1wiVmFsdWVcIl07XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1wb3J0UmFuZ2UgPSBzaGVldC5nZXRSYW5nZSh2YWx1ZUxvY2F0aW9uc1swXSk7XHJcbiAgICAgICAgICAgICAgICBpbXBvcnRSYW5nZS52YWx1ZXMgPSBbW3ZhbHVlXV07XHJcbiAgICAgICAgICAgICAgICAvLyBkbyBub3QgdXBkYXRlIHZhbHVlcyB0byBleHBvcnQgcGFyYW1ldGVycyBhcyB0aGVzZSBhcmUgb25seSBzZXQgYnkgdGhlIHVzZXIgdmlhIGNhbGN1bGF0aW9uIHRvb2xcclxuICAgICAgICAgICAgICAgIC8vaWYgKHZhbHVlTG9jYXRpb25zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgIGxldCBleHBvcnRSYW5nZSA9IHNoZWV0LmdldFJhbmdlKHZhbHVlTG9jYXRpb25zWzFdKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgZXhwb3J0UmFuZ2UudmFsdWVzID0gW1t2YWx1ZV1dO1xyXG4gICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlXCIsIFwiRGF0YSBoYXMgYmVlbiBsb2FkZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZVwiLCBcIk5vIGRhdGEgaXMgbG9hZGVkLlwiKTtcclxuICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEV4cG9ydFBhcmFtZXRlcnMoKSB7XHJcbiAgICBsZXQgZXhwb3J0UGFyYW1zID0gW107XHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIFwiVXBkYXRpbmcgdGhlIGNvbXBvbmVudHMuLi4gXCIpO1xyXG4gICAgICAgIC8vIGNyZWF0ZSBhIDJkLWFycmF5IHRvIHN0b3JlIGFsbCB0aGUgY29tcG9uZW50IGluZm9ybWF0aW9uXHJcbiAgICAgICAgbGV0IHNoZWV0ID0gY3R4Lndvcmtib29rLndvcmtzaGVldHMuZ2V0QWN0aXZlV29ya3NoZWV0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHBvcnRWYWx1ZUxvY3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZVJhbmdlID0gc2hlZXQuZ2V0UmFuZ2UoZXhwb3J0VmFsdWVMb2NzW2ldKS5sb2FkKFwidmFsdWVzXCIpO1xyXG4gICAgICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgICAgICBleHBvcnRQYXJhbXMucHVzaCh1cGRhdGVSYW5nZS52YWx1ZXNbMF1bMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGV4cG9ydFBhcmFtcy50b1N0cmluZygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9yZVNlYXJjaFZhbHVlTG9jYXRpb25zKHNlYXJjaFBhcmFtQ2VsbHMpIHtcclxuICAgIGxldCB2YWx1ZUxvY3MgPSBbXTtcclxuICAgIC8vYWRkIHRoZSB0ZXh0cyB0byBiZSBkaXNwbGF5ZWRcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VhcmNoUGFyYW1DZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhbHVlTG9jcy5wdXNoKHNlYXJjaFBhcmFtQ2VsbHNbaV1bXCJWYWx1ZUxvY2F0aW9uXCJdKTtcclxuICAgIH1cclxuICAgIHNlYXJjaFZhbHVlTG9jcy5wdXNoKHZhbHVlTG9jcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNlYXJjaFRleHRzVG9FeGNlbFNoZWV0KHNoZWV0LCBzZWFyY2hQYXJhbUNlbGxzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlYXJjaFBhcmFtQ2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgdGV4dExvYyA9IHNlYXJjaFBhcmFtQ2VsbHNbaV1bXCJDZWxsTG9jYXRpb25cIl07XHJcblxyXG4gICAgICAgIC8vZ2V0IGEgcmFuZ2UgdGhhdCBjb3ZlcnMgdGhlIHNlYXJjaCBjZWxsc1xyXG4gICAgICAgIGxldCB0ZXh0UmFuZ2UgPSBzaGVldC5nZXRSYW5nZSh0ZXh0TG9jKTtcclxuICAgICAgICB0ZXh0UmFuZ2UudmFsdWVzID0gW1tzZWFyY2hQYXJhbUNlbGxzW2ldW1wiRGlzcGxheVRleHRcIl1dXTtcclxuXHJcbiAgICAgICAgLy9mb3JtYXQgdGV4dCBjZWxsXHJcbiAgICAgICAgLy90ZXh0UmFuZ2UuZm9ybWF0LmF1dG9maXRDb2x1bW5zKCk7IC8vIHRoaXMgZG9lcyBub3Qgc2VlbSB0byBiZSBzdXBwb3J0ZWQgaW4gRXhjZWwgMjAxNlxyXG4gICAgICAgIHRleHRSYW5nZS5mb3JtYXQuZm9udC5ib2xkID0gdHJ1ZTtcclxuICAgICAgICB0ZXh0UmFuZ2UuZm9ybWF0LmZpbGwuY29sb3IgPSBcInllbGxvd1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzRXhjZWxTZWFyY2hDcml0ZXJpYShzZWFyY2hQYXJhbUNlbGxzKSB7XHJcbiAgICAvLyBSdW4gYSBiYXRjaCBvcGVyYXRpb24gYWdhaW5zdCB0aGUgRXhjZWwgb2JqZWN0IG1vZGVsXHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIGN0eCA9PiB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgcHJveHkgb2JqZWN0IGZvciB0aGUgYWN0aXZlIHNoZWV0XHJcbiAgICAgICAgbGV0IHNoZWV0ID0gY3R4Lndvcmtib29rLndvcmtzaGVldHMuZ2V0QWN0aXZlV29ya3NoZWV0KCk7XHJcblxyXG4gICAgICAgIC8vcHJvY2VzcyB0aGUgdGV4dCB0byBiZSBkaXNwbGF5ZWQgaW4gc2VhcmNoIGNlbGxzXHJcbiAgICAgICAgc3RvcmVTZWFyY2hWYWx1ZUxvY2F0aW9ucyhzZWFyY2hQYXJhbUNlbGxzKTtcclxuICAgICAgICBzZXRTZWFyY2hUZXh0c1RvRXhjZWxTaGVldChzaGVldCwgc2VhcmNoUGFyYW1DZWxscyk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGN0eC5zeW5jKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0V4cG9ydFBhcmFtZXRlcnMoZXhwb3J0UGFyYW1Mb2NzKSB7XHJcbiAgICAvLyBSdW4gYSBiYXRjaCBvcGVyYXRpb24gYWdhaW5zdCB0aGUgRXhjZWwgb2JqZWN0IG1vZGVsXHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIGN0eCA9PiB7XHJcbiAgICAgICAgLy9wcm9jZXNzIHRoZSB0ZXh0IHRvIGJlIGRpc3BsYXllZCBpbiBzZWFyY2ggY2VsbHNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cG9ydFBhcmFtTG9jcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvL2V4cG9ydFBhdGhzLnB1c2goZXhwb3J0UGFyYW1MaXN0W2ldW1wiUHJvcHNcIl0pO1xyXG4gICAgICAgICAgICBleHBvcnRWYWx1ZUxvY3MucHVzaChleHBvcnRQYXJhbUxvY3NbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIEV4Y2VsSGFuZGxlciBmcm9tIFwiLi9FeGNlbEhhbmRsZXJcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuL0NvbW1vblwiO1xyXG5sZXQgc2hlZXROYW1lOiBzdHJpbmc7XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIC8vIFRoZSBpbml0aWFsaXplIGZ1bmN0aW9uIG11c3QgYmUgcnVuIGVhY2ggdGltZSBhIG5ldyBwYWdlIGlzIGxvYWRlZC5cclxuICAgIE9mZmljZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHJlYXNvbikge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgdGhlIEZhYnJpY1VJIG5vdGlmaWNhdGlvbiBtZWNoYW5pc20gYW5kIGhpZGUgaXRcclxuICAgICAgICAgICAgQ29tbW9uLmluaXRpYWxpemVNZXNzYWdlQmFubmVyKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKFwiI3RlbXBsYXRlLWRlc2NyaXB0aW9uXCIpLnRleHQoXCJUaGlzIHNhbXBsZSBhbGxvd3MgcmVhZGluZy93cml0aW5nIGZyb20vdG8gdGhlIEV4Y2VsIHNoZWV0LlwiKTtcclxuICAgICAgICAgICAgJCgnI2NvbmZpZy1idXR0b24tdGV4dCcpLnRleHQoXCJMb2FkIGNvbmZpZ3VncmF0aW9uXCIpO1xyXG4gICAgICAgICAgICAkKCcjY29uZmlnLWJ1dHRvbi1kZXNjJykudGV4dChcIkxvYWQgZXhjZWwgY29uZmlndXJhdGlvbiBmb3IgdGhpcyBzaGVldFwiKTtcclxuICAgICAgICAgICAgJCgnI2NvbmZpZy1idXR0b24nKS5jbGljayhsb2FkRXhjZWxDb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICQoJyNmZXRjaC1idXR0b24tdGV4dCcpLnRleHQoXCJMb2FkIGRhdGFcIik7XHJcbiAgICAgICAgICAgICQoJyNmZXRjaC1idXR0b24tZGVzYycpLnRleHQoXCJGZXRjaCBhbGwgdGhlIGNvbXBvbmVudHMuXCIpO1xyXG4gICAgICAgICAgICAkKCcjZmV0Y2gtYnV0dG9uJykuY2xpY2sobG9hZFBhcmFtZXRlcnMpO1xyXG5cclxuICAgICAgICAgICAgJCgnI3B1dC1idXR0b24tdGV4dCcpLnRleHQoXCJVcGRhdGUgZGF0YVwiKTtcclxuICAgICAgICAgICAgJCgnI3B1dC1idXR0b24tZGVzYycpLnRleHQoXCJVcGRhdGUgY29tcG9uZW50cy5cIik7XHJcbiAgICAgICAgICAgICQoJyNwdXQtYnV0dG9uJykuY2xpY2sodXBkYXRlUGFyYW1ldGVycyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufSkoKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRFeGNlbENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICBzaGVldE5hbWUgPSBhd2FpdCBFeGNlbEhhbmRsZXIuZ2V0U2hlZXROYW1lKCk7XHJcbiAgICBFeGNlbEhhbmRsZXIubG9hZEV4Y2VsQ29uZmlndXJhdGlvbihzaGVldE5hbWUpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkUGFyYW1ldGVycygpIHtcclxuICAgIGF3YWl0IEV4Y2VsSGFuZGxlci5sb2FkUGFyYW1ldGVycyhzaGVldE5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQYXJhbWV0ZXJzKCkge1xyXG4gICAgRXhjZWxIYW5kbGVyLnVwZGF0ZVBhcmFtZXRlcnMoc2hlZXROYW1lKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=