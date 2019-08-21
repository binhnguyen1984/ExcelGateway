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
function getComponentIdsList(callback) {
    APIHandler.syncApiGetCall("api/loadcomponentids", callback);
}
exports.getComponentIdsList = getComponentIdsList;
function getProjectIdsList(callback) {
    APIHandler.syncApiGetCall("api/loadprojectids", callback);
}
exports.getProjectIdsList = getProjectIdsList;
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
                    APIHandler.asyncApiGetCall("api/loadparameters/" + "?propNames=" + propNames.toString() + "&searchValues=" + searchValues, setImportParameters, importValueLocs);
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
                                    importRange.format.wrapText = true;
                                    importRange.format.autofitColumns();
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
            $('#component-datalist-text').text("Comp.ids");
            //project ids list
            $('#project-datalist-text').text("Proj.ids");
            //load data button
            $('#fetch-button-text').text("Load data");
            $('#fetch-button-desc').text("Fetch all the components.");
            $('#fetch-button').click(loadParameters);
            //update data button
            $('#put-button-text').text("Update data");
            $('#put-button-desc').text("Update components.");
            $('#put-button').click(updateParameters);
            loadInitialSearchValues();
        });
    };
})();
function loadParameters() {
    return __awaiter(this, void 0, void 0, function () {
        var componentId, projectId, searchValues;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    componentId = $("#componentIdsList").val();
                    projectId = $("#projectIdsList").val();
                    searchValues = ["components/componentID:" + componentId, "projects/id:" + projectId];
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
function setConfigForAutoTextbox(tbName, getDataApi) {
    getDataApi(function (response) {
        var respJson = JSON.parse(response);
        if (respJson.isSuccessful)
            $(tbName).autocomplete({
                source: function (request, response) {
                    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
                    response($.grep(respJson.data, function (item) {
                        return matcher.test(item);
                    }));
                },
                position: { my: "right center", at: "right bottom" },
                minLength: 1
            });
    });
}
function loadInitialSearchValues() {
    //Common.showNotification("Message:", "Loading search values");
    //get list of component ids
    setConfigForAutoTextbox("#componentIdsList", ExcelHandler.getComponentIdsList);
    //get list of project ids
    setConfigForAutoTextbox("#projectIdsList", ExcelHandler.getProjectIdsList);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0FQSUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi93d3dyb290L0V4Y2VsQWRkSW4vRXhjZWxIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3d3d3Jvb3QvRXhjZWxBZGRJbi9Ib21lLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLFNBQWdCLGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUTtJQUFFLGNBQU87U0FBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFP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QUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ2pGLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxJQUFZO3dCQUNqRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsQ0FBQztnQkFDRCxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUU7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDO2FBQ2YsQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0FBRU4sQ0FBQztBQUNELFNBQVMsdUJBQXVCO0lBQzVCLCtEQUErRDtJQUMvRCwyQkFBMkI7SUFDM0IsdUJBQXVCLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFFL0UseUJBQXlCO0lBQ3pCLHVCQUF1QixDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNFLHdFQUF3RTtBQUM1RSxDQUFDOzs7Ozs7Ozs7Ozs7QUM3RUQsd0IiLCJmaWxlIjoiSG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd3d3cm9vdC9FeGNlbEFkZEluL0hvbWUudHNcIik7XG4iLCJleHBvcnQgZnVuY3Rpb24gYXN5bmNBcGlHZXRDYWxsKGFwaVVSTCwgY2FsbGJhY2ssIC4uLmFyZ3MpIHtcclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vdmVycmlkZU1pbWVUeXBlKFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIGFwaVVSTCwgdHJ1ZSk7XHJcbiAgICB4aHIub25sb2FkID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwICYmIGNhbGxiYWNrICE9IG51bGwpXHJcbiAgICAgICAgICAgIGF3YWl0IGNhbGxiYWNrKHhoci5yZXNwb25zZVRleHQsIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzeW5jQXBpR2V0Q2FsbChhcGlVUkwsY2FsbGJhY2sgKSB7XHJcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCBhcGlVUkwsIGZhbHNlKTtcclxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDAgJiYgY2FsbGJhY2shPW51bGwpXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgfVxyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHN5bmNBcGlQdXRDYWxsKGFwaVVSTCwgcmF3RGF0YSwgY2FsbGJhY2spIHtcclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIGxldCBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KHJhd0RhdGEpO1xyXG4gICAgeGhyLm9wZW4oXCJQVVRcIiwgYXBpVVJMLCBmYWxzZSk7XHJcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDAgJiYgY2FsbGJhY2shPW51bGwpXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgfVxyXG4gICAgeGhyLnNlbmQoanNvbkRhdGEpO1xyXG59XHJcbiIsImxldCBtZXNzYWdlQmFubmVyO1xyXG5sZXQgaGRiVVJMLCBjZHBVUkw7XHJcbmV4cG9ydCB7IGhkYlVSTCwgY2RwVVJMfTtcclxuZGVjbGFyZSBsZXQgZmFicmljOiBhbnk7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldF91cmxzKGNvbmZpZ19kYXRhKVxyXG57XHJcbiAgICBoZGJVUkwgPSBjb25maWdfZGF0YS5oZGJVUkw7IFxyXG4gICAgY2RwVVJMID0gY29uZmlnX2RhdGEuY2RwVVJMO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydF9zdHJpbmdfdG9fYXJyYXkoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS50cmltKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZU1lc3NhZ2VCYW5uZXIoKVxyXG57XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tcy1NZXNzYWdlQmFubmVyJyk7XHJcbiAgICBtZXNzYWdlQmFubmVyID0gbmV3IGZhYnJpYy5NZXNzYWdlQmFubmVyKGVsZW1lbnQpO1xyXG4gICAgbWVzc2FnZUJhbm5lci5oaWRlQmFubmVyKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5KGRhdGEpIHtcclxuICAgIGlmICh0eXBlb2YgKGRhdGEpID09ICdudW1iZXInIHx8IHR5cGVvZiAoZGF0YSkgPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiAoZGF0YSkgPT0gJ3VuZGVmaW5lZCcgfHwgZGF0YSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiAoZGF0YS5sZW5ndGgpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLy8gdGhpcyBpcyBraW5kIG9mIGEgcGF0dGVybiBmb3IgaGFuZGxpbmcgY29udGVudHMgaW4gdGhlIGN1cnJlbnQgZXhjZWwgc2hlZXRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4Y2VsQWN0aW9uSGFuZGxlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgRXhjZWwucnVuKGFjdGlvbik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGVycm9ySGFuZGxlcihlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBmb3IgdHJlYXRpbmcgZXJyb3JzXHJcbmV4cG9ydCBmdW5jdGlvbiBlcnJvckhhbmRsZXIoZXJyb3IpIHtcclxuICAgIC8vIEFsd2F5cyBiZSBzdXJlIHRvIGNhdGNoIGFueSBhY2N1bXVsYXRlZCBlcnJvcnMgdGhhdCBidWJibGUgdXAgZnJvbSB0aGUgRXhjZWwucnVuIGV4ZWN1dGlvblxyXG4gICAgc2hvd05vdGlmaWNhdGlvbihcIkVycm9yXCIsIGVycm9yKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpO1xyXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgT2ZmaWNlRXh0ZW5zaW9uLkVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEZWJ1ZyBpbmZvOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yLmRlYnVnSW5mbykpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gZm9yIGRpc3BsYXlpbmcgbm90aWZpY2F0aW9uc1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbihoZWFkZXIsIGNvbnRlbnQpIHtcclxuICAgICQoXCIjbm90aWZpY2F0aW9uLWhlYWRlclwiKS50ZXh0KGhlYWRlcik7XHJcbiAgICAkKFwiI25vdGlmaWNhdGlvbi1ib2R5XCIpLnRleHQoY29udGVudCk7XHJcbiAgICBtZXNzYWdlQmFubmVyLnNob3dCYW5uZXIoKTtcclxuICAgIG1lc3NhZ2VCYW5uZXIudG9nZ2xlRXhwYW5zaW9uKCk7XHJcbn1cclxuXHJcbiIsImltcG9ydCAqIGFzIEFQSUhhbmRsZXIgZnJvbSBcIi4vQVBJSGFuZGxlclwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4vQ29tbW9uXCI7XHJcblxyXG5jb25zdCBpbXBvcnRTdGFydENvbCA9IDA7XHJcbmNvbnN0IGV4cG9ydFN0YXJ0Q29sID0gMztcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXBvbmVudElkc0xpc3QoY2FsbGJhY2spIHtcclxuICAgIEFQSUhhbmRsZXIuc3luY0FwaUdldENhbGwoXCJhcGkvbG9hZGNvbXBvbmVudGlkc1wiLCBjYWxsYmFjayk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0SWRzTGlzdChjYWxsYmFjaykge1xyXG4gICAgQVBJSGFuZGxlci5zeW5jQXBpR2V0Q2FsbChcImFwaS9sb2FkcHJvamVjdGlkc1wiLCBjYWxsYmFjayk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFBhcmFtZXRlcnMoc2VhcmNoVmFsdWVzKSB7XHJcbiAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2VcIiwgXCJEYXRhIGlzIGxvYWRpbmcgLi4uXCIpO1xyXG4gICAgbGV0IGltcG9ydFByb3BzID0gYXdhaXQgZ2V0SW1wb3J0UHJvcE5hbWVzKCk7XHJcbiAgICBsZXQgcHJvcE5hbWVzID0gaW1wb3J0UHJvcHNbMF07XHJcbiAgICBsZXQgaW1wb3J0VmFsdWVMb2NzID0gaW1wb3J0UHJvcHNbMV07XHJcbiAgICBBUElIYW5kbGVyLmFzeW5jQXBpR2V0Q2FsbChcImFwaS9sb2FkcGFyYW1ldGVycy9cIiArIFwiP3Byb3BOYW1lcz1cIiArIHByb3BOYW1lcy50b1N0cmluZygpICsgXCImc2VhcmNoVmFsdWVzPVwiICsgc2VhcmNoVmFsdWVzLCBzZXRJbXBvcnRQYXJhbWV0ZXJzLCBpbXBvcnRWYWx1ZUxvY3MpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGFyYW1ldGVycygpIHtcclxuICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZTpcIiwgXCJVcGRhdGluZyB0aGUgY29tcG9uZW50cy4uLiBcIik7XHJcbiAgICBsZXQgZXhwb3J0UGFyYW1zID0gYXdhaXQgZ2V0RXhwb3J0UHJvcE5hbWVzKCk7XHJcbiAgICBsZXQgZXhwb3J0UHJvcE5hbWVzID0gZXhwb3J0UGFyYW1zWzBdO1xyXG4gICAgbGV0IGV4cG9ydFZhbHVlcyA9IGV4cG9ydFBhcmFtc1sxXTtcclxuICAgIEFQSUhhbmRsZXIuc3luY0FwaVB1dENhbGwoXCJhcGkvdXBkYXRlcGFyYW1ldGVycy8/cHJvcE5hbWVzPVwiICsgZXhwb3J0UHJvcE5hbWVzLnRvU3RyaW5nKCkgLGV4cG9ydFZhbHVlcy50b1N0cmluZygpLCBoYW5kbGVFeHBvcnRQYXJhbXNGZWVkYmFjayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUV4cG9ydFBhcmFtc0ZlZWRiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICBsZXQgcmVzcEpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgIGlmIChyZXNwSnNvbi5pc1N1Y2Nlc3NmdWwpIHtcclxuICAgICAgICBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIFwiVXBkYXRpbmcgc3VjY2VlZGVkIVwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlOlwiLCByZXNwSnNvbi5kYXRhKTtcclxufVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEltcG9ydFByb3BOYW1lcygpIHtcclxuICAgIGxldCBwcm9wTmFtZXMgPSBbXTtcclxuICAgIGxldCBsb2NzID0gW107XHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuICAgICAgICBsZXQgcmFuZ2UgPSBzaGVldC5nZXRVc2VkUmFuZ2UoKS5sb2FkKFwicm93Q291bnRcIik7XHJcbiAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgICAgICBsZXQgcm93Q291bnQgPSByYW5nZS5yb3dDb3VudDtcclxuICAgICAgICBsZXQgZmlyc3RQcm9wQ2VsbCA9IHNoZWV0LmdldFVzZWRSYW5nZSgpLmdldENlbGwoMCwgaW1wb3J0U3RhcnRDb2wpLmxvYWQoXCJhZGRyZXNzXCIpO1xyXG4gICAgICAgIGxldCBsYXN0UHJvcENlbGwgPSBzaGVldC5nZXRVc2VkUmFuZ2UoKS5nZXRDZWxsKHJvd0NvdW50IC0gMSwgaW1wb3J0U3RhcnRDb2wpLmxvYWQoXCJhZGRyZXNzXCIpO1xyXG4gICAgICAgIGF3YWl0IGN0eC5zeW5jKCk7XHJcbiAgICAgICAgcmFuZ2UgPSBzaGVldC5nZXRSYW5nZShmaXJzdFByb3BDZWxsLmFkZHJlc3MgKyBcIjpcIiArIGxhc3RQcm9wQ2VsbC5hZGRyZXNzKS5sb2FkKFwidmFsdWVzXCIpO1xyXG4gICAgICAgIGF3YWl0IGN0eC5zeW5jKCk7XHJcbiAgICAgICAgbGV0IHByb3BzID0gcmFuZ2UudmFsdWVzO1xyXG5cclxuICAgICAgICAvL3NlYXJjaCBmb3IgYWxsIHBhcmFtZXRlciBuYW1lc1xyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHJvd0NvdW50OyByb3crKykge1xyXG4gICAgICAgICAgICBsZXQgcHJvcE5hbWUgPSBwcm9wc1tyb3ddWzBdO1xyXG4gICAgICAgICAgICBpZiAocHJvcE5hbWUuaW5kZXhPZihcIi9cIikgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgcHJvcE5hbWVzLnB1c2gocHJvcE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgbG9jcy5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBbcHJvcE5hbWVzLCBsb2NzXSA7XHJcbn1cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRFeHBvcnRQcm9wTmFtZXMoKSB7XHJcbiAgICBsZXQgcHJvcE5hbWVzID0gW107XHJcbiAgICBsZXQgdmFsdWVzID0gW107XHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuICAgICAgICBsZXQgcmFuZ2UgPSBzaGVldC5nZXRVc2VkUmFuZ2UoKS5sb2FkKFwicm93Q291bnRcIik7XHJcbiAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgICAgICBsZXQgcm93Q291bnQgPSByYW5nZS5yb3dDb3VudDtcclxuICAgICAgICBsZXQgZmlyc3RQcm9wQ2VsbCA9IHNoZWV0LmdldFVzZWRSYW5nZSgpLmdldENlbGwoMCwgZXhwb3J0U3RhcnRDb2wpLmxvYWQoXCJhZGRyZXNzXCIpO1xyXG4gICAgICAgIGxldCBsYXN0UHJvcENlbGwgPSBzaGVldC5nZXRVc2VkUmFuZ2UoKS5nZXRDZWxsKHJvd0NvdW50IC0gMSwgZXhwb3J0U3RhcnRDb2wrMSkubG9hZChcImFkZHJlc3NcIik7XHJcbiAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgICAgICByYW5nZSA9IHNoZWV0LmdldFJhbmdlKGZpcnN0UHJvcENlbGwuYWRkcmVzcyArIFwiOlwiICsgbGFzdFByb3BDZWxsLmFkZHJlc3MpLmxvYWQoXCJ2YWx1ZXNcIik7XHJcbiAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgICAgICBsZXQgcHJvcHMgPSByYW5nZS52YWx1ZXM7XHJcblxyXG4gICAgICAgIC8vc2VhcmNoIGZvciBhbGwgcGFyYW1ldGVyIG5hbWVzXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcm93Q291bnQ7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wTmFtZSA9IHByb3BzW3Jvd11bMF07XHJcbiAgICAgICAgICAgIGlmIChwcm9wTmFtZS5pbmRleE9mKFwiL1wiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wTmFtZXMucHVzaChwcm9wTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChwcm9wc1tyb3ddWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFtwcm9wTmFtZXMsIHZhbHVlc107XHJcbn1cclxuXHJcblxyXG4vL3dlIHBhZCB0aGUgaW1wb3J0IHBhcmFtZXRlciBhcnJheSB3aXRoIGVtcHR5IHN0cmluZ3MgYXQgbG9jYXRpb25zIG9mIGVtcHR5IHJvd3NcclxuLy9hbmQgdHVybiBpdCBpbnRvIGNvbHVtbiBhcnJheVxyXG5mdW5jdGlvbiBmb3JtYXRQYXJhbUFycihwYXJhbUFyciwgaW1wb3J0VmFsdWVMb2NzKSB7XHJcbiAgICBsZXQgcGFyYW1zID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltcG9ydFZhbHVlTG9jcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpID4gMCl7XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IGltcG9ydFZhbHVlTG9jc1tpXSAtIGltcG9ydFZhbHVlTG9jc1tpIC0gMV0tMTtcclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gMClcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGlzdGFuY2U7IGorKylcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChbXCJcIl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJhbXMucHVzaChbcGFyYW1BcnJbaV1dKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJhbXM7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldEltcG9ydFBhcmFtZXRlcnMocmVzcG9uc2UsIGltcG9ydFZhbHVlTG9jcykge1xyXG4gICAgYXdhaXQgQ29tbW9uLmV4Y2VsQWN0aW9uSGFuZGxlcihhc3luYyAoY3R4KSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3BKc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgaWYgKHJlc3BKc29uLmlzU3VjY2Vzc2Z1bCkge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1BcnIgPSBmb3JtYXRQYXJhbUFycihyZXNwSnNvbi5kYXRhLCBpbXBvcnRWYWx1ZUxvY3MpO1xyXG4gICAgICAgICAgICBsZXQgc2hlZXQgPSBjdHgud29ya2Jvb2sud29ya3NoZWV0cy5nZXRBY3RpdmVXb3Jrc2hlZXQoKTtcclxuICAgICAgICAgICAgbGV0IGZpcnN0VmFsdWVDZWxsID0gc2hlZXQuZ2V0VXNlZFJhbmdlKCkuZ2V0Q2VsbChpbXBvcnRWYWx1ZUxvY3NbMF0sIGltcG9ydFN0YXJ0Q29sICsgMSkubG9hZChcImFkZHJlc3NcIik7XHJcbiAgICAgICAgICAgIGxldCBsYXN0VmFsdWVDZWxsID0gc2hlZXQuZ2V0VXNlZFJhbmdlKCkuZ2V0Q2VsbChpbXBvcnRWYWx1ZUxvY3NbaW1wb3J0VmFsdWVMb2NzLmxlbmd0aC0xXSwgaW1wb3J0U3RhcnRDb2wgKyAxKS5sb2FkKFwiYWRkcmVzc1wiKTtcclxuICAgICAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgICAgICAgICAgbGV0IGltcG9ydFJhbmdlID0gc2hlZXQuZ2V0UmFuZ2UoZmlyc3RWYWx1ZUNlbGwuYWRkcmVzcyArIFwiOlwiICsgbGFzdFZhbHVlQ2VsbC5hZGRyZXNzKTtcclxuICAgICAgICAgICAgaW1wb3J0UmFuZ2UudmFsdWVzID0gcGFyYW1BcnI7XHJcbiAgICAgICAgICAgIGltcG9ydFJhbmdlLmZvcm1hdC53cmFwVGV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgIGltcG9ydFJhbmdlLmZvcm1hdC5hdXRvZml0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICAvL2ltcG9ydFJhbmdlLnN0eWxlID0gRXhjZWwuQnVpbHRJblN0eWxlLm5ldXRyYWw7XHJcbiAgICAgICAgICAgIC8vaW1wb3J0UmFuZ2UuZm9ybWF0Lmhvcml6b250YWxBbGlnbm1lbnQgPSBcIlJpZ2h0XCI7XHJcbiAgICAgICAgICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZVwiLCBcIkRhdGEgaGFzIGJlZW4gbG9hZGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2VcIiwgcmVzcEpzb24uZGF0YSk7XHJcbiAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIEV4Y2VsSGFuZGxlciBmcm9tIFwiLi9FeGNlbEhhbmRsZXJcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuL0NvbW1vblwiO1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAvLyBUaGUgaW5pdGlhbGl6ZSBmdW5jdGlvbiBtdXN0IGJlIHJ1biBlYWNoIHRpbWUgYSBuZXcgcGFnZSBpcyBsb2FkZWQuXHJcbiAgICBPZmZpY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChyZWFzb24pIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBGYWJyaWNVSSBub3RpZmljYXRpb24gbWVjaGFuaXNtIGFuZCBoaWRlIGl0XHJcbiAgICAgICAgICAgIENvbW1vbi5pbml0aWFsaXplTWVzc2FnZUJhbm5lcigpO1xyXG4gICAgICAgICAgICAvL2Rlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICQoXCIjdGVtcGxhdGUtZGVzY3JpcHRpb25cIikudGV4dChcIlRoaXMgc2FtcGxlIGFsbG93cyByZWFkaW5nL3dyaXRpbmcgZnJvbS90byB0aGUgRXhjZWwgc2hlZXQuXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2VhcmNoIGRhdGEgbGlzdHNcclxuICAgICAgICAgICAgLy9jb21wb25lbnQgaWRzIGxpc3RcclxuICAgICAgICAgICAgJCgnI2NvbXBvbmVudC1kYXRhbGlzdC10ZXh0JykudGV4dChcIkNvbXAuaWRzXCIpO1xyXG5cclxuICAgICAgICAgICAgLy9wcm9qZWN0IGlkcyBsaXN0XHJcbiAgICAgICAgICAgICQoJyNwcm9qZWN0LWRhdGFsaXN0LXRleHQnKS50ZXh0KFwiUHJvai5pZHNcIik7XHJcblxyXG4gICAgICAgICAgICAvL2xvYWQgZGF0YSBidXR0b25cclxuICAgICAgICAgICAgJCgnI2ZldGNoLWJ1dHRvbi10ZXh0JykudGV4dChcIkxvYWQgZGF0YVwiKTtcclxuICAgICAgICAgICAgJCgnI2ZldGNoLWJ1dHRvbi1kZXNjJykudGV4dChcIkZldGNoIGFsbCB0aGUgY29tcG9uZW50cy5cIik7XHJcbiAgICAgICAgICAgICQoJyNmZXRjaC1idXR0b24nKS5jbGljayhsb2FkUGFyYW1ldGVycyk7XHJcblxyXG4gICAgICAgICAgICAvL3VwZGF0ZSBkYXRhIGJ1dHRvblxyXG4gICAgICAgICAgICAkKCcjcHV0LWJ1dHRvbi10ZXh0JykudGV4dChcIlVwZGF0ZSBkYXRhXCIpO1xyXG4gICAgICAgICAgICAkKCcjcHV0LWJ1dHRvbi1kZXNjJykudGV4dChcIlVwZGF0ZSBjb21wb25lbnRzLlwiKTtcclxuICAgICAgICAgICAgJCgnI3B1dC1idXR0b24nKS5jbGljayh1cGRhdGVQYXJhbWV0ZXJzKTtcclxuXHJcbiAgICAgICAgICAgIGxvYWRJbml0aWFsU2VhcmNoVmFsdWVzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufSkoKTtcclxuXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZFBhcmFtZXRlcnMoKSB7XHJcbiAgICBsZXQgY29tcG9uZW50SWQgPSAkKFwiI2NvbXBvbmVudElkc0xpc3RcIikudmFsKCk7XHJcbiAgICBsZXQgcHJvamVjdElkID0gJChcIiNwcm9qZWN0SWRzTGlzdFwiKS52YWwoKTtcclxuICAgIGxldCBzZWFyY2hWYWx1ZXMgPSBbXCJjb21wb25lbnRzL2NvbXBvbmVudElEOlwiICsgY29tcG9uZW50SWQsIFwicHJvamVjdHMvaWQ6XCIrcHJvamVjdElkXTtcclxuICAgIGF3YWl0IEV4Y2VsSGFuZGxlci5sb2FkUGFyYW1ldGVycyhzZWFyY2hWYWx1ZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQYXJhbWV0ZXJzKCkge1xyXG4gICAgRXhjZWxIYW5kbGVyLnVwZGF0ZVBhcmFtZXRlcnMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q29uZmlnRm9yQXV0b1RleHRib3godGJOYW1lLCBnZXREYXRhQXBpKSB7XHJcbiAgICBnZXREYXRhQXBpKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGxldCByZXNwSnNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgIGlmIChyZXNwSnNvbi5pc1N1Y2Nlc3NmdWwpXHJcbiAgICAgICAgJCh0Yk5hbWUpLmF1dG9jb21wbGV0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBmdW5jdGlvbiAocmVxdWVzdCwgcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoXCJeXCIgKyAkLnVpLmF1dG9jb21wbGV0ZS5lc2NhcGVSZWdleChyZXF1ZXN0LnRlcm0pLCBcImlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UoJC5ncmVwKHJlc3BKc29uLmRhdGEsIGZ1bmN0aW9uIChpdGVtOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXIudGVzdChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgbXk6IFwicmlnaHQgY2VudGVyXCIsIGF0OiBcInJpZ2h0IGJvdHRvbVwiIH0sXHJcbiAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxufVxyXG5mdW5jdGlvbiBsb2FkSW5pdGlhbFNlYXJjaFZhbHVlcygpIHtcclxuICAgIC8vQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlOlwiLCBcIkxvYWRpbmcgc2VhcmNoIHZhbHVlc1wiKTtcclxuICAgIC8vZ2V0IGxpc3Qgb2YgY29tcG9uZW50IGlkc1xyXG4gICAgc2V0Q29uZmlnRm9yQXV0b1RleHRib3goXCIjY29tcG9uZW50SWRzTGlzdFwiLCBFeGNlbEhhbmRsZXIuZ2V0Q29tcG9uZW50SWRzTGlzdCk7XHJcblxyXG4gICAgLy9nZXQgbGlzdCBvZiBwcm9qZWN0IGlkc1xyXG4gICAgc2V0Q29uZmlnRm9yQXV0b1RleHRib3goXCIjcHJvamVjdElkc0xpc3RcIiwgRXhjZWxIYW5kbGVyLmdldFByb2plY3RJZHNMaXN0KTtcclxuICAgIC8vQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlOlwiLCBcIlNlYXJjaCB2YWx1ZXMgaGF2ZSBiZWVuIGxvYWRlZFwiKTtcclxufVxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==