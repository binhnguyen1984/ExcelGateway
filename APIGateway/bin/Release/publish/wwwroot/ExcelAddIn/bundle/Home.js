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
function excelHandler(action) {
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
exports.excelHandler = excelHandler;
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

/***/ "./wwwroot/ExcelAddIn/ComponentsHandler.ts":
/*!*************************************************!*\
  !*** ./wwwroot/ExcelAddIn/ComponentsHandler.ts ***!
  \*************************************************/
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
var Common = __webpack_require__(/*! ./Common */ "./wwwroot/ExcelAddIn/Common.ts");
var startHeaders = 1;
exports.startHeaders = startHeaders;
var startComponentHeaders = 3;
exports.startComponentHeaders = startComponentHeaders;
var startSearchColCode = 65;
var startCompColCode = 65;
var search_cols = [];
exports.search_cols = search_cols;
var search_props;
var component_cols = [];
exports.component_cols = component_cols;
var component_col_db;
var compPropCount;
var startSearchColName;
exports.startSearchColName = startSearchColName;
var startUpdateColName;
var endUpdateColName;
var endSearchColName;
exports.endSearchColName = endSearchColName;
var startCompColName;
exports.startCompColName = startCompColName;
var endCompColName;
exports.endCompColName = endCompColName;
var start_update_col;
var end_update_col;
var compList;
var rowCounter = 0;
function set_compopnents_configuration(excel_config) {
    //Excel configuration setting
    exports.startHeaders = startHeaders = excel_config.start_headers;
    exports.startComponentHeaders = startComponentHeaders = excel_config.start_component_headers;
    startSearchColCode = excel_config.start_search_col_code;
    startCompColCode = excel_config.start_component_col_code;
    start_update_col = excel_config.start_update_col;
    end_update_col = excel_config.end_update_col;
    search_cols.push(Common.convert_string_to_array(excel_config.search_col_names_and_values));
    search_props = Common.convert_string_to_array(excel_config.search_prop_names);
    component_cols.push(Common.convert_string_to_array(excel_config.component_col_names));
    component_col_db = Common.convert_string_to_array(excel_config.component_col_db);
    compPropCount = component_cols[0].length;
    exports.startSearchColName = startSearchColName = String.fromCharCode(startSearchColCode);
    exports.endSearchColName = endSearchColName = String.fromCharCode(startSearchColCode + search_cols[0].length - 1);
    exports.startCompColName = startCompColName = String.fromCharCode(startCompColCode);
    exports.endCompColName = endCompColName = String.fromCharCode(startCompColCode + compPropCount - 1);
    startUpdateColName = String.fromCharCode(startCompColCode + start_update_col);
    endUpdateColName = String.fromCharCode(startCompColCode + end_update_col);
}
exports.set_compopnents_configuration = set_compopnents_configuration;
function fetchComponents(filterValues) {
    return __awaiter(this, void 0, void 0, function () {
        var url, filter, i, col, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = Common.hdbURL + ".json?";
                    filter = '';
                    i = 0;
                    for (; i < search_props.length; i++) {
                        col = (i << 1);
                        if (!Common.empty(filterValues.values[0][col]))
                            filter += search_props[i] + " eq '" + filterValues.values[0][col] + "' and ";
                    }
                    if (filter.length > 0) {
                        filter = filter.substring(0, filter.length - 5);
                        url += "$filter=" + filter;
                    }
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function getFilterValues(ctx) {
    // Create a proxy object for the active sheet
    var sheet = ctx.workbook.worksheets.getActiveWorksheet();
    var startSearchDataColName = String.fromCharCode(startSearchColCode + 1);
    var endSearchDataColName = String.fromCharCode(startSearchColCode + search_cols[0].length - 1);
    // delete old data
    for (var col = 0; col < component_cols[0].length; col++) {
        var componentColName = String.fromCharCode(startCompColCode + col);
        var startIndex = startComponentHeaders + 1;
        var endIndex = startIndex + rowCounter;
        var dataRange = sheet.getRange(componentColName + startIndex + ":" + componentColName + endIndex);
        dataRange.clear();
    }
    //
    var filterRange = sheet.getRange(startSearchDataColName + startHeaders + ":" + endSearchDataColName + startHeaders);
    var filterValues = filterRange.load("values");
    return filterValues;
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
    compList = message.components;
    if (compList == null || compList.length == 0)
        return null;
    var compValues = new Array(compList.length);
    for (var row = 0; row < compValues.length; row++) {
        compValues[row] = new Array(compPropCount);
        for (var col = 0; col < compPropCount; col++) {
            compValues[row][col] = compList[row][component_col_db[col]];
        }
    }
    return compValues;
}
function fillComponents(data) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Run a batch operation against the Excel object model
                return [4 /*yield*/, Common.excelHandler(function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                        var compValues, sheet, dataRange;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    compValues = parseJSONComponents(data);
                                    if (!(compValues != null)) return [3 /*break*/, 3];
                                    sheet = ctx.workbook.worksheets.getActiveWorksheet();
                                    dataRange = sheet.getRange(startCompColName + (startComponentHeaders + 1) + ":" + endCompColName + (compValues.length + startComponentHeaders)).load("values");
                                    return [4 /*yield*/, ctx.sync()];
                                case 1:
                                    _a.sent();
                                    rowCounter = compValues.length;
                                    if (!(rowCounter > 0)) return [3 /*break*/, 3];
                                    dataRange.values = compValues;
                                    return [4 /*yield*/, ctx.sync()];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
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
                            var sheet, updateRange, row, col, compStr, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        Common.showNotification("Message:", "Updating the components... ");
                                        sheet = ctx.workbook.worksheets.getActiveWorksheet();
                                        updateRange = sheet.getRange(startUpdateColName + (startComponentHeaders + 1) + ":" + endUpdateColName + (rowCounter + startComponentHeaders)).load("values");
                                        return [4 /*yield*/, ctx.sync()];
                                    case 1:
                                        _a.sent();
                                        row = 0;
                                        _a.label = 2;
                                    case 2:
                                        if (!(row < rowCounter)) return [3 /*break*/, 5];
                                        if (!(compList[row].locked == false)) return [3 /*break*/, 4];
                                        // update the values
                                        for (col = start_update_col; col <= end_update_col; col++) {
                                            compList[row][component_col_db[col]] = updateRange.values[row][col - start_update_col];
                                        }
                                        compStr = JSON.stringify(compList[row]);
                                        return [4 /*yield*/, putComponent(compStr, compList[row].componentID)];
                                    case 3:
                                        result = _a.sent();
                                        if (result.code != 200) {
                                            if (result.code == 500)
                                                Common.showNotification("Message:", "Updating row " + row +
                                                    " failed due to data inconsistency. You must fetch data before updating.");
                                            else
                                                Common.showNotification("Message:", "Updating row " + row + " failed [" + result.status + "]");
                                            return [3 /*break*/, 5];
                                        }
                                        else if (row == rowCounter - 1)
                                            Common.showNotification("Message:", "Updating succeeded!");
                                        _a.label = 4;
                                    case 4:
                                        row++;
                                        return [3 /*break*/, 2];
                                    case 5: return [2 /*return*/];
                                }
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


/***/ }),

/***/ "./wwwroot/ExcelAddIn/FileHandler.ts":
/*!*******************************************!*\
  !*** ./wwwroot/ExcelAddIn/FileHandler.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//import * as XLSX from 'ts-xlsx';
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
function asyncLoadFile(apiURL, callback) {
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
exports.asyncLoadFile = asyncLoadFile;
//export function loadExcelFile(file : string)
//{
//    let wb: XLSX.IWorkBook = XLSX.readFile(file);
//    let first_sheet_name = wb.SheetNames[0];
//    let sheet: XLSX.IWorkSheet = wb.Sheets[first_sheet_name];
//    let data = XLSX.utils.sheet_to_json(sheet);
//    return data;
//}
//function loadExcelFile(file, callback) {
//    console.log("Loading excel file");
//    let wb: Workbook = new Workbook();
//    let result = null;
//    try {
//        //console.log("start");
//        wb.xlsx.readFile(file).then(() => {
//            console.log("end");
//            let sheet: Worksheet = wb.getWorksheet("Sheet1");
//            let headers = sheet.getRow(0);
//            let rowId = 1;
//            result = new Array();
//            while (true) {
//                let rowData = sheet.getRow(rowId);
//                if (rowData.hasValues) {
//                    result.push(rowData); rowId++;
//                }
//                else break;
//            };
//        })
//    } catch (error) {
//        return null;
//    }
//    return result;
//}


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
var ComponentsHandler = __webpack_require__(/*! ./ComponentsHandler */ "./wwwroot/ExcelAddIn/ComponentsHandler.ts");
var Common = __webpack_require__(/*! ./Common */ "./wwwroot/ExcelAddIn/Common.ts");
var FileHandler = __webpack_require__(/*! ./FileHandler */ "./wwwroot/ExcelAddIn/FileHandler.ts");
(function () {
    "use strict";
    // The initialize function must be run each time a new page is loaded.
    Office.initialize = function (reason) {
        $(document).ready(function () {
            FileHandler.asyncLoadFile("api/loadexcelconfig", initializeExcelData);
            //loadExcelFile("./config.xlsx");
            // Initialize the FabricUI notification mechanism and hide it
            Common.initializeMessageBanner();
            // If not using Excel 2016, use fallback logic.
            if (!Office.context.requirements.isSetSupported('ExcelApi', 1.1)) {
                $("#template-description").text("This sample allows reading/writing from/to the Excel sheet.");
                $('#fetch-button-text').text("Fetch");
                $('#fetch-button-desc').text("Fetch components");
                $('#fetch-button').click(ComponentsHandler.loadComponentsDetail);
                $('#put-button-text').text("Update");
                $('#put-button-desc').text("Update components");
                $('#put-button').click(ComponentsHandler.loadComponentsDetail);
                return;
            }
            //$("#template-description").text("This sample will fetch all the components to the Excel sheet.");
            $('#fetch-button-text').text("Fetch");
            $('#fetch-button-desc').text("Fetch all the components.");
            // Add a click event handler for the fetch button.
            $('#fetch-button').click(ComponentsHandler.loadComponentsDetail);
            $('#put-button-text').text("Update");
            $('#put-button-desc').text("Update components.");
            // Add a click event handler for the put button.
            $('#put-button').click(ComponentsHandler.updateComponents);
        });
    };
    function initializeExcelData(config) {
        return __awaiter(this, void 0, void 0, function () {
            var config_data, excel_config, database_config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config_data = JSON.parse(config);
                        excel_config = config_data.Excel;
                        database_config = config_data.Database;
                        ComponentsHandler.set_compopnents_configuration(excel_config);
                        Common.set_urls(database_config);
                        return [4 /*yield*/, setExcelHeaders()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function setExcelHeaders() {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Run a batch operation against the Excel object model
                    return [4 /*yield*/, Common.excelHandler(function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                            var sheet, searchRange, col, cell, componentRange;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        sheet = ctx.workbook.worksheets.getActiveWorksheet();
                                        searchRange = sheet.getRange(ComponentsHandler.startSearchColName + ComponentsHandler.startHeaders + ":" + ComponentsHandler.endSearchColName + ComponentsHandler.startHeaders);
                                        searchRange.values = ComponentsHandler.search_cols;
                                        return [4 /*yield*/, ctx.sync()];
                                    case 1:
                                        _a.sent();
                                        for (col = 0; col < ComponentsHandler.search_cols[0].length / 2; col++) {
                                            cell = searchRange.getCell(0, 2 * col);
                                            cell.format.font.bold = true;
                                            cell.format.fill.color = "yellow";
                                        }
                                        componentRange = sheet.getRange(ComponentsHandler.startCompColName + ComponentsHandler.startComponentHeaders + ":" + ComponentsHandler.endCompColName + ComponentsHandler.startComponentHeaders);
                                        componentRange.values = ComponentsHandler.component_cols;
                                        componentRange.format.font.bold = true;
                                        componentRange.format.fill.color = "orange";
                                        componentRange.format.autofitColumns();
                                        return [4 /*yield*/, ctx.sync()];
                                    case 2:
                                        _a.sent();
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
})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi93d3dyb290L0V4Y2VsQWRkSW4vQ29tcG9uZW50c0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0ZpbGVIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3d3d3Jvb3QvRXhjZWxBZGRJbi9Ib21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUksYUFBYSxDQUFDO0FBQ2xCLElBQUksTUFBTSxFQUFFLE1BQU0sQ0FBQztBQUNWLHdCQUFNO0FBQUUsd0JBQU07QUFJdkIsU0FBZ0IsUUFBUSxDQUFDLFdBQVc7SUFF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QU0sR0FBRyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7d0NBQ3pELGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7d0NBQ3ZDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7d0NBQzVDLGNBQWMsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7d0NBQ3ZDLHFCQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUU7O3dDQUFoQixTQUFnQixDQUFDOzs7OzZCQUNwQixDQUFDOzt3QkFsQkYsdURBQXVEO3dCQUN2RCxTQWlCRSxDQUFDOzs7OztLQUNOO0FBR0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJIb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93d3dyb290L0V4Y2VsQWRkSW4vSG9tZS50c1wiKTtcbiIsImxldCBtZXNzYWdlQmFubmVyO1xyXG5sZXQgaGRiVVJMLCBjZHBVUkw7XHJcbmV4cG9ydCB7IGhkYlVSTCwgY2RwVVJMfTtcclxuZGVjbGFyZSBsZXQgZmFicmljOiBhbnk7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldF91cmxzKGNvbmZpZ19kYXRhKVxyXG57XHJcbiAgICBoZGJVUkwgPSBjb25maWdfZGF0YS5oZGJVUkw7IFxyXG4gICAgY2RwVVJMID0gY29uZmlnX2RhdGEuY2RwVVJMO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydF9zdHJpbmdfdG9fYXJyYXkoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS50cmltKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZU1lc3NhZ2VCYW5uZXIoKVxyXG57XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tcy1NZXNzYWdlQmFubmVyJyk7XHJcbiAgICBtZXNzYWdlQmFubmVyID0gbmV3IGZhYnJpYy5NZXNzYWdlQmFubmVyKGVsZW1lbnQpO1xyXG4gICAgbWVzc2FnZUJhbm5lci5oaWRlQmFubmVyKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5KGRhdGEpIHtcclxuICAgIGlmICh0eXBlb2YgKGRhdGEpID09ICdudW1iZXInIHx8IHR5cGVvZiAoZGF0YSkgPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiAoZGF0YSkgPT0gJ3VuZGVmaW5lZCcgfHwgZGF0YSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiAoZGF0YS5sZW5ndGgpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLy8gdGhpcyBpcyBraW5kIG9mIGEgcGF0dGVybiBmb3IgaGFuZGxpbmcgY29udGVudHMgaW4gdGhlIGN1cnJlbnQgZXhjZWwgc2hlZXRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4Y2VsSGFuZGxlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgRXhjZWwucnVuKGFjdGlvbik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGVycm9ySGFuZGxlcihlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBmb3IgdHJlYXRpbmcgZXJyb3JzXHJcbmV4cG9ydCBmdW5jdGlvbiBlcnJvckhhbmRsZXIoZXJyb3IpIHtcclxuICAgIC8vIEFsd2F5cyBiZSBzdXJlIHRvIGNhdGNoIGFueSBhY2N1bXVsYXRlZCBlcnJvcnMgdGhhdCBidWJibGUgdXAgZnJvbSB0aGUgRXhjZWwucnVuIGV4ZWN1dGlvblxyXG4gICAgc2hvd05vdGlmaWNhdGlvbihcIkVycm9yXCIsIGVycm9yKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpO1xyXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgT2ZmaWNlRXh0ZW5zaW9uLkVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEZWJ1ZyBpbmZvOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yLmRlYnVnSW5mbykpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gZm9yIGRpc3BsYXlpbmcgbm90aWZpY2F0aW9uc1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbihoZWFkZXIsIGNvbnRlbnQpIHtcclxuICAgICQoXCIjbm90aWZpY2F0aW9uLWhlYWRlclwiKS50ZXh0KGhlYWRlcik7XHJcbiAgICAkKFwiI25vdGlmaWNhdGlvbi1ib2R5XCIpLnRleHQoY29udGVudCk7XHJcbiAgICBtZXNzYWdlQmFubmVyLnNob3dCYW5uZXIoKTtcclxuICAgIG1lc3NhZ2VCYW5uZXIudG9nZ2xlRXhwYW5zaW9uKCk7XHJcbn1cclxuXHJcbiIsImltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi9Db21tb25cIjtcclxubGV0IHN0YXJ0SGVhZGVycyA9IDE7XHJcbmxldCBzdGFydENvbXBvbmVudEhlYWRlcnMgPSAzO1xyXG5sZXQgc3RhcnRTZWFyY2hDb2xDb2RlID0gNjU7XHJcbmxldCBzdGFydENvbXBDb2xDb2RlID0gNjU7XHJcbmxldCBzZWFyY2hfY29scyA9IFtdO1xyXG5sZXQgc2VhcmNoX3Byb3BzO1xyXG5sZXQgY29tcG9uZW50X2NvbHMgPSBbXTtcclxubGV0IGNvbXBvbmVudF9jb2xfZGI7XHJcbmxldCBjb21wUHJvcENvdW50O1xyXG5sZXQgc3RhcnRTZWFyY2hDb2xOYW1lO1xyXG5sZXQgc3RhcnRVcGRhdGVDb2xOYW1lO1xyXG5sZXQgZW5kVXBkYXRlQ29sTmFtZTtcclxubGV0IGVuZFNlYXJjaENvbE5hbWU7XHJcbmxldCBzdGFydENvbXBDb2xOYW1lO1xyXG5sZXQgZW5kQ29tcENvbE5hbWU7XHJcbmxldCBzdGFydF91cGRhdGVfY29sO1xyXG5sZXQgZW5kX3VwZGF0ZV9jb2w7XHJcbmxldCBjb21wTGlzdDtcclxubGV0IHJvd0NvdW50ZXIgPSAwO1xyXG5cclxuZXhwb3J0IHsgc3RhcnRTZWFyY2hDb2xOYW1lLCBlbmRTZWFyY2hDb2xOYW1lLCBzdGFydEhlYWRlcnMsIHN0YXJ0Q29tcENvbE5hbWUsIHN0YXJ0Q29tcG9uZW50SGVhZGVycywgZW5kQ29tcENvbE5hbWUsIHNlYXJjaF9jb2xzLCBjb21wb25lbnRfY29scyB9O1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0X2NvbXBvcG5lbnRzX2NvbmZpZ3VyYXRpb24oZXhjZWxfY29uZmlnKSB7XHJcbiAgICAvL0V4Y2VsIGNvbmZpZ3VyYXRpb24gc2V0dGluZ1xyXG4gICAgc3RhcnRIZWFkZXJzID0gZXhjZWxfY29uZmlnLnN0YXJ0X2hlYWRlcnM7XHJcbiAgICBzdGFydENvbXBvbmVudEhlYWRlcnMgPSBleGNlbF9jb25maWcuc3RhcnRfY29tcG9uZW50X2hlYWRlcnM7XHJcbiAgICBzdGFydFNlYXJjaENvbENvZGUgPSBleGNlbF9jb25maWcuc3RhcnRfc2VhcmNoX2NvbF9jb2RlO1xyXG4gICAgc3RhcnRDb21wQ29sQ29kZSA9IGV4Y2VsX2NvbmZpZy5zdGFydF9jb21wb25lbnRfY29sX2NvZGU7XHJcbiAgICBzdGFydF91cGRhdGVfY29sID0gZXhjZWxfY29uZmlnLnN0YXJ0X3VwZGF0ZV9jb2w7XHJcbiAgICBlbmRfdXBkYXRlX2NvbCA9IGV4Y2VsX2NvbmZpZy5lbmRfdXBkYXRlX2NvbDtcclxuICAgIHNlYXJjaF9jb2xzLnB1c2goQ29tbW9uLmNvbnZlcnRfc3RyaW5nX3RvX2FycmF5KGV4Y2VsX2NvbmZpZy5zZWFyY2hfY29sX25hbWVzX2FuZF92YWx1ZXMpKTtcclxuICAgIHNlYXJjaF9wcm9wcyA9IENvbW1vbi5jb252ZXJ0X3N0cmluZ190b19hcnJheShleGNlbF9jb25maWcuc2VhcmNoX3Byb3BfbmFtZXMpO1xyXG4gICAgY29tcG9uZW50X2NvbHMucHVzaChDb21tb24uY29udmVydF9zdHJpbmdfdG9fYXJyYXkoZXhjZWxfY29uZmlnLmNvbXBvbmVudF9jb2xfbmFtZXMpKTtcclxuICAgIGNvbXBvbmVudF9jb2xfZGIgPSBDb21tb24uY29udmVydF9zdHJpbmdfdG9fYXJyYXkoZXhjZWxfY29uZmlnLmNvbXBvbmVudF9jb2xfZGIpO1xyXG4gICAgY29tcFByb3BDb3VudCA9IGNvbXBvbmVudF9jb2xzWzBdLmxlbmd0aDtcclxuICAgIHN0YXJ0U2VhcmNoQ29sTmFtZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnRTZWFyY2hDb2xDb2RlKTtcclxuICAgIGVuZFNlYXJjaENvbE5hbWUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHN0YXJ0U2VhcmNoQ29sQ29kZSArIHNlYXJjaF9jb2xzWzBdLmxlbmd0aCAtIDEpO1xyXG4gICAgc3RhcnRDb21wQ29sTmFtZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnRDb21wQ29sQ29kZSk7XHJcbiAgICBlbmRDb21wQ29sTmFtZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnRDb21wQ29sQ29kZSArIGNvbXBQcm9wQ291bnQgLSAxKTtcclxuICAgIHN0YXJ0VXBkYXRlQ29sTmFtZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnRDb21wQ29sQ29kZSArIHN0YXJ0X3VwZGF0ZV9jb2wpO1xyXG4gICAgZW5kVXBkYXRlQ29sTmFtZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnRDb21wQ29sQ29kZSArIGVuZF91cGRhdGVfY29sKTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaENvbXBvbmVudHMoZmlsdGVyVmFsdWVzKSB7XHJcbiAgICAvLyBjcmVhdGUgdXJsIHRvIHF1ZXJ5IGZvciB0aGUgZGF0YVxyXG4gICAgbGV0IHVybCA9IENvbW1vbi5oZGJVUkwgKyBcIi5qc29uP1wiO1xyXG4gICAgbGV0IGZpbHRlciA9ICcnO1xyXG4gICAgbGV0IGkgPSAwLCBjb2w7XHJcbiAgICBmb3IgKDsgaSA8IHNlYXJjaF9wcm9wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbCA9IChpIDw8IDEpO1xyXG4gICAgICAgIGlmICghQ29tbW9uLmVtcHR5KGZpbHRlclZhbHVlcy52YWx1ZXNbMF1bY29sXSkpXHJcbiAgICAgICAgICAgIGZpbHRlciArPSBzZWFyY2hfcHJvcHNbaV0gKyBcIiBlcSAnXCIgKyBmaWx0ZXJWYWx1ZXMudmFsdWVzWzBdW2NvbF0gKyBcIicgYW5kIFwiO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZmlsdGVyID0gZmlsdGVyLnN1YnN0cmluZygwLCBmaWx0ZXIubGVuZ3RoIC0gNSk7XHJcbiAgICAgICAgdXJsICs9IFwiJGZpbHRlcj1cIiArIGZpbHRlcjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gY2FsbCB0aGUgYXBpIHRvIGZldGNoIGFsbCB0aGUgY29tcG9uZW50c1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZpbHRlclZhbHVlcyhjdHgpIHtcclxuICAgIC8vIENyZWF0ZSBhIHByb3h5IG9iamVjdCBmb3IgdGhlIGFjdGl2ZSBzaGVldFxyXG4gICAgbGV0IHNoZWV0ID0gY3R4Lndvcmtib29rLndvcmtzaGVldHMuZ2V0QWN0aXZlV29ya3NoZWV0KCk7XHJcbiAgICBsZXQgc3RhcnRTZWFyY2hEYXRhQ29sTmFtZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnRTZWFyY2hDb2xDb2RlICsgMSk7XHJcbiAgICBsZXQgZW5kU2VhcmNoRGF0YUNvbE5hbWUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHN0YXJ0U2VhcmNoQ29sQ29kZSArIHNlYXJjaF9jb2xzWzBdLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgIC8vIGRlbGV0ZSBvbGQgZGF0YVxyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgY29tcG9uZW50X2NvbHNbMF0ubGVuZ3RoOyBjb2wrKykge1xyXG4gICAgICAgIGxldCBjb21wb25lbnRDb2xOYW1lID0gU3RyaW5nLmZyb21DaGFyQ29kZShzdGFydENvbXBDb2xDb2RlICsgY29sKTtcclxuICAgICAgICBsZXQgc3RhcnRJbmRleCA9IHN0YXJ0Q29tcG9uZW50SGVhZGVycyArIDE7XHJcbiAgICAgICAgbGV0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIHJvd0NvdW50ZXI7XHJcbiAgICAgICAgbGV0IGRhdGFSYW5nZSA9IHNoZWV0LmdldFJhbmdlKGNvbXBvbmVudENvbE5hbWUgKyBzdGFydEluZGV4ICsgXCI6XCIgKyBjb21wb25lbnRDb2xOYW1lICsgZW5kSW5kZXgpO1xyXG4gICAgICAgIGRhdGFSYW5nZS5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICBsZXQgZmlsdGVyUmFuZ2UgPSBzaGVldC5nZXRSYW5nZShzdGFydFNlYXJjaERhdGFDb2xOYW1lICsgc3RhcnRIZWFkZXJzICsgXCI6XCIgKyBlbmRTZWFyY2hEYXRhQ29sTmFtZSArIHN0YXJ0SGVhZGVycyk7XHJcbiAgICBsZXQgZmlsdGVyVmFsdWVzID0gZmlsdGVyUmFuZ2UubG9hZChcInZhbHVlc1wiKTtcclxuICAgIHJldHVybiBmaWx0ZXJWYWx1ZXM7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZENvbXBvbmVudHNEZXRhaWwoKSB7XHJcbiAgICAvLyBSdW4gYSBiYXRjaCBvcGVyYXRpb24gYWdhaW5zdCB0aGUgRXhjZWwgb2JqZWN0IG1vZGVsXHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxIYW5kbGVyKGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2VcIiwgXCJEYXRhIGlzIGxvYWRpbmcgLi4uXCIpXHJcbiAgICAgICAgbGV0IGZpbHRlclZhbHVlcyA9IGdldEZpbHRlclZhbHVlcyhjdHgpO1xyXG4gICAgICAgIGF3YWl0IGN0eC5zeW5jKCk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBmZXRjaENvbXBvbmVudHMoZmlsdGVyVmFsdWVzKTtcclxuICAgICAgICBmaWxsQ29tcG9uZW50cyhkYXRhKTtcclxuICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZVwiLCBcIkRhdGEgaGFzIGJlZW4gbG9hZGVkLlwiKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUpTT05Db21wb25lbnRzKGRhdGEpIHtcclxuICAgIGxldCBtZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xyXG4gICAgY29tcExpc3QgPSBtZXNzYWdlLmNvbXBvbmVudHM7XHJcbiAgICBpZiAoY29tcExpc3QgPT0gbnVsbCB8fCBjb21wTGlzdC5sZW5ndGggPT0gMClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIGxldCBjb21wVmFsdWVzID0gbmV3IEFycmF5KGNvbXBMaXN0Lmxlbmd0aCk7XHJcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBjb21wVmFsdWVzLmxlbmd0aDsgcm93KyspIHtcclxuICAgICAgICBjb21wVmFsdWVzW3Jvd10gPSBuZXcgQXJyYXkoY29tcFByb3BDb3VudCk7XHJcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgY29tcFByb3BDb3VudDsgY29sKyspIHtcclxuICAgICAgICAgICAgY29tcFZhbHVlc1tyb3ddW2NvbF0gPSBjb21wTGlzdFtyb3ddW2NvbXBvbmVudF9jb2xfZGJbY29sXV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbXBWYWx1ZXM7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZpbGxDb21wb25lbnRzKGRhdGEpIHtcclxuICAgIC8vIFJ1biBhIGJhdGNoIG9wZXJhdGlvbiBhZ2FpbnN0IHRoZSBFeGNlbCBvYmplY3QgbW9kZWxcclxuICAgIGF3YWl0IENvbW1vbi5leGNlbEhhbmRsZXIoYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgICAgIGxldCBjb21wVmFsdWVzID0gcGFyc2VKU09OQ29tcG9uZW50cyhkYXRhKTtcclxuICAgICAgICBpZiAoY29tcFZhbHVlcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIDJkLWFycmF5IHRvIHN0b3JlIGFsbCB0aGUgY29tcG9uZW50IGluZm9ybWF0aW9uXHJcbiAgICAgICAgICAgIGxldCBzaGVldCA9IGN0eC53b3JrYm9vay53b3Jrc2hlZXRzLmdldEFjdGl2ZVdvcmtzaGVldCgpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YVJhbmdlID0gc2hlZXQuZ2V0UmFuZ2Uoc3RhcnRDb21wQ29sTmFtZSArIChzdGFydENvbXBvbmVudEhlYWRlcnMgKyAxKSArIFwiOlwiICsgZW5kQ29tcENvbE5hbWUgKyAoY29tcFZhbHVlcy5sZW5ndGggKyBzdGFydENvbXBvbmVudEhlYWRlcnMpKS5sb2FkKFwidmFsdWVzXCIpO1xyXG4gICAgICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgICAgICByb3dDb3VudGVyID0gY29tcFZhbHVlcy5sZW5ndGhcclxuICAgICAgICAgICAgaWYgKHJvd0NvdW50ZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhUmFuZ2UudmFsdWVzID0gY29tcFZhbHVlcztcclxuICAgICAgICAgICAgICAgIGF3YWl0IGN0eC5zeW5jKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHV0Q29tcG9uZW50KGNvbXBTdHIsIGNvbXBvbmVudElEKSB7XHJcbiAgICAvLyBjcmVhdGUgUFVUIHVybFxyXG4gICAgbGV0IHVybCA9IENvbW1vbi5oZGJVUkwgKyAnKCcgKyBjb21wb25lbnRJRCArICcpJztcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgYm9keTogY29tcFN0cixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBVcGRhdGUgY29tcG9uZW50c1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50cygpIHtcclxuICAgIC8vIFJ1biBhIGJhdGNoIG9wZXJhdGlvbiBhZ2FpbnN0IHRoZSBFeGNlbCBvYmplY3QgbW9kZWxcclxuICAgIGF3YWl0IENvbW1vbi5leGNlbEhhbmRsZXIoYXN5bmMgZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZTpcIiwgXCJVcGRhdGluZyB0aGUgY29tcG9uZW50cy4uLiBcIik7XHJcbiAgICAgICAgLy8gY3JlYXRlIGEgMmQtYXJyYXkgdG8gc3RvcmUgYWxsIHRoZSBjb21wb25lbnQgaW5mb3JtYXRpb25cclxuICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuICAgICAgICBsZXQgdXBkYXRlUmFuZ2UgPSBzaGVldC5nZXRSYW5nZShzdGFydFVwZGF0ZUNvbE5hbWUgKyAoc3RhcnRDb21wb25lbnRIZWFkZXJzICsgMSkgKyBcIjpcIiArIGVuZFVwZGF0ZUNvbE5hbWUgKyAocm93Q291bnRlciArIHN0YXJ0Q29tcG9uZW50SGVhZGVycykpLmxvYWQoXCJ2YWx1ZXNcIik7XHJcbiAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dDb3VudGVyOyByb3crKylcclxuICAgICAgICAgICAgaWYgKGNvbXBMaXN0W3Jvd10ubG9ja2VkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29sID0gc3RhcnRfdXBkYXRlX2NvbDsgY29sIDw9IGVuZF91cGRhdGVfY29sOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBMaXN0W3Jvd11bY29tcG9uZW50X2NvbF9kYltjb2xdXSA9IHVwZGF0ZVJhbmdlLnZhbHVlc1tyb3ddW2NvbCAtIHN0YXJ0X3VwZGF0ZV9jb2xdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNvbnZlcnQgdXBkYXRlZCBjb21wb25lbnQgaW5mb3JtYXRpb24gdG8gYSBzdHJpbmdcclxuICAgICAgICAgICAgICAgIGxldCBjb21wU3RyID0gSlNPTi5zdHJpbmdpZnkoY29tcExpc3Rbcm93XSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcHV0Q29tcG9uZW50KGNvbXBTdHIsIGNvbXBMaXN0W3Jvd10uY29tcG9uZW50SUQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZTpcIiwgXCJVcGRhdGluZyByb3cgXCIgKyByb3cgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgZmFpbGVkIGR1ZSB0byBkYXRhIGluY29uc2lzdGVuY3kuIFlvdSBtdXN0IGZldGNoIGRhdGEgYmVmb3JlIHVwZGF0aW5nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZTpcIiwgXCJVcGRhdGluZyByb3cgXCIgKyByb3cgKyBcIiBmYWlsZWQgW1wiICsgcmVzdWx0LnN0YXR1cyArIFwiXVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJvdyA9PSByb3dDb3VudGVyIC0gMSlcclxuICAgICAgICAgICAgICAgICAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIFwiVXBkYXRpbmcgc3VjY2VlZGVkIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiLy9pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3RzLXhsc3gnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFzeW5jTG9hZEZpbGUoYXBpVVJMLGNhbGxiYWNrKSB7XHJcbiAgICBsZXQgcmF3RmlsZSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgLy9yYXdGaWxlLm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgcmF3RmlsZS5vcGVuKFwiR0VUXCIsIGFwaVVSTCwgdHJ1ZSk7XHJcbiAgICByYXdGaWxlLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocmF3RmlsZS5yZWFkeVN0YXRlID09PSA0ICYmIHJhd0ZpbGUuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICBhd2FpdCBjYWxsYmFjayhyYXdGaWxlLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmF3RmlsZS5zZW5kKG51bGwpO1xyXG59XHJcblxyXG4vL2V4cG9ydCBmdW5jdGlvbiBsb2FkRXhjZWxGaWxlKGZpbGUgOiBzdHJpbmcpXHJcbi8ve1xyXG4vLyAgICBsZXQgd2I6IFhMU1guSVdvcmtCb29rID0gWExTWC5yZWFkRmlsZShmaWxlKTtcclxuLy8gICAgbGV0IGZpcnN0X3NoZWV0X25hbWUgPSB3Yi5TaGVldE5hbWVzWzBdO1xyXG4vLyAgICBsZXQgc2hlZXQ6IFhMU1guSVdvcmtTaGVldCA9IHdiLlNoZWV0c1tmaXJzdF9zaGVldF9uYW1lXTtcclxuLy8gICAgbGV0IGRhdGEgPSBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24oc2hlZXQpO1xyXG4vLyAgICByZXR1cm4gZGF0YTtcclxuLy99XHJcbi8vZnVuY3Rpb24gbG9hZEV4Y2VsRmlsZShmaWxlLCBjYWxsYmFjaykge1xyXG4vLyAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgZXhjZWwgZmlsZVwiKTtcclxuLy8gICAgbGV0IHdiOiBXb3JrYm9vayA9IG5ldyBXb3JrYm9vaygpO1xyXG4vLyAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuLy8gICAgdHJ5IHtcclxuLy8gICAgICAgIC8vY29uc29sZS5sb2coXCJzdGFydFwiKTtcclxuLy8gICAgICAgIHdiLnhsc3gucmVhZEZpbGUoZmlsZSkudGhlbigoKSA9PiB7XHJcbi8vICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbmRcIik7XHJcbi8vICAgICAgICAgICAgbGV0IHNoZWV0OiBXb3Jrc2hlZXQgPSB3Yi5nZXRXb3Jrc2hlZXQoXCJTaGVldDFcIik7XHJcbi8vICAgICAgICAgICAgbGV0IGhlYWRlcnMgPSBzaGVldC5nZXRSb3coMCk7XHJcbi8vICAgICAgICAgICAgbGV0IHJvd0lkID0gMTtcclxuLy8gICAgICAgICAgICByZXN1bHQgPSBuZXcgQXJyYXkoKTtcclxuLy8gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4vLyAgICAgICAgICAgICAgICBsZXQgcm93RGF0YSA9IHNoZWV0LmdldFJvdyhyb3dJZCk7XHJcbi8vICAgICAgICAgICAgICAgIGlmIChyb3dEYXRhLmhhc1ZhbHVlcykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocm93RGF0YSk7IHJvd0lkKys7XHJcbi8vICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgZWxzZSBicmVhaztcclxuLy8gICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgfSlcclxuLy8gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgIHJldHVybiBudWxsO1xyXG4vLyAgICB9XHJcbi8vICAgIHJldHVybiByZXN1bHQ7XHJcbi8vfSIsImltcG9ydCAqIGFzIENvbXBvbmVudHNIYW5kbGVyIGZyb20gXCIuL0NvbXBvbmVudHNIYW5kbGVyXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi9Db21tb25cIjtcclxuaW1wb3J0ICogYXMgRmlsZUhhbmRsZXIgZnJvbSBcIi4vRmlsZUhhbmRsZXJcIjtcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIC8vIFRoZSBpbml0aWFsaXplIGZ1bmN0aW9uIG11c3QgYmUgcnVuIGVhY2ggdGltZSBhIG5ldyBwYWdlIGlzIGxvYWRlZC5cclxuICAgIE9mZmljZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHJlYXNvbikge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgRmlsZUhhbmRsZXIuYXN5bmNMb2FkRmlsZShcImFwaS9sb2FkZXhjZWxjb25maWdcIiwgaW5pdGlhbGl6ZUV4Y2VsRGF0YSk7XHJcbiAgICAgICAgICAgIC8vbG9hZEV4Y2VsRmlsZShcIi4vY29uZmlnLnhsc3hcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBGYWJyaWNVSSBub3RpZmljYXRpb24gbWVjaGFuaXNtIGFuZCBoaWRlIGl0XHJcbiAgICAgICAgICAgIENvbW1vbi5pbml0aWFsaXplTWVzc2FnZUJhbm5lcigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSWYgbm90IHVzaW5nIEV4Y2VsIDIwMTYsIHVzZSBmYWxsYmFjayBsb2dpYy5cclxuICAgICAgICAgICAgaWYgKCFPZmZpY2UuY29udGV4dC5yZXF1aXJlbWVudHMuaXNTZXRTdXBwb3J0ZWQoJ0V4Y2VsQXBpJywgMS4xKSkge1xyXG4gICAgICAgICAgICAgICAgJChcIiN0ZW1wbGF0ZS1kZXNjcmlwdGlvblwiKS50ZXh0KFwiVGhpcyBzYW1wbGUgYWxsb3dzIHJlYWRpbmcvd3JpdGluZyBmcm9tL3RvIHRoZSBFeGNlbCBzaGVldC5cIik7XHJcbiAgICAgICAgICAgICAgICAkKCcjZmV0Y2gtYnV0dG9uLXRleHQnKS50ZXh0KFwiRmV0Y2hcIik7XHJcbiAgICAgICAgICAgICAgICAkKCcjZmV0Y2gtYnV0dG9uLWRlc2MnKS50ZXh0KFwiRmV0Y2ggY29tcG9uZW50c1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjZmV0Y2gtYnV0dG9uJykuY2xpY2soQ29tcG9uZW50c0hhbmRsZXIubG9hZENvbXBvbmVudHNEZXRhaWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNwdXQtYnV0dG9uLXRleHQnKS50ZXh0KFwiVXBkYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3B1dC1idXR0b24tZGVzYycpLnRleHQoXCJVcGRhdGUgY29tcG9uZW50c1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjcHV0LWJ1dHRvbicpLmNsaWNrKENvbXBvbmVudHNIYW5kbGVyLmxvYWRDb21wb25lbnRzRGV0YWlsKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vJChcIiN0ZW1wbGF0ZS1kZXNjcmlwdGlvblwiKS50ZXh0KFwiVGhpcyBzYW1wbGUgd2lsbCBmZXRjaCBhbGwgdGhlIGNvbXBvbmVudHMgdG8gdGhlIEV4Y2VsIHNoZWV0LlwiKTtcclxuICAgICAgICAgICAgJCgnI2ZldGNoLWJ1dHRvbi10ZXh0JykudGV4dChcIkZldGNoXCIpO1xyXG4gICAgICAgICAgICAkKCcjZmV0Y2gtYnV0dG9uLWRlc2MnKS50ZXh0KFwiRmV0Y2ggYWxsIHRoZSBjb21wb25lbnRzLlwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBhIGNsaWNrIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBmZXRjaCBidXR0b24uXHJcbiAgICAgICAgICAgICQoJyNmZXRjaC1idXR0b24nKS5jbGljayhDb21wb25lbnRzSGFuZGxlci5sb2FkQ29tcG9uZW50c0RldGFpbCk7XHJcblxyXG4gICAgICAgICAgICAkKCcjcHV0LWJ1dHRvbi10ZXh0JykudGV4dChcIlVwZGF0ZVwiKTtcclxuICAgICAgICAgICAgJCgnI3B1dC1idXR0b24tZGVzYycpLnRleHQoXCJVcGRhdGUgY29tcG9uZW50cy5cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgYSBjbGljayBldmVudCBoYW5kbGVyIGZvciB0aGUgcHV0IGJ1dHRvbi5cclxuICAgICAgICAgICAgJCgnI3B1dC1idXR0b24nKS5jbGljayhDb21wb25lbnRzSGFuZGxlci51cGRhdGVDb21wb25lbnRzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZUV4Y2VsRGF0YShjb25maWc6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjb25maWdfZGF0YSA9IEpTT04ucGFyc2UoY29uZmlnKTtcclxuICAgICAgICBsZXQgZXhjZWxfY29uZmlnID0gY29uZmlnX2RhdGEuRXhjZWw7XHJcbiAgICAgICAgbGV0IGRhdGFiYXNlX2NvbmZpZyA9IGNvbmZpZ19kYXRhLkRhdGFiYXNlO1xyXG4gICAgICAgIENvbXBvbmVudHNIYW5kbGVyLnNldF9jb21wb3BuZW50c19jb25maWd1cmF0aW9uKGV4Y2VsX2NvbmZpZyk7XHJcbiAgICAgICAgQ29tbW9uLnNldF91cmxzKGRhdGFiYXNlX2NvbmZpZyk7XHJcbiAgICAgICAgYXdhaXQgc2V0RXhjZWxIZWFkZXJzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldEV4Y2VsSGVhZGVycygpIHtcclxuICAgICAgICAvLyBSdW4gYSBiYXRjaCBvcGVyYXRpb24gYWdhaW5zdCB0aGUgRXhjZWwgb2JqZWN0IG1vZGVsXHJcbiAgICAgICAgYXdhaXQgQ29tbW9uLmV4Y2VsSGFuZGxlcihhc3luYyBjdHggPT4ge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBwcm94eSBvYmplY3QgZm9yIHRoZSBhY3RpdmUgc2hlZXRcclxuICAgICAgICAgICAgbGV0IHNoZWV0ID0gY3R4Lndvcmtib29rLndvcmtzaGVldHMuZ2V0QWN0aXZlV29ya3NoZWV0KCk7XHJcbiAgICAgICAgICAgIGxldCBzZWFyY2hSYW5nZSA9IHNoZWV0LmdldFJhbmdlKENvbXBvbmVudHNIYW5kbGVyLnN0YXJ0U2VhcmNoQ29sTmFtZSArIENvbXBvbmVudHNIYW5kbGVyLnN0YXJ0SGVhZGVycyArIFwiOlwiICsgQ29tcG9uZW50c0hhbmRsZXIuZW5kU2VhcmNoQ29sTmFtZSArIENvbXBvbmVudHNIYW5kbGVyLnN0YXJ0SGVhZGVycyk7XHJcbiAgICAgICAgICAgIHNlYXJjaFJhbmdlLnZhbHVlcyA9IENvbXBvbmVudHNIYW5kbGVyLnNlYXJjaF9jb2xzO1xyXG4gICAgICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBDb21wb25lbnRzSGFuZGxlci5zZWFyY2hfY29sc1swXS5sZW5ndGggLyAyOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBzZWFyY2hSYW5nZS5nZXRDZWxsKDAsIDIgKiBjb2wpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5mb3JtYXQuZm9udC5ib2xkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNlbGwuZm9ybWF0LmZpbGwuY29sb3IgPSBcInllbGxvd1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnRSYW5nZSA9IHNoZWV0LmdldFJhbmdlKENvbXBvbmVudHNIYW5kbGVyLnN0YXJ0Q29tcENvbE5hbWUgKyBDb21wb25lbnRzSGFuZGxlci5zdGFydENvbXBvbmVudEhlYWRlcnMgKyBcIjpcIiArIENvbXBvbmVudHNIYW5kbGVyLmVuZENvbXBDb2xOYW1lICsgQ29tcG9uZW50c0hhbmRsZXIuc3RhcnRDb21wb25lbnRIZWFkZXJzKTtcclxuICAgICAgICAgICAgY29tcG9uZW50UmFuZ2UudmFsdWVzID0gQ29tcG9uZW50c0hhbmRsZXIuY29tcG9uZW50X2NvbHM7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudFJhbmdlLmZvcm1hdC5mb250LmJvbGQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb21wb25lbnRSYW5nZS5mb3JtYXQuZmlsbC5jb2xvciA9IFwib3JhbmdlXCI7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudFJhbmdlLmZvcm1hdC5hdXRvZml0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=