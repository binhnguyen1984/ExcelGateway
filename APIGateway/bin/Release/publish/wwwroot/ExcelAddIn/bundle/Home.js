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
function getHdbComponentIdsList(callback) {
    APIHandler.syncApiGetCall("api/loadhdbcomponentids", callback);
}
exports.getHdbComponentIdsList = getHdbComponentIdsList;
function getCdpProjectIdsList(callback) {
    APIHandler.syncApiGetCall("api/loadcdpprojectids", callback);
}
exports.getCdpProjectIdsList = getCdpProjectIdsList;
function getHdbProjectNamesList(callback) {
    APIHandler.syncApiGetCall("api/loadhdbprojectnames", callback);
}
exports.getHdbProjectNamesList = getHdbProjectNamesList;
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
            $('#cdp-project-datalist-text').text("Proj.ids");
            $('#hdb-project-datalist-text').text("Proj.Nas");
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
        var componentId, projectId, projectName, searchValues;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    componentId = $("#componentIdsList").val();
                    projectId = $("#projectIdsList").val();
                    projectName = $('#projectNamesList').val();
                    searchValues = ["hdb:components/componentID=" + componentId, "cdp:projects/id=" + projectId, "hdb:projects/name=" + projectName];
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
    setConfigForAutoTextbox("#componentIdsList", ExcelHandler.getHdbComponentIdsList);
    //get list of project ids
    setConfigForAutoTextbox("#projectIdsList", ExcelHandler.getCdpProjectIdsList);
    //get list of hdb project names
    setConfigForAutoTextbox("#projectNamesList", ExcelHandler.getHdbProjectNamesList);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0FQSUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi93d3dyb290L0V4Y2VsQWRkSW4vRXhjZWxIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3d3d3Jvb3QvRXhjZWxBZGRJbi9Ib21lLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLFNBQWdCLGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUTtJQUFFLGNBQU87U0FBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFP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LElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsSUFBSSxRQUFRLENBQUMsWUFBWTtZQUN6QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUNsQjtnQkFDSSxNQUFNLEVBQUUsVUFBVSxPQUFPLEVBQUUsUUFBUTtvQkFDL0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ2pGLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxJQUFZO3dCQUNqRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsQ0FBQztnQkFDRCxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUU7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDO2FBQ2YsQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0FBRU4sQ0FBQztBQUNELFNBQVMsdUJBQXVCO0lBQzVCLCtEQUErRDtJQUMvRCwyQkFBMkI7SUFDM0IsdUJBQXVCLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFFbEYseUJBQXlCO0lBQ3pCLHVCQUF1QixDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRTlFLCtCQUErQjtJQUMvQix1QkFBdUIsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUdsRix3RUFBd0U7QUFDNUUsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcEZELHdCIiwiZmlsZSI6IkhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3d3d3Jvb3QvRXhjZWxBZGRJbi9Ib21lLnRzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGFzeW5jQXBpR2V0Q2FsbChhcGlVUkwsIGNhbGxiYWNrLCAuLi5hcmdzKSB7XHJcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCBhcGlVUkwsIHRydWUpO1xyXG4gICAgeGhyLm9ubG9hZCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMCAmJiBjYWxsYmFjayAhPSBudWxsKVxyXG4gICAgICAgICAgICBhd2FpdCBjYWxsYmFjayh4aHIucmVzcG9uc2VUZXh0LCAuLi5hcmdzKTtcclxuICAgIH1cclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3luY0FwaUdldENhbGwoYXBpVVJMLGNhbGxiYWNrICkge1xyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgYXBpVVJMLCBmYWxzZSk7XHJcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwICYmIGNhbGxiYWNrIT1udWxsKVxyXG4gICAgICAgICAgICBjYWxsYmFjayh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgIH1cclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzeW5jQXBpUHV0Q2FsbChhcGlVUkwsIHJhd0RhdGEsIGNhbGxiYWNrKSB7XHJcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICBsZXQganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeShyYXdEYXRhKTtcclxuICAgIHhoci5vcGVuKFwiUFVUXCIsIGFwaVVSTCwgZmFsc2UpO1xyXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwICYmIGNhbGxiYWNrIT1udWxsKVxyXG4gICAgICAgICAgICBjYWxsYmFjayh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgIH1cclxuICAgIHhoci5zZW5kKGpzb25EYXRhKTtcclxufVxyXG4iLCJsZXQgbWVzc2FnZUJhbm5lcjtcclxubGV0IGhkYlVSTCwgY2RwVVJMO1xyXG5leHBvcnQgeyBoZGJVUkwsIGNkcFVSTH07XHJcbmRlY2xhcmUgbGV0IGZhYnJpYzogYW55O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRfdXJscyhjb25maWdfZGF0YSlcclxue1xyXG4gICAgaGRiVVJMID0gY29uZmlnX2RhdGEuaGRiVVJMOyBcclxuICAgIGNkcFVSTCA9IGNvbmZpZ19kYXRhLmNkcFVSTDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRfc3RyaW5nX3RvX2FycmF5KHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0udHJpbSgpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVNZXNzYWdlQmFubmVyKClcclxue1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXMtTWVzc2FnZUJhbm5lcicpO1xyXG4gICAgbWVzc2FnZUJhbm5lciA9IG5ldyBmYWJyaWMuTWVzc2FnZUJhbm5lcihlbGVtZW50KTtcclxuICAgIG1lc3NhZ2VCYW5uZXIuaGlkZUJhbm5lcigpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBlbXB0eShkYXRhKSB7XHJcbiAgICBpZiAodHlwZW9mIChkYXRhKSA9PSAnbnVtYmVyJyB8fCB0eXBlb2YgKGRhdGEpID09ICdib29sZWFuJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgKGRhdGEpID09ICd1bmRlZmluZWQnIHx8IGRhdGEgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgKGRhdGEubGVuZ3RoKSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBkYXRhLmxlbmd0aCA9PSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8vIHRoaXMgaXMga2luZCBvZiBhIHBhdHRlcm4gZm9yIGhhbmRsaW5nIGNvbnRlbnRzIGluIHRoZSBjdXJyZW50IGV4Y2VsIHNoZWV0XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGNlbEFjdGlvbkhhbmRsZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IEV4Y2VsLnJ1bihhY3Rpb24pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBlcnJvckhhbmRsZXIoZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gZm9yIHRyZWF0aW5nIGVycm9yc1xyXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JIYW5kbGVyKGVycm9yKSB7XHJcbiAgICAvLyBBbHdheXMgYmUgc3VyZSB0byBjYXRjaCBhbnkgYWNjdW11bGF0ZWQgZXJyb3JzIHRoYXQgYnViYmxlIHVwIGZyb20gdGhlIEV4Y2VsLnJ1biBleGVjdXRpb25cclxuICAgIHNob3dOb3RpZmljYXRpb24oXCJFcnJvclwiLCBlcnJvcik7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKTtcclxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIE9mZmljZUV4dGVuc2lvbi5FcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVidWcgaW5mbzogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvci5kZWJ1Z0luZm8pKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGZvciBkaXNwbGF5aW5nIG5vdGlmaWNhdGlvbnNcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24oaGVhZGVyLCBjb250ZW50KSB7XHJcbiAgICAkKFwiI25vdGlmaWNhdGlvbi1oZWFkZXJcIikudGV4dChoZWFkZXIpO1xyXG4gICAgJChcIiNub3RpZmljYXRpb24tYm9keVwiKS50ZXh0KGNvbnRlbnQpO1xyXG4gICAgbWVzc2FnZUJhbm5lci5zaG93QmFubmVyKCk7XHJcbiAgICBtZXNzYWdlQmFubmVyLnRvZ2dsZUV4cGFuc2lvbigpO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBBUElIYW5kbGVyIGZyb20gXCIuL0FQSUhhbmRsZXJcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuL0NvbW1vblwiO1xyXG5cclxuY29uc3QgaW1wb3J0U3RhcnRDb2wgPSAwO1xyXG5jb25zdCBleHBvcnRTdGFydENvbCA9IDM7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRIZGJDb21wb25lbnRJZHNMaXN0KGNhbGxiYWNrKSB7XHJcbiAgICBBUElIYW5kbGVyLnN5bmNBcGlHZXRDYWxsKFwiYXBpL2xvYWRoZGJjb21wb25lbnRpZHNcIiwgY2FsbGJhY2spO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2RwUHJvamVjdElkc0xpc3QoY2FsbGJhY2spIHtcclxuICAgIEFQSUhhbmRsZXIuc3luY0FwaUdldENhbGwoXCJhcGkvbG9hZGNkcHByb2plY3RpZHNcIiwgY2FsbGJhY2spO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGRiUHJvamVjdE5hbWVzTGlzdChjYWxsYmFjaykge1xyXG4gICAgQVBJSGFuZGxlci5zeW5jQXBpR2V0Q2FsbChcImFwaS9sb2FkaGRicHJvamVjdG5hbWVzXCIsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUGFyYW1ldGVycyhzZWFyY2hWYWx1ZXMpIHtcclxuICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZVwiLCBcIkRhdGEgaXMgbG9hZGluZyAuLi5cIik7XHJcbiAgICBsZXQgaW1wb3J0UHJvcHMgPSBhd2FpdCBnZXRJbXBvcnRQcm9wTmFtZXMoKTtcclxuICAgIGxldCBwcm9wTmFtZXMgPSBpbXBvcnRQcm9wc1swXTtcclxuICAgIGxldCBpbXBvcnRWYWx1ZUxvY3MgPSBpbXBvcnRQcm9wc1sxXTtcclxuICAgIEFQSUhhbmRsZXIuYXN5bmNBcGlHZXRDYWxsKFwiYXBpL2xvYWRwYXJhbWV0ZXJzL1wiICsgXCI/cHJvcE5hbWVzPVwiICsgcHJvcE5hbWVzLnRvU3RyaW5nKCkgKyBcIiZzZWFyY2hWYWx1ZXM9XCIgKyBzZWFyY2hWYWx1ZXMsIHNldEltcG9ydFBhcmFtZXRlcnMsIGltcG9ydFZhbHVlTG9jcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQYXJhbWV0ZXJzKCkge1xyXG4gICAgQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlOlwiLCBcIlVwZGF0aW5nIHRoZSBjb21wb25lbnRzLi4uIFwiKTtcclxuICAgIGxldCBleHBvcnRQYXJhbXMgPSBhd2FpdCBnZXRFeHBvcnRQcm9wTmFtZXMoKTtcclxuICAgIGxldCBleHBvcnRQcm9wTmFtZXMgPSBleHBvcnRQYXJhbXNbMF07XHJcbiAgICBsZXQgZXhwb3J0VmFsdWVzID0gZXhwb3J0UGFyYW1zWzFdO1xyXG4gICAgQVBJSGFuZGxlci5zeW5jQXBpUHV0Q2FsbChcImFwaS91cGRhdGVwYXJhbWV0ZXJzLz9wcm9wTmFtZXM9XCIgKyBleHBvcnRQcm9wTmFtZXMudG9TdHJpbmcoKSAsZXhwb3J0VmFsdWVzLnRvU3RyaW5nKCksIGhhbmRsZUV4cG9ydFBhcmFtc0ZlZWRiYWNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRXhwb3J0UGFyYW1zRmVlZGJhY2socmVzcG9uc2UpIHtcclxuICAgIGxldCByZXNwSnNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgaWYgKHJlc3BKc29uLmlzU3VjY2Vzc2Z1bCkge1xyXG4gICAgICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZTpcIiwgXCJVcGRhdGluZyBzdWNjZWVkZWQhXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIHJlc3BKc29uLmRhdGEpO1xyXG59XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0SW1wb3J0UHJvcE5hbWVzKCkge1xyXG4gICAgbGV0IHByb3BOYW1lcyA9IFtdO1xyXG4gICAgbGV0IGxvY3MgPSBbXTtcclxuICAgIGF3YWl0IENvbW1vbi5leGNlbEFjdGlvbkhhbmRsZXIoYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgICAgIGxldCBzaGVldCA9IGN0eC53b3JrYm9vay53b3Jrc2hlZXRzLmdldEFjdGl2ZVdvcmtzaGVldCgpO1xyXG4gICAgICAgIGxldCByYW5nZSA9IHNoZWV0LmdldFVzZWRSYW5nZSgpLmxvYWQoXCJyb3dDb3VudFwiKTtcclxuICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgIGxldCByb3dDb3VudCA9IHJhbmdlLnJvd0NvdW50O1xyXG4gICAgICAgIGxldCBmaXJzdFByb3BDZWxsID0gc2hlZXQuZ2V0VXNlZFJhbmdlKCkuZ2V0Q2VsbCgwLCBpbXBvcnRTdGFydENvbCkubG9hZChcImFkZHJlc3NcIik7XHJcbiAgICAgICAgbGV0IGxhc3RQcm9wQ2VsbCA9IHNoZWV0LmdldFVzZWRSYW5nZSgpLmdldENlbGwocm93Q291bnQgLSAxLCBpbXBvcnRTdGFydENvbCkubG9hZChcImFkZHJlc3NcIik7XHJcbiAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgICAgICByYW5nZSA9IHNoZWV0LmdldFJhbmdlKGZpcnN0UHJvcENlbGwuYWRkcmVzcyArIFwiOlwiICsgbGFzdFByb3BDZWxsLmFkZHJlc3MpLmxvYWQoXCJ2YWx1ZXNcIik7XHJcbiAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgICAgICBsZXQgcHJvcHMgPSByYW5nZS52YWx1ZXM7XHJcblxyXG4gICAgICAgIC8vc2VhcmNoIGZvciBhbGwgcGFyYW1ldGVyIG5hbWVzXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcm93Q291bnQ7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wTmFtZSA9IHByb3BzW3Jvd11bMF07XHJcbiAgICAgICAgICAgIGlmIChwcm9wTmFtZS5pbmRleE9mKFwiL1wiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wTmFtZXMucHVzaChwcm9wTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBsb2NzLnB1c2gocm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFtwcm9wTmFtZXMsIGxvY3NdIDtcclxufVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEV4cG9ydFByb3BOYW1lcygpIHtcclxuICAgIGxldCBwcm9wTmFtZXMgPSBbXTtcclxuICAgIGxldCB2YWx1ZXMgPSBbXTtcclxuICAgIGF3YWl0IENvbW1vbi5leGNlbEFjdGlvbkhhbmRsZXIoYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgICAgIGxldCBzaGVldCA9IGN0eC53b3JrYm9vay53b3Jrc2hlZXRzLmdldEFjdGl2ZVdvcmtzaGVldCgpO1xyXG4gICAgICAgIGxldCByYW5nZSA9IHNoZWV0LmdldFVzZWRSYW5nZSgpLmxvYWQoXCJyb3dDb3VudFwiKTtcclxuICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgIGxldCByb3dDb3VudCA9IHJhbmdlLnJvd0NvdW50O1xyXG4gICAgICAgIGxldCBmaXJzdFByb3BDZWxsID0gc2hlZXQuZ2V0VXNlZFJhbmdlKCkuZ2V0Q2VsbCgwLCBleHBvcnRTdGFydENvbCkubG9hZChcImFkZHJlc3NcIik7XHJcbiAgICAgICAgbGV0IGxhc3RQcm9wQ2VsbCA9IHNoZWV0LmdldFVzZWRSYW5nZSgpLmdldENlbGwocm93Q291bnQgLSAxLCBleHBvcnRTdGFydENvbCsxKS5sb2FkKFwiYWRkcmVzc1wiKTtcclxuICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgIHJhbmdlID0gc2hlZXQuZ2V0UmFuZ2UoZmlyc3RQcm9wQ2VsbC5hZGRyZXNzICsgXCI6XCIgKyBsYXN0UHJvcENlbGwuYWRkcmVzcykubG9hZChcInZhbHVlc1wiKTtcclxuICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgIGxldCBwcm9wcyA9IHJhbmdlLnZhbHVlcztcclxuXHJcbiAgICAgICAgLy9zZWFyY2ggZm9yIGFsbCBwYXJhbWV0ZXIgbmFtZXNcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dDb3VudDsgcm93KyspIHtcclxuICAgICAgICAgICAgbGV0IHByb3BOYW1lID0gcHJvcHNbcm93XVswXTtcclxuICAgICAgICAgICAgaWYgKHByb3BOYW1lLmluZGV4T2YoXCIvXCIpID49IDApIHtcclxuICAgICAgICAgICAgICAgIHByb3BOYW1lcy5wdXNoKHByb3BOYW1lKTtcclxuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHByb3BzW3Jvd11bMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gW3Byb3BOYW1lcywgdmFsdWVzXTtcclxufVxyXG5cclxuXHJcbi8vd2UgcGFkIHRoZSBpbXBvcnQgcGFyYW1ldGVyIGFycmF5IHdpdGggZW1wdHkgc3RyaW5ncyBhdCBsb2NhdGlvbnMgb2YgZW1wdHkgcm93c1xyXG4vL2FuZCB0dXJuIGl0IGludG8gY29sdW1uIGFycmF5XHJcbmZ1bmN0aW9uIGZvcm1hdFBhcmFtQXJyKHBhcmFtQXJyLCBpbXBvcnRWYWx1ZUxvY3MpIHtcclxuICAgIGxldCBwYXJhbXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1wb3J0VmFsdWVMb2NzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgPiAwKXtcclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gaW1wb3J0VmFsdWVMb2NzW2ldIC0gaW1wb3J0VmFsdWVMb2NzW2kgLSAxXS0xO1xyXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiAwKVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkaXN0YW5jZTsgaisrKVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKFtcIlwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmFtcy5wdXNoKFtwYXJhbUFycltpXV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcmFtcztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2V0SW1wb3J0UGFyYW1ldGVycyhyZXNwb25zZSwgaW1wb3J0VmFsdWVMb2NzKSB7XHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBsZXQgcmVzcEpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICBpZiAocmVzcEpzb24uaXNTdWNjZXNzZnVsKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbUFyciA9IGZvcm1hdFBhcmFtQXJyKHJlc3BKc29uLmRhdGEsIGltcG9ydFZhbHVlTG9jcyk7XHJcbiAgICAgICAgICAgIGxldCBzaGVldCA9IGN0eC53b3JrYm9vay53b3Jrc2hlZXRzLmdldEFjdGl2ZVdvcmtzaGVldCgpO1xyXG4gICAgICAgICAgICBsZXQgZmlyc3RWYWx1ZUNlbGwgPSBzaGVldC5nZXRVc2VkUmFuZ2UoKS5nZXRDZWxsKGltcG9ydFZhbHVlTG9jc1swXSwgaW1wb3J0U3RhcnRDb2wgKyAxKS5sb2FkKFwiYWRkcmVzc1wiKTtcclxuICAgICAgICAgICAgbGV0IGxhc3RWYWx1ZUNlbGwgPSBzaGVldC5nZXRVc2VkUmFuZ2UoKS5nZXRDZWxsKGltcG9ydFZhbHVlTG9jc1tpbXBvcnRWYWx1ZUxvY3MubGVuZ3RoLTFdLCBpbXBvcnRTdGFydENvbCArIDEpLmxvYWQoXCJhZGRyZXNzXCIpO1xyXG4gICAgICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgICAgICBsZXQgaW1wb3J0UmFuZ2UgPSBzaGVldC5nZXRSYW5nZShmaXJzdFZhbHVlQ2VsbC5hZGRyZXNzICsgXCI6XCIgKyBsYXN0VmFsdWVDZWxsLmFkZHJlc3MpO1xyXG4gICAgICAgICAgICBpbXBvcnRSYW5nZS52YWx1ZXMgPSBwYXJhbUFycjtcclxuICAgICAgICAgICAgLy9pbXBvcnRSYW5nZS5mb3JtYXQud3JhcFRleHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAvL2ltcG9ydFJhbmdlLmZvcm1hdC5hdXRvZml0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICAvL2ltcG9ydFJhbmdlLnN0eWxlID0gRXhjZWwuQnVpbHRJblN0eWxlLm5ldXRyYWw7XHJcbiAgICAgICAgICAgIC8vaW1wb3J0UmFuZ2UuZm9ybWF0Lmhvcml6b250YWxBbGlnbm1lbnQgPSBcIlJpZ2h0XCI7XHJcbiAgICAgICAgICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZVwiLCBcIkRhdGEgaGFzIGJlZW4gbG9hZGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2VcIiwgcmVzcEpzb24uZGF0YSk7XHJcbiAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIEV4Y2VsSGFuZGxlciBmcm9tIFwiLi9FeGNlbEhhbmRsZXJcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuL0NvbW1vblwiO1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAvLyBUaGUgaW5pdGlhbGl6ZSBmdW5jdGlvbiBtdXN0IGJlIHJ1biBlYWNoIHRpbWUgYSBuZXcgcGFnZSBpcyBsb2FkZWQuXHJcbiAgICBPZmZpY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChyZWFzb24pIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBGYWJyaWNVSSBub3RpZmljYXRpb24gbWVjaGFuaXNtIGFuZCBoaWRlIGl0XHJcbiAgICAgICAgICAgIENvbW1vbi5pbml0aWFsaXplTWVzc2FnZUJhbm5lcigpO1xyXG4gICAgICAgICAgICAvL2Rlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICQoXCIjdGVtcGxhdGUtZGVzY3JpcHRpb25cIikudGV4dChcIlRoaXMgc2FtcGxlIGFsbG93cyByZWFkaW5nL3dyaXRpbmcgZnJvbS90byB0aGUgRXhjZWwgc2hlZXQuXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2VhcmNoIGRhdGEgbGlzdHNcclxuICAgICAgICAgICAgLy9jb21wb25lbnQgaWRzIGxpc3RcclxuICAgICAgICAgICAgJCgnI2NvbXBvbmVudC1kYXRhbGlzdC10ZXh0JykudGV4dChcIkNvbXAuaWRzXCIpO1xyXG5cclxuICAgICAgICAgICAgLy9wcm9qZWN0IGlkcyBsaXN0XHJcbiAgICAgICAgICAgICQoJyNjZHAtcHJvamVjdC1kYXRhbGlzdC10ZXh0JykudGV4dChcIlByb2ouaWRzXCIpO1xyXG4gICAgICAgICAgICAkKCcjaGRiLXByb2plY3QtZGF0YWxpc3QtdGV4dCcpLnRleHQoXCJQcm9qLk5hc1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vbG9hZCBkYXRhIGJ1dHRvblxyXG4gICAgICAgICAgICAkKCcjZmV0Y2gtYnV0dG9uLXRleHQnKS50ZXh0KFwiTG9hZCBkYXRhXCIpO1xyXG4gICAgICAgICAgICAkKCcjZmV0Y2gtYnV0dG9uLWRlc2MnKS50ZXh0KFwiRmV0Y2ggYWxsIHRoZSBjb21wb25lbnRzLlwiKTtcclxuICAgICAgICAgICAgJCgnI2ZldGNoLWJ1dHRvbicpLmNsaWNrKGxvYWRQYXJhbWV0ZXJzKTtcclxuXHJcbiAgICAgICAgICAgIC8vdXBkYXRlIGRhdGEgYnV0dG9uXHJcbiAgICAgICAgICAgICQoJyNwdXQtYnV0dG9uLXRleHQnKS50ZXh0KFwiVXBkYXRlIGRhdGFcIik7XHJcbiAgICAgICAgICAgICQoJyNwdXQtYnV0dG9uLWRlc2MnKS50ZXh0KFwiVXBkYXRlIGNvbXBvbmVudHMuXCIpO1xyXG4gICAgICAgICAgICAkKCcjcHV0LWJ1dHRvbicpLmNsaWNrKHVwZGF0ZVBhcmFtZXRlcnMpO1xyXG5cclxuICAgICAgICAgICAgbG9hZEluaXRpYWxTZWFyY2hWYWx1ZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG59KSgpO1xyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkUGFyYW1ldGVycygpIHtcclxuICAgIGxldCBjb21wb25lbnRJZCA9ICQoXCIjY29tcG9uZW50SWRzTGlzdFwiKS52YWwoKTtcclxuICAgIGxldCBwcm9qZWN0SWQgPSAkKFwiI3Byb2plY3RJZHNMaXN0XCIpLnZhbCgpO1xyXG4gICAgbGV0IHByb2plY3ROYW1lID0gJCgnI3Byb2plY3ROYW1lc0xpc3QnKS52YWwoKTtcclxuICAgIGxldCBzZWFyY2hWYWx1ZXMgPSBbXCJoZGI6Y29tcG9uZW50cy9jb21wb25lbnRJRD1cIiArIGNvbXBvbmVudElkLCBcImNkcDpwcm9qZWN0cy9pZD1cIitwcm9qZWN0SWQsIFwiaGRiOnByb2plY3RzL25hbWU9XCIrcHJvamVjdE5hbWVdO1xyXG4gICAgYXdhaXQgRXhjZWxIYW5kbGVyLmxvYWRQYXJhbWV0ZXJzKHNlYXJjaFZhbHVlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBhcmFtZXRlcnMoKSB7XHJcbiAgICBFeGNlbEhhbmRsZXIudXBkYXRlUGFyYW1ldGVycygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDb25maWdGb3JBdXRvVGV4dGJveCh0Yk5hbWUsIGdldERhdGFBcGkpIHtcclxuICAgIGdldERhdGFBcGkoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3BKc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgaWYgKHJlc3BKc29uLmlzU3VjY2Vzc2Z1bClcclxuICAgICAgICAkKHRiTmFtZSkuYXV0b2NvbXBsZXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGZ1bmN0aW9uIChyZXF1ZXN0LCByZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cChcIl5cIiArICQudWkuYXV0b2NvbXBsZXRlLmVzY2FwZVJlZ2V4KHJlcXVlc3QudGVybSksIFwiaVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSgkLmdyZXAocmVzcEpzb24uZGF0YSwgZnVuY3Rpb24gKGl0ZW06IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlci50ZXN0KGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyBteTogXCJyaWdodCBjZW50ZXJcIiwgYXQ6IFwicmlnaHQgYm90dG9tXCIgfSxcclxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogMVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pXHJcblxyXG59XHJcbmZ1bmN0aW9uIGxvYWRJbml0aWFsU2VhcmNoVmFsdWVzKCkge1xyXG4gICAgLy9Db21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIFwiTG9hZGluZyBzZWFyY2ggdmFsdWVzXCIpO1xyXG4gICAgLy9nZXQgbGlzdCBvZiBjb21wb25lbnQgaWRzXHJcbiAgICBzZXRDb25maWdGb3JBdXRvVGV4dGJveChcIiNjb21wb25lbnRJZHNMaXN0XCIsIEV4Y2VsSGFuZGxlci5nZXRIZGJDb21wb25lbnRJZHNMaXN0KTtcclxuXHJcbiAgICAvL2dldCBsaXN0IG9mIHByb2plY3QgaWRzXHJcbiAgICBzZXRDb25maWdGb3JBdXRvVGV4dGJveChcIiNwcm9qZWN0SWRzTGlzdFwiLCBFeGNlbEhhbmRsZXIuZ2V0Q2RwUHJvamVjdElkc0xpc3QpO1xyXG5cclxuICAgIC8vZ2V0IGxpc3Qgb2YgaGRiIHByb2plY3QgbmFtZXNcclxuICAgIHNldENvbmZpZ0ZvckF1dG9UZXh0Ym94KFwiI3Byb2plY3ROYW1lc0xpc3RcIiwgRXhjZWxIYW5kbGVyLmdldEhkYlByb2plY3ROYW1lc0xpc3QpO1xyXG5cclxuXHJcbiAgICAvL0NvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZTpcIiwgXCJTZWFyY2ggdmFsdWVzIGhhdmUgYmVlbiBsb2FkZWRcIik7XHJcbn1cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=