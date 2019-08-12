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
                        if (!(xhr.readyState == 4 && xhr.status == 200 && callback != null)) return [3 /*break*/, 2];
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
function syncApiGetCall(apiURL, callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", apiURL, false);
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200 && callback != null)
            callback(xhr.responseText);
    };
    xhr.send(null);
}
exports.syncApiGetCall = syncApiGetCall;
function syncApiPutCall(apiURL, rawData, callback) {
    var xhr = new XMLHttpRequest();
    var jsonData = JSON.stringify(rawData);
    xhr.open("PUT", apiURL, false);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200 && callback != null)
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
/* WEBPACK VAR INJECTION */(function($) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

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
//let searchValueLocs = [];
//let exportPaths = [];
var exportValueLocs = [];
function getComponentIdsList(callback) {
    APIHandler.syncApiGetCall("api/loadcomponentids", callback);
}
exports.getComponentIdsList = getComponentIdsList;
function getProjectIdsList(callback) {
    APIHandler.syncApiGetCall("api/loadprojectids", callback);
}
exports.getProjectIdsList = getProjectIdsList;
function loadExcelConfiguration(sheetName) {
    APIHandler.asyncApiGetCall("api/loadexcelconfig/" + sheetName, excelConfigHandler);
}
exports.loadExcelConfiguration = loadExcelConfiguration;
function loadParameters(sheetName, searchValues) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            Common.showNotification("Message", "Data is loading ...");
            APIHandler.asyncApiGetCall("api/loadparameters/" + sheetName + "?searchValues=" + searchValues, setParameters);
            return [2 /*return*/];
        });
    });
}
exports.loadParameters = loadParameters;
function excelConfigHandler(configStr) {
    return __awaiter(this, void 0, void 0, function () {
        var config;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    config = JSON.parse(configStr);
                    return [4 /*yield*/, processExportParameters(config)];
                case 1:
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
        Common.showNotification("Message:", "Updating succeeded!");
    }
    else
        Common.showNotification("Message:", "Updating failed!");
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
//async function getSearchValues() {
//    let searchValues = [];
//    await Common.excelActionHandler(async (ctx) => {
//        let sheet = ctx.workbook.worksheets.getActiveWorksheet();
//        for (let compID = 0; compID < searchValueLocs.length; compID++) {
//            let compSearchValueLocs = searchValueLocs[compID]
//            for (let valueID = 0; valueID < compSearchValueLocs.length; valueID++) {
//                let range = sheet.getRange(compSearchValueLocs[valueID]).load("values");
//                await ctx.sync();
//                searchValues.push(range.values[0][0]);
//            }
//        }
//    });
//    return searchValues.toString();
//}
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
//function storeSearchValueLocations(searchParamCells) {
//    let valueLocs = [];
//    //add the texts to be displayed
//    for (var i = 0; i < searchParamCells.length; i++) {
//        valueLocs.push(searchParamCells[i]["ValueLocation"]);
//    }
//    searchValueLocs.push(valueLocs);
//}
//function setSearchTextsToExcelSheet(sheet, searchParamCells) {
//    for (let i = 0; i < searchParamCells.length; i++) {
//        let textLoc = searchParamCells[i]["CellLocation"];
//        //get a range that covers the search cells
//        let textRange = sheet.getRange(textLoc);
//        textRange.values = [[searchParamCells[i]["DisplayText"]]];
//        //format text cell
//        //textRange.format.autofitColumns(); // this does not seem to be supported in Excel 2016
//        textRange.format.font.bold = true;
//        textRange.format.fill.color = "yellow";
//    }
//}
//async function processExcelSearchCriteria(searchParamCells) {
//    // Run a batch operation against the Excel object model
//    await Common.excelActionHandler(async ctx => {
//        // Create a proxy object for the active sheet
//        let sheet = ctx.workbook.worksheets.getActiveWorksheet();
//        //process the text to be displayed in search cells
//        storeSearchValueLocations(searchParamCells);
//        setSearchTextsToExcelSheet(sheet, searchParamCells);
//        return await ctx.sync();
//    });
//}
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
var $ = __webpack_require__(/*! jquery */ "jquery");
var sheetName;
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
            $('#component-datalist-text').text("Comp.Ids");
            //project ids list
            $('#project-datalist-text').text("Proj.Ids");
            // load configuration button
            $('#config-button-text').text("Load config");
            $('#config-button-desc').text("Load excel configuration for this sheet");
            $('#config-button').click(loadExcelConfiguration);
            //load data button
            $('#fetch-button-text').text("Load data");
            $('#fetch-button-desc').text("Fetch all the components.");
            $('#fetch-button').click(loadParameters);
            //update data button
            $('#put-button-text').text("Update data");
            $('#put-button-desc').text("Update components.");
            $('#put-button').click(updateParameters);
        });
    };
})();
function beginningMatched(request, response) {
    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
    response($.grep([], function (item) {
        return matcher.test(item);
    }));
}
;
function loadExcelConfiguration() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Common.showNotification("Message:", "Loading configuration");
                    return [4 /*yield*/, ExcelHandler.getSheetName()];
                case 1:
                    sheetName = _a.sent();
                    ExcelHandler.loadExcelConfiguration(sheetName);
                    loadInitialSearchValues();
                    Common.showNotification("Message:", "Finish loading configuration");
                    return [2 /*return*/];
            }
        });
    });
}
function loadParameters() {
    return __awaiter(this, void 0, void 0, function () {
        var componentId, projectId, searchValues;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    componentId = $("#componentIdsList").val();
                    projectId = $("#projectIdsList").val();
                    searchValues = [componentId, projectId];
                    return [4 /*yield*/, ExcelHandler.loadParameters(sheetName, searchValues)];
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
function setConfigForAutoTextbox(tbName, getDataApi) {
    getDataApi(function (data) {
        var dataArr = JSON.parse(data);
        $(tbName).autocomplete({
            source: function (request, response) {
                var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
                response($.grep(dataArr, function (item) {
                    return matcher.test(item);
                }));
            },
            position: { my: "right center", at: "right bottom" },
            minLength: 2
        });
    });
}
function loadInitialSearchValues() {
    //get list of component ids
    setConfigForAutoTextbox("#componentIdsList", ExcelHandler.getComponentIdsList);
    //get list of project ids
    setConfigForAutoTextbox("#projectIdsList", ExcelHandler.getProjectIdsList);
}


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0FQSUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi93d3dyb290L0V4Y2VsQWRkSW4vRXhjZWxIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3d3d3Jvb3QvRXhjZWxBZGRJbi9Ib21lLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLFNBQWdCLGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUTtJQUM1QyxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFD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RCxTQUFTLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxVQUFVO0lBQy9DLFVBQVUsQ0FBQyxVQUFDLElBQUk7UUFDWixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQ2xCO1lBQ0ksTUFBTSxFQUFFLFVBQVUsT0FBTyxFQUFFLFFBQVE7Z0JBQy9CLElBQUksT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNqRixRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFZO29CQUMzQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDUixDQUFDO1lBQ0QsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFO1lBQ3BELFNBQVMsRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0FBRU4sQ0FBQztBQUNELFNBQVMsdUJBQXVCO0lBQzVCLDJCQUEyQjtJQUMzQix1QkFBdUIsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUUvRSx5QkFBeUI7SUFDekIsdUJBQXVCLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDL0UsQ0FBQzs7Ozs7Ozs7Ozs7O0FDM0ZELHdCIiwiZmlsZSI6IkhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3d3d3Jvb3QvRXhjZWxBZGRJbi9Ib21lLnRzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGFzeW5jQXBpR2V0Q2FsbChhcGlVUkwsIGNhbGxiYWNrKSB7XHJcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCBhcGlVUkwsIHRydWUpO1xyXG4gICAgeGhyLm9ubG9hZCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMCAmJiBjYWxsYmFjayE9bnVsbClcclxuICAgICAgICAgICAgYXdhaXQgY2FsbGJhY2soeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN5bmNBcGlHZXRDYWxsKGFwaVVSTCxjYWxsYmFjayApIHtcclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vdmVycmlkZU1pbWVUeXBlKFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIGFwaVVSTCwgZmFsc2UpO1xyXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMCAmJiBjYWxsYmFjayE9bnVsbClcclxuICAgICAgICAgICAgY2FsbGJhY2soeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc3luY0FwaVB1dENhbGwoYXBpVVJMLCByYXdEYXRhLCBjYWxsYmFjaykge1xyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgbGV0IGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkocmF3RGF0YSk7XHJcbiAgICB4aHIub3BlbihcIlBVVFwiLCBhcGlVUkwsIGZhbHNlKTtcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMCAmJiBjYWxsYmFjayE9bnVsbClcclxuICAgICAgICAgICAgY2FsbGJhY2soeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChqc29uRGF0YSk7XHJcbn1cclxuIiwibGV0IG1lc3NhZ2VCYW5uZXI7XHJcbmxldCBoZGJVUkwsIGNkcFVSTDtcclxuZXhwb3J0IHsgaGRiVVJMLCBjZHBVUkx9O1xyXG5kZWNsYXJlIGxldCBmYWJyaWM6IGFueTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0X3VybHMoY29uZmlnX2RhdGEpXHJcbntcclxuICAgIGhkYlVSTCA9IGNvbmZpZ19kYXRhLmhkYlVSTDsgXHJcbiAgICBjZHBVUkwgPSBjb25maWdfZGF0YS5jZHBVUkw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0X3N0cmluZ190b19hcnJheShzdHIpIHtcclxuICAgIHJldHVybiBzdHIuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnRyaW0oKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplTWVzc2FnZUJhbm5lcigpXHJcbntcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1zLU1lc3NhZ2VCYW5uZXInKTtcclxuICAgIG1lc3NhZ2VCYW5uZXIgPSBuZXcgZmFicmljLk1lc3NhZ2VCYW5uZXIoZWxlbWVudCk7XHJcbiAgICBtZXNzYWdlQmFubmVyLmhpZGVCYW5uZXIoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZW1wdHkoZGF0YSkge1xyXG4gICAgaWYgKHR5cGVvZiAoZGF0YSkgPT0gJ251bWJlcicgfHwgdHlwZW9mIChkYXRhKSA9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIChkYXRhKSA9PSAndW5kZWZpbmVkJyB8fCBkYXRhID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIChkYXRhLmxlbmd0aCkgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGggPT0gMDtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vLyB0aGlzIGlzIGtpbmQgb2YgYSBwYXR0ZXJuIGZvciBoYW5kbGluZyBjb250ZW50cyBpbiB0aGUgY3VycmVudCBleGNlbCBzaGVldFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhjZWxBY3Rpb25IYW5kbGVyKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBFeGNlbC5ydW4oYWN0aW9uKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZXJyb3JIYW5kbGVyKGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGZvciB0cmVhdGluZyBlcnJvcnNcclxuZXhwb3J0IGZ1bmN0aW9uIGVycm9ySGFuZGxlcihlcnJvcikge1xyXG4gICAgLy8gQWx3YXlzIGJlIHN1cmUgdG8gY2F0Y2ggYW55IGFjY3VtdWxhdGVkIGVycm9ycyB0aGF0IGJ1YmJsZSB1cCBmcm9tIHRoZSBFeGNlbC5ydW4gZXhlY3V0aW9uXHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKFwiRXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBPZmZpY2VFeHRlbnNpb24uRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRlYnVnIGluZm86IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IuZGVidWdJbmZvKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBmb3IgZGlzcGxheWluZyBub3RpZmljYXRpb25zXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKGhlYWRlciwgY29udGVudCkge1xyXG4gICAgJChcIiNub3RpZmljYXRpb24taGVhZGVyXCIpLnRleHQoaGVhZGVyKTtcclxuICAgICQoXCIjbm90aWZpY2F0aW9uLWJvZHlcIikudGV4dChjb250ZW50KTtcclxuICAgIG1lc3NhZ2VCYW5uZXIuc2hvd0Jhbm5lcigpO1xyXG4gICAgbWVzc2FnZUJhbm5lci50b2dnbGVFeHBhbnNpb24oKTtcclxufVxyXG5cclxuIiwiaW1wb3J0ICogYXMgQVBJSGFuZGxlciBmcm9tIFwiLi9BUElIYW5kbGVyXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi9Db21tb25cIjtcclxuXHJcbi8vbGV0IHNlYXJjaFZhbHVlTG9jcyA9IFtdO1xyXG4vL2xldCBleHBvcnRQYXRocyA9IFtdO1xyXG5sZXQgZXhwb3J0VmFsdWVMb2NzID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcG9uZW50SWRzTGlzdChjYWxsYmFjaykge1xyXG4gICAgQVBJSGFuZGxlci5zeW5jQXBpR2V0Q2FsbChcImFwaS9sb2FkY29tcG9uZW50aWRzXCIsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RJZHNMaXN0KGNhbGxiYWNrKSB7XHJcbiAgICBBUElIYW5kbGVyLnN5bmNBcGlHZXRDYWxsKFwiYXBpL2xvYWRwcm9qZWN0aWRzXCIsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRXhjZWxDb25maWd1cmF0aW9uKHNoZWV0TmFtZSkge1xyXG4gICAgQVBJSGFuZGxlci5hc3luY0FwaUdldENhbGwoXCJhcGkvbG9hZGV4Y2VsY29uZmlnL1wiICsgc2hlZXROYW1lLCBleGNlbENvbmZpZ0hhbmRsZXIpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFBhcmFtZXRlcnMoc2hlZXROYW1lLCBzZWFyY2hWYWx1ZXMpIHtcclxuICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZVwiLCBcIkRhdGEgaXMgbG9hZGluZyAuLi5cIilcclxuICAgIEFQSUhhbmRsZXIuYXN5bmNBcGlHZXRDYWxsKFwiYXBpL2xvYWRwYXJhbWV0ZXJzL1wiICsgc2hlZXROYW1lICsgXCI/c2VhcmNoVmFsdWVzPVwiICsgc2VhcmNoVmFsdWVzLCBzZXRQYXJhbWV0ZXJzKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZXhjZWxDb25maWdIYW5kbGVyKGNvbmZpZ1N0cjogc3RyaW5nKSB7XHJcbiAgICAvL2xldCBjb25maWdBcnIgPSBKU09OLnBhcnNlKGNvbmZpZ1N0cik7XHJcbiAgICAvL2F3YWl0IHByb2Nlc3NFeGNlbFNlYXJjaENyaXRlcmlhKGNvbmZpZ0FyclswXSk7XHJcbiAgICAvL2F3YWl0IHByb2Nlc3NFeHBvcnRQYXJhbWV0ZXJzKGNvbmZpZ0FyclsxXSk7XHJcbiAgICBsZXQgY29uZmlnID0gSlNPTi5wYXJzZShjb25maWdTdHIpO1xyXG4gICAgYXdhaXQgcHJvY2Vzc0V4cG9ydFBhcmFtZXRlcnMoY29uZmlnKTtcclxuICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZTpcIiwgXCJUaGUgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBsb2FkZWRcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQYXJhbWV0ZXJzKHNoZWV0TmFtZSkge1xyXG4gICAgQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlOlwiLCBcIlVwZGF0aW5nIHRoZSBjb21wb25lbnRzLi4uIFwiKTtcclxuICAgIGxldCBleHBvcnRQYXJhbXMgPSBhd2FpdCBnZXRFeHBvcnRQYXJhbWV0ZXJzKCk7XHJcbiAgICBBUElIYW5kbGVyLnN5bmNBcGlQdXRDYWxsKFwiYXBpL3VwZGF0ZXBhcmFtZXRlcnMvXCIgKyBzaGVldE5hbWUsIGV4cG9ydFBhcmFtcywgaGFuZGxlRXhwb3J0UGFyYW1zRmVlZGJhY2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFeHBvcnRQYXJhbXNGZWVkYmFjayhpc1N1Y2Nlc3NmdWwpIHtcclxuICAgIGlmIChpc1N1Y2Nlc3NmdWwpIHtcclxuICAgICAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIFwiVXBkYXRpbmcgc3VjY2VlZGVkIVwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlOlwiLCBcIlVwZGF0aW5nIGZhaWxlZCFcIik7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2hlZXROYW1lKCkge1xyXG4gICAgbGV0IHNoZWV0TmFtZSA9IFwiXCI7XHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuICAgICAgICBzaGVldC5sb2FkKFwibmFtZVwiKTtcclxuICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgIHNoZWV0TmFtZT0gc2hlZXQubmFtZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNoZWV0TmFtZTtcclxufVxyXG5cclxuLy9hc3luYyBmdW5jdGlvbiBnZXRTZWFyY2hWYWx1ZXMoKSB7XHJcbi8vICAgIGxldCBzZWFyY2hWYWx1ZXMgPSBbXTtcclxuLy8gICAgYXdhaXQgQ29tbW9uLmV4Y2VsQWN0aW9uSGFuZGxlcihhc3luYyAoY3R4KSA9PiB7XHJcbi8vICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuLy8gICAgICAgIGZvciAobGV0IGNvbXBJRCA9IDA7IGNvbXBJRCA8IHNlYXJjaFZhbHVlTG9jcy5sZW5ndGg7IGNvbXBJRCsrKSB7XHJcbi8vICAgICAgICAgICAgbGV0IGNvbXBTZWFyY2hWYWx1ZUxvY3MgPSBzZWFyY2hWYWx1ZUxvY3NbY29tcElEXVxyXG4vLyAgICAgICAgICAgIGZvciAobGV0IHZhbHVlSUQgPSAwOyB2YWx1ZUlEIDwgY29tcFNlYXJjaFZhbHVlTG9jcy5sZW5ndGg7IHZhbHVlSUQrKykge1xyXG4vLyAgICAgICAgICAgICAgICBsZXQgcmFuZ2UgPSBzaGVldC5nZXRSYW5nZShjb21wU2VhcmNoVmFsdWVMb2NzW3ZhbHVlSURdKS5sb2FkKFwidmFsdWVzXCIpO1xyXG4vLyAgICAgICAgICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4vLyAgICAgICAgICAgICAgICBzZWFyY2hWYWx1ZXMucHVzaChyYW5nZS52YWx1ZXNbMF1bMF0pO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgIH1cclxuLy8gICAgfSk7XHJcbi8vICAgIHJldHVybiBzZWFyY2hWYWx1ZXMudG9TdHJpbmcoKTtcclxuLy99XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXRQYXJhbWV0ZXJzKHBhcmFtU3RyKSB7XHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBpZiAocGFyYW1TdHIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1ldGVycyA9IEpTT04ucGFyc2UocGFyYW1TdHIpO1xyXG4gICAgICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVMb2NhdGlvbnMgPSBwYXJhbWV0ZXJzW2ldW1wiVmFsdWVMb2NhdGlvbnNcIl07XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJhbWV0ZXJzW2ldW1wiVmFsdWVcIl07XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1wb3J0UmFuZ2UgPSBzaGVldC5nZXRSYW5nZSh2YWx1ZUxvY2F0aW9uc1swXSk7XHJcbiAgICAgICAgICAgICAgICBpbXBvcnRSYW5nZS52YWx1ZXMgPSBbW3ZhbHVlXV07XHJcbiAgICAgICAgICAgICAgICAvLyBkbyBub3QgdXBkYXRlIHZhbHVlcyB0byBleHBvcnQgcGFyYW1ldGVycyBhcyB0aGVzZSBhcmUgb25seSBzZXQgYnkgdGhlIHVzZXIgdmlhIGNhbGN1bGF0aW9uIHRvb2xcclxuICAgICAgICAgICAgICAgIC8vaWYgKHZhbHVlTG9jYXRpb25zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgIGxldCBleHBvcnRSYW5nZSA9IHNoZWV0LmdldFJhbmdlKHZhbHVlTG9jYXRpb25zWzFdKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgZXhwb3J0UmFuZ2UudmFsdWVzID0gW1t2YWx1ZV1dO1xyXG4gICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlXCIsIFwiRGF0YSBoYXMgYmVlbiBsb2FkZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZVwiLCBcIk5vIGRhdGEgaXMgbG9hZGVkLlwiKTtcclxuICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEV4cG9ydFBhcmFtZXRlcnMoKSB7XHJcbiAgICBsZXQgZXhwb3J0UGFyYW1zID0gW107XHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIFwiVXBkYXRpbmcgdGhlIGNvbXBvbmVudHMuLi4gXCIpO1xyXG4gICAgICAgIC8vIGNyZWF0ZSBhIDJkLWFycmF5IHRvIHN0b3JlIGFsbCB0aGUgY29tcG9uZW50IGluZm9ybWF0aW9uXHJcbiAgICAgICAgbGV0IHNoZWV0ID0gY3R4Lndvcmtib29rLndvcmtzaGVldHMuZ2V0QWN0aXZlV29ya3NoZWV0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHBvcnRWYWx1ZUxvY3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZVJhbmdlID0gc2hlZXQuZ2V0UmFuZ2UoZXhwb3J0VmFsdWVMb2NzW2ldKS5sb2FkKFwidmFsdWVzXCIpO1xyXG4gICAgICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgICAgICBleHBvcnRQYXJhbXMucHVzaCh1cGRhdGVSYW5nZS52YWx1ZXNbMF1bMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGV4cG9ydFBhcmFtcy50b1N0cmluZygpO1xyXG59XHJcblxyXG4vL2Z1bmN0aW9uIHN0b3JlU2VhcmNoVmFsdWVMb2NhdGlvbnMoc2VhcmNoUGFyYW1DZWxscykge1xyXG4vLyAgICBsZXQgdmFsdWVMb2NzID0gW107XHJcbi8vICAgIC8vYWRkIHRoZSB0ZXh0cyB0byBiZSBkaXNwbGF5ZWRcclxuLy8gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWFyY2hQYXJhbUNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICB2YWx1ZUxvY3MucHVzaChzZWFyY2hQYXJhbUNlbGxzW2ldW1wiVmFsdWVMb2NhdGlvblwiXSk7XHJcbi8vICAgIH1cclxuLy8gICAgc2VhcmNoVmFsdWVMb2NzLnB1c2godmFsdWVMb2NzKTtcclxuLy99XHJcblxyXG4vL2Z1bmN0aW9uIHNldFNlYXJjaFRleHRzVG9FeGNlbFNoZWV0KHNoZWV0LCBzZWFyY2hQYXJhbUNlbGxzKSB7XHJcbi8vICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VhcmNoUGFyYW1DZWxscy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgbGV0IHRleHRMb2MgPSBzZWFyY2hQYXJhbUNlbGxzW2ldW1wiQ2VsbExvY2F0aW9uXCJdO1xyXG5cclxuLy8gICAgICAgIC8vZ2V0IGEgcmFuZ2UgdGhhdCBjb3ZlcnMgdGhlIHNlYXJjaCBjZWxsc1xyXG4vLyAgICAgICAgbGV0IHRleHRSYW5nZSA9IHNoZWV0LmdldFJhbmdlKHRleHRMb2MpO1xyXG4vLyAgICAgICAgdGV4dFJhbmdlLnZhbHVlcyA9IFtbc2VhcmNoUGFyYW1DZWxsc1tpXVtcIkRpc3BsYXlUZXh0XCJdXV07XHJcblxyXG4vLyAgICAgICAgLy9mb3JtYXQgdGV4dCBjZWxsXHJcbi8vICAgICAgICAvL3RleHRSYW5nZS5mb3JtYXQuYXV0b2ZpdENvbHVtbnMoKTsgLy8gdGhpcyBkb2VzIG5vdCBzZWVtIHRvIGJlIHN1cHBvcnRlZCBpbiBFeGNlbCAyMDE2XHJcbi8vICAgICAgICB0ZXh0UmFuZ2UuZm9ybWF0LmZvbnQuYm9sZCA9IHRydWU7XHJcbi8vICAgICAgICB0ZXh0UmFuZ2UuZm9ybWF0LmZpbGwuY29sb3IgPSBcInllbGxvd1wiO1xyXG4vLyAgICB9XHJcbi8vfVxyXG5cclxuLy9hc3luYyBmdW5jdGlvbiBwcm9jZXNzRXhjZWxTZWFyY2hDcml0ZXJpYShzZWFyY2hQYXJhbUNlbGxzKSB7XHJcbi8vICAgIC8vIFJ1biBhIGJhdGNoIG9wZXJhdGlvbiBhZ2FpbnN0IHRoZSBFeGNlbCBvYmplY3QgbW9kZWxcclxuLy8gICAgYXdhaXQgQ29tbW9uLmV4Y2VsQWN0aW9uSGFuZGxlcihhc3luYyBjdHggPT4ge1xyXG4vLyAgICAgICAgLy8gQ3JlYXRlIGEgcHJveHkgb2JqZWN0IGZvciB0aGUgYWN0aXZlIHNoZWV0XHJcbi8vICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuXHJcbi8vICAgICAgICAvL3Byb2Nlc3MgdGhlIHRleHQgdG8gYmUgZGlzcGxheWVkIGluIHNlYXJjaCBjZWxsc1xyXG4vLyAgICAgICAgc3RvcmVTZWFyY2hWYWx1ZUxvY2F0aW9ucyhzZWFyY2hQYXJhbUNlbGxzKTtcclxuLy8gICAgICAgIHNldFNlYXJjaFRleHRzVG9FeGNlbFNoZWV0KHNoZWV0LCBzZWFyY2hQYXJhbUNlbGxzKTtcclxuLy8gICAgICAgIHJldHVybiBhd2FpdCBjdHguc3luYygpO1xyXG4vLyAgICB9KTtcclxuLy99XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzRXhwb3J0UGFyYW1ldGVycyhleHBvcnRQYXJhbUxvY3MpIHtcclxuICAgIC8vIFJ1biBhIGJhdGNoIG9wZXJhdGlvbiBhZ2FpbnN0IHRoZSBFeGNlbCBvYmplY3QgbW9kZWxcclxuICAgIGF3YWl0IENvbW1vbi5leGNlbEFjdGlvbkhhbmRsZXIoYXN5bmMgY3R4ID0+IHtcclxuICAgICAgICAvL3Byb2Nlc3MgdGhlIHRleHQgdG8gYmUgZGlzcGxheWVkIGluIHNlYXJjaCBjZWxsc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwb3J0UGFyYW1Mb2NzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vZXhwb3J0UGF0aHMucHVzaChleHBvcnRQYXJhbUxpc3RbaV1bXCJQcm9wc1wiXSk7XHJcbiAgICAgICAgICAgIGV4cG9ydFZhbHVlTG9jcy5wdXNoKGV4cG9ydFBhcmFtTG9jc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgRXhjZWxIYW5kbGVyIGZyb20gXCIuL0V4Y2VsSGFuZGxlclwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4vQ29tbW9uXCI7XHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmxldCBzaGVldE5hbWU6IHN0cmluZztcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgLy8gVGhlIGluaXRpYWxpemUgZnVuY3Rpb24gbXVzdCBiZSBydW4gZWFjaCB0aW1lIGEgbmV3IHBhZ2UgaXMgbG9hZGVkLlxyXG4gICAgT2ZmaWNlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAocmVhc29uKSB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgRmFicmljVUkgbm90aWZpY2F0aW9uIG1lY2hhbmlzbSBhbmQgaGlkZSBpdFxyXG4gICAgICAgICAgICBDb21tb24uaW5pdGlhbGl6ZU1lc3NhZ2VCYW5uZXIoKTtcclxuICAgICAgICAgICAgLy9kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAkKFwiI3RlbXBsYXRlLWRlc2NyaXB0aW9uXCIpLnRleHQoXCJUaGlzIHNhbXBsZSBhbGxvd3MgcmVhZGluZy93cml0aW5nIGZyb20vdG8gdGhlIEV4Y2VsIHNoZWV0LlwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNlYXJjaCBkYXRhIGxpc3RzXHJcbiAgICAgICAgICAgIC8vY29tcG9uZW50IGlkcyBsaXN0XHJcbiAgICAgICAgICAgICQoJyNjb21wb25lbnQtZGF0YWxpc3QtdGV4dCcpLnRleHQoXCJDb21wLklkc1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vcHJvamVjdCBpZHMgbGlzdFxyXG4gICAgICAgICAgICAkKCcjcHJvamVjdC1kYXRhbGlzdC10ZXh0JykudGV4dChcIlByb2ouSWRzXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gbG9hZCBjb25maWd1cmF0aW9uIGJ1dHRvblxyXG4gICAgICAgICAgICAkKCcjY29uZmlnLWJ1dHRvbi10ZXh0JykudGV4dChcIkxvYWQgY29uZmlnXCIpO1xyXG4gICAgICAgICAgICAkKCcjY29uZmlnLWJ1dHRvbi1kZXNjJykudGV4dChcIkxvYWQgZXhjZWwgY29uZmlndXJhdGlvbiBmb3IgdGhpcyBzaGVldFwiKTtcclxuICAgICAgICAgICAgJCgnI2NvbmZpZy1idXR0b24nKS5jbGljayhsb2FkRXhjZWxDb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIC8vbG9hZCBkYXRhIGJ1dHRvblxyXG4gICAgICAgICAgICAkKCcjZmV0Y2gtYnV0dG9uLXRleHQnKS50ZXh0KFwiTG9hZCBkYXRhXCIpO1xyXG4gICAgICAgICAgICAkKCcjZmV0Y2gtYnV0dG9uLWRlc2MnKS50ZXh0KFwiRmV0Y2ggYWxsIHRoZSBjb21wb25lbnRzLlwiKTtcclxuICAgICAgICAgICAgJCgnI2ZldGNoLWJ1dHRvbicpLmNsaWNrKGxvYWRQYXJhbWV0ZXJzKTtcclxuXHJcbiAgICAgICAgICAgIC8vdXBkYXRlIGRhdGEgYnV0dG9uXHJcbiAgICAgICAgICAgICQoJyNwdXQtYnV0dG9uLXRleHQnKS50ZXh0KFwiVXBkYXRlIGRhdGFcIik7XHJcbiAgICAgICAgICAgICQoJyNwdXQtYnV0dG9uLWRlc2MnKS50ZXh0KFwiVXBkYXRlIGNvbXBvbmVudHMuXCIpO1xyXG4gICAgICAgICAgICAkKCcjcHV0LWJ1dHRvbicpLmNsaWNrKHVwZGF0ZVBhcmFtZXRlcnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBiZWdpbm5pbmdNYXRjaGVkKHJlcXVlc3QsIHJlc3BvbnNlKSB7XHJcbiAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoXCJeXCIgKyAkLnVpLmF1dG9jb21wbGV0ZS5lc2NhcGVSZWdleChyZXF1ZXN0LnRlcm0pLCBcImlcIik7XHJcbiAgICByZXNwb25zZSgkLmdyZXAoW10sIGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXIudGVzdChpdGVtKTtcclxuICAgIH0pKTtcclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRFeGNlbENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIFwiTG9hZGluZyBjb25maWd1cmF0aW9uXCIpO1xyXG4gICAgc2hlZXROYW1lID0gYXdhaXQgRXhjZWxIYW5kbGVyLmdldFNoZWV0TmFtZSgpO1xyXG4gICAgRXhjZWxIYW5kbGVyLmxvYWRFeGNlbENvbmZpZ3VyYXRpb24oc2hlZXROYW1lKTtcclxuICAgIGxvYWRJbml0aWFsU2VhcmNoVmFsdWVzKCk7XHJcbiAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIFwiRmluaXNoIGxvYWRpbmcgY29uZmlndXJhdGlvblwiKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZFBhcmFtZXRlcnMoKSB7XHJcbiAgICBsZXQgY29tcG9uZW50SWQgPSAkKFwiI2NvbXBvbmVudElkc0xpc3RcIikudmFsKCk7XHJcbiAgICBsZXQgcHJvamVjdElkID0gJChcIiNwcm9qZWN0SWRzTGlzdFwiKS52YWwoKTtcclxuICAgIGxldCBzZWFyY2hWYWx1ZXMgPSBbY29tcG9uZW50SWQsIHByb2plY3RJZF07XHJcbiAgICBhd2FpdCBFeGNlbEhhbmRsZXIubG9hZFBhcmFtZXRlcnMoc2hlZXROYW1lLCBzZWFyY2hWYWx1ZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQYXJhbWV0ZXJzKCkge1xyXG4gICAgRXhjZWxIYW5kbGVyLnVwZGF0ZVBhcmFtZXRlcnMoc2hlZXROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q29uZmlnRm9yQXV0b1RleHRib3godGJOYW1lLCBnZXREYXRhQXBpKSB7XHJcbiAgICBnZXREYXRhQXBpKChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGFBcnIgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgICQodGJOYW1lKS5hdXRvY29tcGxldGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogZnVuY3Rpb24gKHJlcXVlc3QsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKFwiXlwiICsgJC51aS5hdXRvY29tcGxldGUuZXNjYXBlUmVnZXgocmVxdWVzdC50ZXJtKSwgXCJpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlKCQuZ3JlcChkYXRhQXJyLCBmdW5jdGlvbiAoaXRlbTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVyLnRlc3QoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IG15OiBcInJpZ2h0IGNlbnRlclwiLCBhdDogXCJyaWdodCBib3R0b21cIiB9LFxyXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSlcclxuXHJcbn1cclxuZnVuY3Rpb24gbG9hZEluaXRpYWxTZWFyY2hWYWx1ZXMoKSB7XHJcbiAgICAvL2dldCBsaXN0IG9mIGNvbXBvbmVudCBpZHNcclxuICAgIHNldENvbmZpZ0ZvckF1dG9UZXh0Ym94KFwiI2NvbXBvbmVudElkc0xpc3RcIiwgRXhjZWxIYW5kbGVyLmdldENvbXBvbmVudElkc0xpc3QpO1xyXG5cclxuICAgIC8vZ2V0IGxpc3Qgb2YgcHJvamVjdCBpZHNcclxuICAgIHNldENvbmZpZ0ZvckF1dG9UZXh0Ym94KFwiI3Byb2plY3RJZHNMaXN0XCIsIEV4Y2VsSGFuZGxlci5nZXRQcm9qZWN0SWRzTGlzdCk7XHJcbn1cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=