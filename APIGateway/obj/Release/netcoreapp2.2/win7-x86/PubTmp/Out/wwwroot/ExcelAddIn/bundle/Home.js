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
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", apiURL, true);
    xhr.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(xhr.readyState == 4 && xhr.status == 200 && callback != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, callback.apply(void 0, [xhr.responseText].concat(args))];
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
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", apiURL, false);
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200 && callback != null)
            callback.apply(void 0, [xhr.responseText].concat(args));
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

/***/ "./wwwroot/ExcelAddIn/CDPLoader.ts":
/*!*****************************************!*\
  !*** ./wwwroot/ExcelAddIn/CDPLoader.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APIHandler = __webpack_require__(/*! ./APIHandler */ "./wwwroot/ExcelAddIn/APIHandler.ts");
function getProjectIds(callback) {
    APIHandler.syncApiGetCall("api/loadattributevalues?attrPath=cdp:projects/id", callback);
}
exports.getProjectIds = getProjectIds;
function getProjectNames(callback) {
    APIHandler.syncApiGetCall("api/loadattributevalues?attrPath=cdp:projects/name", callback);
}
exports.getProjectNames = getProjectNames;
function getVariantsByProjectName(callback, projectName) {
    APIHandler.asyncApiGetCall("api/loadvariantsbyprojectname?projectName=" + projectName, callback);
}
exports.getVariantsByProjectName = getVariantsByProjectName;
function getVersionsByProjectAndVariant(callback, projectName, variantName) {
    APIHandler.syncApiGetCall("api/loadversionsbyprojectandvariant?projectName=" + projectName + "&variantName=" + variantName, callback);
}
exports.getVersionsByProjectAndVariant = getVersionsByProjectAndVariant;


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
var importStartCol = 0;
var exportStartCol = 3;
function loadParameters(searchValues) {
    return __awaiter(this, void 0, void 0, function () {
        var importProps, propNames, importValueLocs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Common.showNotification("Message", "Data is loading ...");
                    return [4 /*yield*/, getImportPropNames()];
                case 1:
                    importProps = _a.sent();
                    propNames = importProps[0];
                    importValueLocs = importProps[1];
                    APIHandler.asyncApiGetCall("api/loadparameters?propNames=" + propNames.toString() + "&searchValues=" + searchValues, setImportParameters, importValueLocs);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadParameters = loadParameters;
function updateParameters() {
    return __awaiter(this, void 0, void 0, function () {
        var exportParams, exportPropNames, exportValues;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Common.showNotification("Message:", "Updating the components... ");
                    return [4 /*yield*/, getExportPropNames()];
                case 1:
                    exportParams = _a.sent();
                    exportPropNames = exportParams[0];
                    exportValues = exportParams[1];
                    APIHandler.syncApiPutCall("api/updateparameters/?propNames=" + exportPropNames.toString(), exportValues.toString(), handleExportParamsFeedback);
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateParameters = updateParameters;
function handleExportParamsFeedback(response) {
    var respJson = JSON.parse(response);
    if (respJson.isSuccessful) {
        Common.showNotification("Message:", "Updating succeeded!");
    }
    else
        Common.showNotification("Message:", respJson.data);
}
function getImportPropNames() {
    return __awaiter(this, void 0, void 0, function () {
        var propNames, locs;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    propNames = [];
                    locs = [];
                    return [4 /*yield*/, Common.excelActionHandler(function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                            var sheet, range, rowCount, firstPropCell, lastPropCell, props, row, propName;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        sheet = ctx.workbook.worksheets.getActiveWorksheet();
                                        range = sheet.getUsedRange().load("rowCount");
                                        return [4 /*yield*/, ctx.sync()];
                                    case 1:
                                        _a.sent();
                                        rowCount = range.rowCount;
                                        firstPropCell = sheet.getUsedRange().getCell(0, importStartCol).load("address");
                                        lastPropCell = sheet.getUsedRange().getCell(rowCount - 1, importStartCol).load("address");
                                        return [4 /*yield*/, ctx.sync()];
                                    case 2:
                                        _a.sent();
                                        range = sheet.getRange(firstPropCell.address + ":" + lastPropCell.address).load("values");
                                        return [4 /*yield*/, ctx.sync()];
                                    case 3:
                                        _a.sent();
                                        props = range.values;
                                        //search for all parameter names
                                        for (row = 0; row < rowCount; row++) {
                                            propName = props[row][0];
                                            if (propName.indexOf("/") >= 0) {
                                                propNames.push(propName);
                                                locs.push(row);
                                            }
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, [propNames, locs]];
            }
        });
    });
}
function getExportPropNames() {
    return __awaiter(this, void 0, void 0, function () {
        var propNames, values;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    propNames = [];
                    values = [];
                    return [4 /*yield*/, Common.excelActionHandler(function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                            var sheet, range, rowCount, firstPropCell, lastPropCell, props, row, propName;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        sheet = ctx.workbook.worksheets.getActiveWorksheet();
                                        range = sheet.getUsedRange().load("rowCount");
                                        return [4 /*yield*/, ctx.sync()];
                                    case 1:
                                        _a.sent();
                                        rowCount = range.rowCount;
                                        firstPropCell = sheet.getUsedRange().getCell(0, exportStartCol).load("address");
                                        lastPropCell = sheet.getUsedRange().getCell(rowCount - 1, exportStartCol + 1).load("address");
                                        return [4 /*yield*/, ctx.sync()];
                                    case 2:
                                        _a.sent();
                                        range = sheet.getRange(firstPropCell.address + ":" + lastPropCell.address).load("values");
                                        return [4 /*yield*/, ctx.sync()];
                                    case 3:
                                        _a.sent();
                                        props = range.values;
                                        //search for all parameter names
                                        for (row = 0; row < rowCount; row++) {
                                            propName = props[row][0];
                                            if (propName.indexOf("/") >= 0) {
                                                propNames.push(propName);
                                                values.push(props[row][1]);
                                            }
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, [propNames, values]];
            }
        });
    });
}
//we pad the import parameter array with empty strings at locations of empty rows
//and turn it into column array
function formatParamArr(paramArr, importValueLocs) {
    var params = [];
    for (var i = 0; i < importValueLocs.length; i++) {
        if (i > 0) {
            var distance = importValueLocs[i] - importValueLocs[i - 1] - 1;
            if (distance > 0)
                for (var j = 0; j < distance; j++)
                    params.push([""]);
        }
        params.push([paramArr[i]]);
    }
    return params;
}
function setImportParameters(response, importValueLocs) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Common.excelActionHandler(function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                        var respJson, paramArr, sheet, firstValueCell, lastValueCell, importRange;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    respJson = JSON.parse(response);
                                    if (!respJson.isSuccessful) return [3 /*break*/, 2];
                                    paramArr = formatParamArr(respJson.data, importValueLocs);
                                    sheet = ctx.workbook.worksheets.getActiveWorksheet();
                                    firstValueCell = sheet.getUsedRange().getCell(importValueLocs[0], importStartCol + 1).load("address");
                                    lastValueCell = sheet.getUsedRange().getCell(importValueLocs[importValueLocs.length - 1], importStartCol + 1).load("address");
                                    return [4 /*yield*/, ctx.sync()];
                                case 1:
                                    _a.sent();
                                    importRange = sheet.getRange(firstValueCell.address + ":" + lastValueCell.address);
                                    importRange.values = paramArr;
                                    //importRange.format.wrapText = true;
                                    //importRange.format.autofitColumns();
                                    //importRange.style = Excel.BuiltInStyle.neutral;
                                    //importRange.format.horizontalAlignment = "Right";
                                    Common.showNotification("Message", "Data has been loaded.");
                                    return [3 /*break*/, 3];
                                case 2:
                                    Common.showNotification("Message", respJson.data);
                                    _a.label = 3;
                                case 3: return [4 /*yield*/, ctx.sync()];
                                case 4:
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


/***/ }),

/***/ "./wwwroot/ExcelAddIn/HDBLoader.ts":
/*!*****************************************!*\
  !*** ./wwwroot/ExcelAddIn/HDBLoader.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APIHandler = __webpack_require__(/*! ./APIHandler */ "./wwwroot/ExcelAddIn/APIHandler.ts");
function getComponentIds(callback) {
    APIHandler.syncApiGetCall("api/loadattributevalues?attrPath=hdb:components/componentID", callback);
}
exports.getComponentIds = getComponentIds;
function getProjectNames(callback) {
    APIHandler.syncApiGetCall("api/loadattributevalues?attrPath=hdb:projects/name", callback);
}
exports.getProjectNames = getProjectNames;


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
var HDBLoader = __webpack_require__(/*! ./HDBLoader */ "./wwwroot/ExcelAddIn/HDBLoader.ts");
var CDPLoader = __webpack_require__(/*! ./CDPLoader */ "./wwwroot/ExcelAddIn/CDPLoader.ts");
var Common = __webpack_require__(/*! ./Common */ "./wwwroot/ExcelAddIn/Common.ts");
var $ = __webpack_require__(/*! jquery */ "jquery");
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
            $('#component-datalist-text').text("Components");
            //project names list
            $('#cdp-project-datalist-text').text("Projects");
            $('#cdp-project-variant-datalist-text').text("Variants");
            $('#cdp-project-revision-datalist-text').text("Versions");
            //load data button
            $('#fetch-button-text').text("Load data");
            $('#fetch-button-desc').text("Fetch all the components.");
            $('#fetch-button').click(loadParameters);
            //update data button
            $('#put-button-text').text("Update data");
            $('#put-button-desc').text("Update components.");
            $('#put-button').click(updateParameters);
            //action handling
            //$('#projectNamesList').autocomplete({ change: projectNameOnChange });
            //$('#projectVariantsList').autocomplete({ change: variantNameOnChange });
            assignTextboxEventHandlers();
            //load initial values for search text boxes
            loadInitialSearchValues();
        });
    };
})();
function assignTextboxEventHandlers() {
    document.querySelector('input[list="projectNamesList"]').addEventListener('focusout', projectNameOnChange);
    document.querySelector('input[list="projectVariantsList"]').addEventListener('focusout', variantNameOnChange);
}
function projectNameOnChange(e) {
    var projectName = e.target.value;
    //get list of variant names
    CDPLoader.getVariantsByProjectName(function (response) { return updateTextbox("projectVariantsList", response); }, projectName);
}
function variantNameOnChange(e) {
    var projectName = $('#projectNames').val();
    var variantName = e.target.value;
    //get list of variant names
    CDPLoader.getVersionsByProjectAndVariant(function (response) { return updateTextbox("projectVersionsList", response); }, projectName, variantName);
}
function loadParameters() {
    return __awaiter(this, void 0, void 0, function () {
        var componentId, projectName, variantName, revisionName, searchValues;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    componentId = $("#componentIds").val();
                    projectName = $('#projectNames').val();
                    variantName = $("#projectVariants").val();
                    revisionName = $('#projectVersions').val();
                    searchValues = [
                        "hdb:components/componentID=" + componentId,
                        "cdp:projects/id=" + projectName,
                        "cdp:variants/id=" + variantName,
                        "cdp:versions/id" + revisionName
                    ];
                    return [4 /*yield*/, ExcelHandler.loadParameters(searchValues)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function updateParameters() {
    ExcelHandler.updateParameters();
}
function updateTextbox(tboxId, response) {
    var respJson = JSON.parse(response);
    if (respJson.isSuccessful) {
        respJson.data.forEach(function (value) { return addListEntry(tboxId, value); });
        //$(tboxId).autocomplete(
        //    {
        //        source: function (request, response) {
        //            var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
        //            response($.grep(respJson.data, function (item: string) {
        //                return matcher.test(item);
        //            }));
        //        },
        //        position: { my: "right center", at: "right bottom" },
        //        minLength: 1
        //    });
    }
    else
        Common.showNotification("Message:", respJson.data);
}
function addListEntry(tboxId, value) {
    var optionNode = document.createElement("option");
    optionNode.value = value;
    document.getElementById(tboxId).appendChild(optionNode);
}
function setConfigForAutoTextbox(tbName, getData) {
    getData(function (response) { return updateTextbox(tbName, response); });
}
function loadInitialSearchValues() {
    //Common.showNotification("Message:", "Loading search values");
    //get list of component ids
    setConfigForAutoTextbox("componentIdsList", HDBLoader.getComponentIds);
    //get list of project ids
    setConfigForAutoTextbox("projectNamesList", CDPLoader.getProjectIds);
    //Common.showNotification("Message:", "Search values have been loaded");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0FQSUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0NEUExvYWRlci50cyIsIndlYnBhY2s6Ly8vLi93d3dyb290L0V4Y2VsQWRkSW4vQ29tbW9uLnRzIiwid2VicGFjazovLy8uL3d3d3Jvb3QvRXhjZWxBZGRJbi9FeGNlbEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0hEQkxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi93d3dyb290L0V4Y2VsQWRkSW4vSG9tZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LFVBQVUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLO0lBQy9CLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDekIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUVELFNBQVMsdUJBQXVCLENBQUMsTUFBTSxFQUFFLE9BQU87SUFDNUMsT0FBTyxDQUFDLFVBQUMsUUFBUSxJQUFLLG9CQUFhLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUNELFNBQVMsdUJBQXVCO0lBQzVCLCtEQUErRDtJQUMvRCwyQkFBMkI7SUFDM0IsdUJBQXVCLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRXZFLHlCQUF5QjtJQUN6Qix1QkFBdUIsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFckUsd0VBQXdFO0FBQzVFLENBQUM7Ozs7Ozs7Ozs7OztBQzVIRCx3QiIsImZpbGUiOiJIb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93d3dyb290L0V4Y2VsQWRkSW4vSG9tZS50c1wiKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBhc3luY0FwaUdldENhbGwoYXBpVVJMLCBjYWxsYmFjaywgLi4uYXJncykge1xyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgYXBpVVJMLCB0cnVlKTtcclxuICAgIHhoci5vbmxvYWQgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDAgJiYgY2FsbGJhY2sgIT0gbnVsbClcclxuICAgICAgICAgICAgYXdhaXQgY2FsbGJhY2soeGhyLnJlc3BvbnNlVGV4dCwgLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN5bmNBcGlHZXRDYWxsKGFwaVVSTCwgY2FsbGJhY2ssIC4uLmFyZ3MpIHtcclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vdmVycmlkZU1pbWVUeXBlKFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIGFwaVVSTCwgZmFsc2UpO1xyXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMCAmJiBjYWxsYmFjayE9bnVsbClcclxuICAgICAgICAgICAgY2FsbGJhY2soeGhyLnJlc3BvbnNlVGV4dCwgLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc3luY0FwaVB1dENhbGwoYXBpVVJMLCByYXdEYXRhLCBjYWxsYmFjaykge1xyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgbGV0IGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkocmF3RGF0YSk7XHJcbiAgICB4aHIub3BlbihcIlBVVFwiLCBhcGlVUkwsIGZhbHNlKTtcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMCAmJiBjYWxsYmFjayE9bnVsbClcclxuICAgICAgICAgICAgY2FsbGJhY2soeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChqc29uRGF0YSk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgQVBJSGFuZGxlciBmcm9tIFwiLi9BUElIYW5kbGVyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0SWRzKGNhbGxiYWNrKSB7XHJcbiAgICBBUElIYW5kbGVyLnN5bmNBcGlHZXRDYWxsKFwiYXBpL2xvYWRhdHRyaWJ1dGV2YWx1ZXM/YXR0clBhdGg9Y2RwOnByb2plY3RzL2lkXCIsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3ROYW1lcyhjYWxsYmFjaykge1xyXG4gICAgQVBJSGFuZGxlci5zeW5jQXBpR2V0Q2FsbChcImFwaS9sb2FkYXR0cmlidXRldmFsdWVzP2F0dHJQYXRoPWNkcDpwcm9qZWN0cy9uYW1lXCIsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhcmlhbnRzQnlQcm9qZWN0TmFtZShjYWxsYmFjaywgcHJvamVjdE5hbWUpIHtcclxuICAgIEFQSUhhbmRsZXIuYXN5bmNBcGlHZXRDYWxsKFwiYXBpL2xvYWR2YXJpYW50c2J5cHJvamVjdG5hbWU/cHJvamVjdE5hbWU9XCIgKyBwcm9qZWN0TmFtZSwgY2FsbGJhY2spO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmVyc2lvbnNCeVByb2plY3RBbmRWYXJpYW50KGNhbGxiYWNrLCBwcm9qZWN0TmFtZSwgdmFyaWFudE5hbWUpIHtcclxuICAgIEFQSUhhbmRsZXIuc3luY0FwaUdldENhbGwoXCJhcGkvbG9hZHZlcnNpb25zYnlwcm9qZWN0YW5kdmFyaWFudD9wcm9qZWN0TmFtZT1cIitwcm9qZWN0TmFtZStcIiZ2YXJpYW50TmFtZT1cIit2YXJpYW50TmFtZSwgY2FsbGJhY2spO1xyXG59XHJcblxyXG4iLCJsZXQgbWVzc2FnZUJhbm5lcjtcclxubGV0IGhkYlVSTCwgY2RwVVJMO1xyXG5leHBvcnQgeyBoZGJVUkwsIGNkcFVSTH07XHJcbmRlY2xhcmUgbGV0IGZhYnJpYzogYW55O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRfdXJscyhjb25maWdfZGF0YSlcclxue1xyXG4gICAgaGRiVVJMID0gY29uZmlnX2RhdGEuaGRiVVJMOyBcclxuICAgIGNkcFVSTCA9IGNvbmZpZ19kYXRhLmNkcFVSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRfc3RyaW5nX3RvX2FycmF5KHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0udHJpbSgpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVNZXNzYWdlQmFubmVyKClcclxue1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXMtTWVzc2FnZUJhbm5lcicpO1xyXG4gICAgbWVzc2FnZUJhbm5lciA9IG5ldyBmYWJyaWMuTWVzc2FnZUJhbm5lcihlbGVtZW50KTtcclxuICAgIG1lc3NhZ2VCYW5uZXIuaGlkZUJhbm5lcigpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBlbXB0eShkYXRhKSB7XHJcbiAgICBpZiAodHlwZW9mIChkYXRhKSA9PSAnbnVtYmVyJyB8fCB0eXBlb2YgKGRhdGEpID09ICdib29sZWFuJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgKGRhdGEpID09ICd1bmRlZmluZWQnIHx8IGRhdGEgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgKGRhdGEubGVuZ3RoKSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBkYXRhLmxlbmd0aCA9PSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8vIHRoaXMgaXMga2luZCBvZiBhIHBhdHRlcm4gZm9yIGhhbmRsaW5nIGNvbnRlbnRzIGluIHRoZSBjdXJyZW50IGV4Y2VsIHNoZWV0XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGNlbEFjdGlvbkhhbmRsZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IEV4Y2VsLnJ1bihhY3Rpb24pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBlcnJvckhhbmRsZXIoZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gZm9yIHRyZWF0aW5nIGVycm9yc1xyXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JIYW5kbGVyKGVycm9yKSB7XHJcbiAgICAvLyBBbHdheXMgYmUgc3VyZSB0byBjYXRjaCBhbnkgYWNjdW11bGF0ZWQgZXJyb3JzIHRoYXQgYnViYmxlIHVwIGZyb20gdGhlIEV4Y2VsLnJ1biBleGVjdXRpb25cclxuICAgIHNob3dOb3RpZmljYXRpb24oXCJFcnJvclwiLCBlcnJvcik7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKTtcclxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIE9mZmljZUV4dGVuc2lvbi5FcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVidWcgaW5mbzogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvci5kZWJ1Z0luZm8pKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGZvciBkaXNwbGF5aW5nIG5vdGlmaWNhdGlvbnNcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24oaGVhZGVyLCBjb250ZW50KSB7XHJcbiAgICAkKFwiI25vdGlmaWNhdGlvbi1oZWFkZXJcIikudGV4dChoZWFkZXIpO1xyXG4gICAgJChcIiNub3RpZmljYXRpb24tYm9keVwiKS50ZXh0KGNvbnRlbnQpO1xyXG4gICAgbWVzc2FnZUJhbm5lci5zaG93QmFubmVyKCk7XHJcbiAgICBtZXNzYWdlQmFubmVyLnRvZ2dsZUV4cGFuc2lvbigpO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBBUElIYW5kbGVyIGZyb20gXCIuL0FQSUhhbmRsZXJcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuL0NvbW1vblwiO1xyXG5cclxuY29uc3QgaW1wb3J0U3RhcnRDb2wgPSAwO1xyXG5jb25zdCBleHBvcnRTdGFydENvbCA9IDM7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUGFyYW1ldGVycyhzZWFyY2hWYWx1ZXMpIHtcclxuICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZVwiLCBcIkRhdGEgaXMgbG9hZGluZyAuLi5cIik7XHJcbiAgICBsZXQgaW1wb3J0UHJvcHMgPSBhd2FpdCBnZXRJbXBvcnRQcm9wTmFtZXMoKTtcclxuICAgIGxldCBwcm9wTmFtZXMgPSBpbXBvcnRQcm9wc1swXTtcclxuICAgIGxldCBpbXBvcnRWYWx1ZUxvY3MgPSBpbXBvcnRQcm9wc1sxXTtcclxuICAgIEFQSUhhbmRsZXIuYXN5bmNBcGlHZXRDYWxsKFwiYXBpL2xvYWRwYXJhbWV0ZXJzP3Byb3BOYW1lcz1cIiArIHByb3BOYW1lcy50b1N0cmluZygpICsgXCImc2VhcmNoVmFsdWVzPVwiICsgc2VhcmNoVmFsdWVzLCBzZXRJbXBvcnRQYXJhbWV0ZXJzLCBpbXBvcnRWYWx1ZUxvY3MpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGFyYW1ldGVycygpIHtcclxuICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZTpcIiwgXCJVcGRhdGluZyB0aGUgY29tcG9uZW50cy4uLiBcIik7XHJcbiAgICBsZXQgZXhwb3J0UGFyYW1zID0gYXdhaXQgZ2V0RXhwb3J0UHJvcE5hbWVzKCk7XHJcbiAgICBsZXQgZXhwb3J0UHJvcE5hbWVzID0gZXhwb3J0UGFyYW1zWzBdO1xyXG4gICAgbGV0IGV4cG9ydFZhbHVlcyA9IGV4cG9ydFBhcmFtc1sxXTtcclxuICAgIEFQSUhhbmRsZXIuc3luY0FwaVB1dENhbGwoXCJhcGkvdXBkYXRlcGFyYW1ldGVycy8/cHJvcE5hbWVzPVwiICsgZXhwb3J0UHJvcE5hbWVzLnRvU3RyaW5nKCkgLGV4cG9ydFZhbHVlcy50b1N0cmluZygpLCBoYW5kbGVFeHBvcnRQYXJhbXNGZWVkYmFjayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUV4cG9ydFBhcmFtc0ZlZWRiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICBsZXQgcmVzcEpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgIGlmIChyZXNwSnNvbi5pc1N1Y2Nlc3NmdWwpIHtcclxuICAgICAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIFwiVXBkYXRpbmcgc3VjY2VlZGVkIVwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlOlwiLCByZXNwSnNvbi5kYXRhKTtcclxufVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEltcG9ydFByb3BOYW1lcygpIHtcclxuICAgIGxldCBwcm9wTmFtZXMgPSBbXTtcclxuICAgIGxldCBsb2NzID0gW107XHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuICAgICAgICBsZXQgcmFuZ2UgPSBzaGVldC5nZXRVc2VkUmFuZ2UoKS5sb2FkKFwicm93Q291bnRcIik7XHJcbiAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgICAgICBsZXQgcm93Q291bnQgPSByYW5nZS5yb3dDb3VudDtcclxuICAgICAgICBsZXQgZmlyc3RQcm9wQ2VsbCA9IHNoZWV0LmdldFVzZWRSYW5nZSgpLmdldENlbGwoMCwgaW1wb3J0U3RhcnRDb2wpLmxvYWQoXCJhZGRyZXNzXCIpO1xyXG4gICAgICAgIGxldCBsYXN0UHJvcENlbGwgPSBzaGVldC5nZXRVc2VkUmFuZ2UoKS5nZXRDZWxsKHJvd0NvdW50IC0gMSwgaW1wb3J0U3RhcnRDb2wpLmxvYWQoXCJhZGRyZXNzXCIpO1xyXG4gICAgICAgIGF3YWl0IGN0eC5zeW5jKCk7XHJcbiAgICAgICAgcmFuZ2UgPSBzaGVldC5nZXRSYW5nZShmaXJzdFByb3BDZWxsLmFkZHJlc3MgKyBcIjpcIiArIGxhc3RQcm9wQ2VsbC5hZGRyZXNzKS5sb2FkKFwidmFsdWVzXCIpO1xyXG4gICAgICAgIGF3YWl0IGN0eC5zeW5jKCk7XHJcbiAgICAgICAgbGV0IHByb3BzID0gcmFuZ2UudmFsdWVzO1xyXG5cclxuICAgICAgICAvL3NlYXJjaCBmb3IgYWxsIHBhcmFtZXRlciBuYW1lc1xyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHJvd0NvdW50OyByb3crKykge1xyXG4gICAgICAgICAgICBsZXQgcHJvcE5hbWUgPSBwcm9wc1tyb3ddWzBdO1xyXG4gICAgICAgICAgICBpZiAocHJvcE5hbWUuaW5kZXhPZihcIi9cIikgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgcHJvcE5hbWVzLnB1c2gocHJvcE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgbG9jcy5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBbcHJvcE5hbWVzLCBsb2NzXSA7XHJcbn1cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRFeHBvcnRQcm9wTmFtZXMoKSB7XHJcbiAgICBsZXQgcHJvcE5hbWVzID0gW107XHJcbiAgICBsZXQgdmFsdWVzID0gW107XHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuICAgICAgICBsZXQgcmFuZ2UgPSBzaGVldC5nZXRVc2VkUmFuZ2UoKS5sb2FkKFwicm93Q291bnRcIik7XHJcbiAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgICAgICBsZXQgcm93Q291bnQgPSByYW5nZS5yb3dDb3VudDtcclxuICAgICAgICBsZXQgZmlyc3RQcm9wQ2VsbCA9IHNoZWV0LmdldFVzZWRSYW5nZSgpLmdldENlbGwoMCwgZXhwb3J0U3RhcnRDb2wpLmxvYWQoXCJhZGRyZXNzXCIpO1xyXG4gICAgICAgIGxldCBsYXN0UHJvcENlbGwgPSBzaGVldC5nZXRVc2VkUmFuZ2UoKS5nZXRDZWxsKHJvd0NvdW50IC0gMSwgZXhwb3J0U3RhcnRDb2wrMSkubG9hZChcImFkZHJlc3NcIik7XHJcbiAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgICAgICByYW5nZSA9IHNoZWV0LmdldFJhbmdlKGZpcnN0UHJvcENlbGwuYWRkcmVzcyArIFwiOlwiICsgbGFzdFByb3BDZWxsLmFkZHJlc3MpLmxvYWQoXCJ2YWx1ZXNcIik7XHJcbiAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgICAgICBsZXQgcHJvcHMgPSByYW5nZS52YWx1ZXM7XHJcblxyXG4gICAgICAgIC8vc2VhcmNoIGZvciBhbGwgcGFyYW1ldGVyIG5hbWVzXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcm93Q291bnQ7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wTmFtZSA9IHByb3BzW3Jvd11bMF07XHJcbiAgICAgICAgICAgIGlmIChwcm9wTmFtZS5pbmRleE9mKFwiL1wiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wTmFtZXMucHVzaChwcm9wTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChwcm9wc1tyb3ddWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFtwcm9wTmFtZXMsIHZhbHVlc107XHJcbn1cclxuXHJcblxyXG4vL3dlIHBhZCB0aGUgaW1wb3J0IHBhcmFtZXRlciBhcnJheSB3aXRoIGVtcHR5IHN0cmluZ3MgYXQgbG9jYXRpb25zIG9mIGVtcHR5IHJvd3NcclxuLy9hbmQgdHVybiBpdCBpbnRvIGNvbHVtbiBhcnJheVxyXG5mdW5jdGlvbiBmb3JtYXRQYXJhbUFycihwYXJhbUFyciwgaW1wb3J0VmFsdWVMb2NzKSB7XHJcbiAgICBsZXQgcGFyYW1zID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltcG9ydFZhbHVlTG9jcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpID4gMCl7XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IGltcG9ydFZhbHVlTG9jc1tpXSAtIGltcG9ydFZhbHVlTG9jc1tpIC0gMV0tMTtcclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gMClcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGlzdGFuY2U7IGorKylcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChbXCJcIl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJhbXMucHVzaChbcGFyYW1BcnJbaV1dKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJhbXM7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldEltcG9ydFBhcmFtZXRlcnMocmVzcG9uc2UsIGltcG9ydFZhbHVlTG9jcykge1xyXG4gICAgYXdhaXQgQ29tbW9uLmV4Y2VsQWN0aW9uSGFuZGxlcihhc3luYyAoY3R4KSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3BKc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgaWYgKHJlc3BKc29uLmlzU3VjY2Vzc2Z1bCkge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1BcnIgPSBmb3JtYXRQYXJhbUFycihyZXNwSnNvbi5kYXRhLCBpbXBvcnRWYWx1ZUxvY3MpO1xyXG4gICAgICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuICAgICAgICAgICAgbGV0IGZpcnN0VmFsdWVDZWxsID0gc2hlZXQuZ2V0VXNlZFJhbmdlKCkuZ2V0Q2VsbChpbXBvcnRWYWx1ZUxvY3NbMF0sIGltcG9ydFN0YXJ0Q29sICsgMSkubG9hZChcImFkZHJlc3NcIik7XHJcbiAgICAgICAgICAgIGxldCBsYXN0VmFsdWVDZWxsID0gc2hlZXQuZ2V0VXNlZFJhbmdlKCkuZ2V0Q2VsbChpbXBvcnRWYWx1ZUxvY3NbaW1wb3J0VmFsdWVMb2NzLmxlbmd0aC0xXSwgaW1wb3J0U3RhcnRDb2wgKyAxKS5sb2FkKFwiYWRkcmVzc1wiKTtcclxuICAgICAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgICAgICAgICAgbGV0IGltcG9ydFJhbmdlID0gc2hlZXQuZ2V0UmFuZ2UoZmlyc3RWYWx1ZUNlbGwuYWRkcmVzcyArIFwiOlwiICsgbGFzdFZhbHVlQ2VsbC5hZGRyZXNzKTtcclxuICAgICAgICAgICAgaW1wb3J0UmFuZ2UudmFsdWVzID0gcGFyYW1BcnI7XHJcbiAgICAgICAgICAgIC8vaW1wb3J0UmFuZ2UuZm9ybWF0LndyYXBUZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy9pbXBvcnRSYW5nZS5mb3JtYXQuYXV0b2ZpdENvbHVtbnMoKTtcclxuICAgICAgICAgICAgLy9pbXBvcnRSYW5nZS5zdHlsZSA9IEV4Y2VsLkJ1aWx0SW5TdHlsZS5uZXV0cmFsO1xyXG4gICAgICAgICAgICAvL2ltcG9ydFJhbmdlLmZvcm1hdC5ob3Jpem9udGFsQWxpZ25tZW50ID0gXCJSaWdodFwiO1xyXG4gICAgICAgICAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2VcIiwgXCJEYXRhIGhhcyBiZWVuIGxvYWRlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlXCIsIHJlc3BKc29uLmRhdGEpO1xyXG4gICAgICAgIGF3YWl0IGN0eC5zeW5jKCk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBBUElIYW5kbGVyIGZyb20gXCIuL0FQSUhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21wb25lbnRJZHMoY2FsbGJhY2spIHtcclxuICAgIEFQSUhhbmRsZXIuc3luY0FwaUdldENhbGwoXCJhcGkvbG9hZGF0dHJpYnV0ZXZhbHVlcz9hdHRyUGF0aD1oZGI6Y29tcG9uZW50cy9jb21wb25lbnRJRFwiLCBjYWxsYmFjayk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3ROYW1lcyhjYWxsYmFjaykge1xyXG4gICAgQVBJSGFuZGxlci5zeW5jQXBpR2V0Q2FsbChcImFwaS9sb2FkYXR0cmlidXRldmFsdWVzP2F0dHJQYXRoPWhkYjpwcm9qZWN0cy9uYW1lXCIsIGNhbGxiYWNrKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBFeGNlbEhhbmRsZXIgZnJvbSBcIi4vRXhjZWxIYW5kbGVyXCI7XHJcbmltcG9ydCAqIGFzIEhEQkxvYWRlciBmcm9tIFwiLi9IREJMb2FkZXJcIjtcclxuaW1wb3J0ICogYXMgQ0RQTG9hZGVyIGZyb20gXCIuL0NEUExvYWRlclwiO1xyXG5cclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuL0NvbW1vblwiO1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAvLyBUaGUgaW5pdGlhbGl6ZSBmdW5jdGlvbiBtdXN0IGJlIHJ1biBlYWNoIHRpbWUgYSBuZXcgcGFnZSBpcyBsb2FkZWQuXHJcbiAgICBPZmZpY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChyZWFzb24pIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBGYWJyaWNVSSBub3RpZmljYXRpb24gbWVjaGFuaXNtIGFuZCBoaWRlIGl0XHJcbiAgICAgICAgICAgIENvbW1vbi5pbml0aWFsaXplTWVzc2FnZUJhbm5lcigpO1xyXG4gICAgICAgICAgICAvL2Rlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICQoXCIjdGVtcGxhdGUtZGVzY3JpcHRpb25cIikudGV4dChcIlRoaXMgc2FtcGxlIGFsbG93cyByZWFkaW5nL3dyaXRpbmcgZnJvbS90byB0aGUgRXhjZWwgc2hlZXQuXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2VhcmNoIGRhdGEgbGlzdHNcclxuICAgICAgICAgICAgLy9jb21wb25lbnQgaWRzIGxpc3RcclxuICAgICAgICAgICAgJCgnI2NvbXBvbmVudC1kYXRhbGlzdC10ZXh0JykudGV4dChcIkNvbXBvbmVudHNcIik7XHJcblxyXG4gICAgICAgICAgICAvL3Byb2plY3QgbmFtZXMgbGlzdFxyXG4gICAgICAgICAgICAkKCcjY2RwLXByb2plY3QtZGF0YWxpc3QtdGV4dCcpLnRleHQoXCJQcm9qZWN0c1wiKTtcclxuICAgICAgICAgICAgJCgnI2NkcC1wcm9qZWN0LXZhcmlhbnQtZGF0YWxpc3QtdGV4dCcpLnRleHQoXCJWYXJpYW50c1wiKTtcclxuICAgICAgICAgICAgJCgnI2NkcC1wcm9qZWN0LXJldmlzaW9uLWRhdGFsaXN0LXRleHQnKS50ZXh0KFwiVmVyc2lvbnNcIik7XHJcblxyXG4gICAgICAgICAgICAvL2xvYWQgZGF0YSBidXR0b25cclxuICAgICAgICAgICAgJCgnI2ZldGNoLWJ1dHRvbi10ZXh0JykudGV4dChcIkxvYWQgZGF0YVwiKTtcclxuICAgICAgICAgICAgJCgnI2ZldGNoLWJ1dHRvbi1kZXNjJykudGV4dChcIkZldGNoIGFsbCB0aGUgY29tcG9uZW50cy5cIik7XHJcbiAgICAgICAgICAgICQoJyNmZXRjaC1idXR0b24nKS5jbGljayhsb2FkUGFyYW1ldGVycyk7XHJcblxyXG4gICAgICAgICAgICAvL3VwZGF0ZSBkYXRhIGJ1dHRvblxyXG4gICAgICAgICAgICAkKCcjcHV0LWJ1dHRvbi10ZXh0JykudGV4dChcIlVwZGF0ZSBkYXRhXCIpO1xyXG4gICAgICAgICAgICAkKCcjcHV0LWJ1dHRvbi1kZXNjJykudGV4dChcIlVwZGF0ZSBjb21wb25lbnRzLlwiKTtcclxuICAgICAgICAgICAgJCgnI3B1dC1idXR0b24nKS5jbGljayh1cGRhdGVQYXJhbWV0ZXJzKTtcclxuXHJcbiAgICAgICAgICAgIC8vYWN0aW9uIGhhbmRsaW5nXHJcbiAgICAgICAgICAgIC8vJCgnI3Byb2plY3ROYW1lc0xpc3QnKS5hdXRvY29tcGxldGUoeyBjaGFuZ2U6IHByb2plY3ROYW1lT25DaGFuZ2UgfSk7XHJcbiAgICAgICAgICAgIC8vJCgnI3Byb2plY3RWYXJpYW50c0xpc3QnKS5hdXRvY29tcGxldGUoeyBjaGFuZ2U6IHZhcmlhbnROYW1lT25DaGFuZ2UgfSk7XHJcbiAgICAgICAgICAgIGFzc2lnblRleHRib3hFdmVudEhhbmRsZXJzKCk7XHJcbiAgICAgICAgICAgIC8vbG9hZCBpbml0aWFsIHZhbHVlcyBmb3Igc2VhcmNoIHRleHQgYm94ZXNcclxuICAgICAgICAgICAgbG9hZEluaXRpYWxTZWFyY2hWYWx1ZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXNzaWduVGV4dGJveEV2ZW50SGFuZGxlcnMoKVxyXG57XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtsaXN0PVwicHJvamVjdE5hbWVzTGlzdFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgcHJvamVjdE5hbWVPbkNoYW5nZSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtsaXN0PVwicHJvamVjdFZhcmlhbnRzTGlzdFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdmFyaWFudE5hbWVPbkNoYW5nZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3ROYW1lT25DaGFuZ2UoZSkge1xyXG4gICAgbGV0IHByb2plY3ROYW1lID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAvL2dldCBsaXN0IG9mIHZhcmlhbnQgbmFtZXNcclxuICAgIENEUExvYWRlci5nZXRWYXJpYW50c0J5UHJvamVjdE5hbWUoKHJlc3BvbnNlKSA9PiB1cGRhdGVUZXh0Ym94KFwicHJvamVjdFZhcmlhbnRzTGlzdFwiLCByZXNwb25zZSksIHByb2plY3ROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFyaWFudE5hbWVPbkNoYW5nZShlKSB7XHJcbiAgICBsZXQgcHJvamVjdE5hbWUgPSAkKCcjcHJvamVjdE5hbWVzJykudmFsKCk7XHJcbiAgICBsZXQgdmFyaWFudE5hbWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIC8vZ2V0IGxpc3Qgb2YgdmFyaWFudCBuYW1lc1xyXG4gICAgQ0RQTG9hZGVyLmdldFZlcnNpb25zQnlQcm9qZWN0QW5kVmFyaWFudCgocmVzcG9uc2UpID0+IHVwZGF0ZVRleHRib3goXCJwcm9qZWN0VmVyc2lvbnNMaXN0XCIsIHJlc3BvbnNlKSwgcHJvamVjdE5hbWUsIHZhcmlhbnROYW1lKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZFBhcmFtZXRlcnMoKSB7XHJcbiAgICBsZXQgY29tcG9uZW50SWQgPSAkKFwiI2NvbXBvbmVudElkc1wiKS52YWwoKTtcclxuICAgIGxldCBwcm9qZWN0TmFtZSA9ICQoJyNwcm9qZWN0TmFtZXMnKS52YWwoKTtcclxuICAgIGxldCB2YXJpYW50TmFtZSA9ICQoXCIjcHJvamVjdFZhcmlhbnRzXCIpLnZhbCgpO1xyXG4gICAgbGV0IHJldmlzaW9uTmFtZSA9ICQoJyNwcm9qZWN0VmVyc2lvbnMnKS52YWwoKTtcclxuICAgIGxldCBzZWFyY2hWYWx1ZXMgPVxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgXCJoZGI6Y29tcG9uZW50cy9jb21wb25lbnRJRD1cIiArIGNvbXBvbmVudElkLFxyXG4gICAgICAgICAgICBcImNkcDpwcm9qZWN0cy9pZD1cIiArIHByb2plY3ROYW1lLFxyXG4gICAgICAgICAgICBcImNkcDp2YXJpYW50cy9pZD1cIiArIHZhcmlhbnROYW1lLFxyXG4gICAgICAgICAgICBcImNkcDp2ZXJzaW9ucy9pZFwiICsgcmV2aXNpb25OYW1lXHJcbiAgICAgICAgXTtcclxuICAgIGF3YWl0IEV4Y2VsSGFuZGxlci5sb2FkUGFyYW1ldGVycyhzZWFyY2hWYWx1ZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQYXJhbWV0ZXJzKCkge1xyXG4gICAgRXhjZWxIYW5kbGVyLnVwZGF0ZVBhcmFtZXRlcnMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVGV4dGJveCh0Ym94SWQsIHJlc3BvbnNlKSB7XHJcbiAgICBsZXQgcmVzcEpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgIGlmIChyZXNwSnNvbi5pc1N1Y2Nlc3NmdWwpXHJcbiAgICB7XHJcbiAgICAgICAgcmVzcEpzb24uZGF0YS5mb3JFYWNoKHZhbHVlID0+IGFkZExpc3RFbnRyeSh0Ym94SWQsIHZhbHVlKSk7XHJcbiAgICAgICAgLy8kKHRib3hJZCkuYXV0b2NvbXBsZXRlKFxyXG4gICAgICAgIC8vICAgIHtcclxuICAgICAgICAvLyAgICAgICAgc291cmNlOiBmdW5jdGlvbiAocmVxdWVzdCwgcmVzcG9uc2UpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cChcIl5cIiArICQudWkuYXV0b2NvbXBsZXRlLmVzY2FwZVJlZ2V4KHJlcXVlc3QudGVybSksIFwiaVwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgIHJlc3BvbnNlKCQuZ3JlcChyZXNwSnNvbi5kYXRhLCBmdW5jdGlvbiAoaXRlbTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXIudGVzdChpdGVtKTtcclxuICAgICAgICAvLyAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAvLyAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgcG9zaXRpb246IHsgbXk6IFwicmlnaHQgY2VudGVyXCIsIGF0OiBcInJpZ2h0IGJvdHRvbVwiIH0sXHJcbiAgICAgICAgLy8gICAgICAgIG1pbkxlbmd0aDogMVxyXG4gICAgICAgIC8vICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIHJlc3BKc29uLmRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRMaXN0RW50cnkodGJveElkLCB2YWx1ZSkge1xyXG4gICAgbGV0IG9wdGlvbk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uTm9kZS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGJveElkKS5hcHBlbmRDaGlsZChvcHRpb25Ob2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q29uZmlnRm9yQXV0b1RleHRib3godGJOYW1lLCBnZXREYXRhKSB7XHJcbiAgICBnZXREYXRhKChyZXNwb25zZSkgPT4gdXBkYXRlVGV4dGJveCh0Yk5hbWUsIHJlc3BvbnNlKSk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZEluaXRpYWxTZWFyY2hWYWx1ZXMoKSB7XHJcbiAgICAvL0NvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZTpcIiwgXCJMb2FkaW5nIHNlYXJjaCB2YWx1ZXNcIik7XHJcbiAgICAvL2dldCBsaXN0IG9mIGNvbXBvbmVudCBpZHNcclxuICAgIHNldENvbmZpZ0ZvckF1dG9UZXh0Ym94KFwiY29tcG9uZW50SWRzTGlzdFwiLCBIREJMb2FkZXIuZ2V0Q29tcG9uZW50SWRzKTtcclxuXHJcbiAgICAvL2dldCBsaXN0IG9mIHByb2plY3QgaWRzXHJcbiAgICBzZXRDb25maWdGb3JBdXRvVGV4dGJveChcInByb2plY3ROYW1lc0xpc3RcIiwgQ0RQTG9hZGVyLmdldFByb2plY3RJZHMpO1xyXG5cclxuICAgIC8vQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlOlwiLCBcIlNlYXJjaCB2YWx1ZXMgaGF2ZSBiZWVuIGxvYWRlZFwiKTtcclxufVxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==