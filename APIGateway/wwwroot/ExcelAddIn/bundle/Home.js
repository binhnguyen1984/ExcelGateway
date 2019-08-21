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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0FQSUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9FeGNlbEFkZEluL0NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi93d3dyb290L0V4Y2VsQWRkSW4vRXhjZWxIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3d3d3Jvb3QvRXhjZWxBZGRJbi9Ib21lLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLFNBQWdCLGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUTtJQUFFLGNBQU87U0FBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFP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QUMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDakYsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxVQUFVLElBQVk7d0JBQ2pELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDOUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDUixDQUFDO2dCQUNELFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRTtnQkFDcEQsU0FBUyxFQUFFLENBQUM7YUFDZixDQUFDLENBQUM7SUFDWCxDQUFDLENBQUM7QUFFTixDQUFDO0FBQ0QsU0FBUyx1QkFBdUI7SUFDNUIsK0RBQStEO0lBQy9ELDJCQUEyQjtJQUMzQix1QkFBdUIsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUUvRSx5QkFBeUI7SUFDekIsdUJBQXVCLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0Usd0VBQXdFO0FBQzVFLENBQUM7Ozs7Ozs7Ozs7OztBQzdFRCx3QiIsImZpbGUiOiJIb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93d3dyb290L0V4Y2VsQWRkSW4vSG9tZS50c1wiKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBhc3luY0FwaUdldENhbGwoYXBpVVJMLCBjYWxsYmFjaywgLi4uYXJncykge1xyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgeGhyLm9wZW4oXCJHRVRcIiwgYXBpVVJMLCB0cnVlKTtcclxuICAgIHhoci5vbmxvYWQgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDAgJiYgY2FsbGJhY2sgIT0gbnVsbClcclxuICAgICAgICAgICAgYXdhaXQgY2FsbGJhY2soeGhyLnJlc3BvbnNlVGV4dCwgLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN5bmNBcGlHZXRDYWxsKGFwaVVSTCxjYWxsYmFjayApIHtcclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vdmVycmlkZU1pbWVUeXBlKFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIGFwaVVSTCwgZmFsc2UpO1xyXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMCAmJiBjYWxsYmFjayE9bnVsbClcclxuICAgICAgICAgICAgY2FsbGJhY2soeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc3luY0FwaVB1dENhbGwoYXBpVVJMLCByYXdEYXRhLCBjYWxsYmFjaykge1xyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgbGV0IGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkocmF3RGF0YSk7XHJcbiAgICB4aHIub3BlbihcIlBVVFwiLCBhcGlVUkwsIGZhbHNlKTtcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMCAmJiBjYWxsYmFjayE9bnVsbClcclxuICAgICAgICAgICAgY2FsbGJhY2soeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChqc29uRGF0YSk7XHJcbn1cclxuIiwibGV0IG1lc3NhZ2VCYW5uZXI7XHJcbmxldCBoZGJVUkwsIGNkcFVSTDtcclxuZXhwb3J0IHsgaGRiVVJMLCBjZHBVUkx9O1xyXG5kZWNsYXJlIGxldCBmYWJyaWM6IGFueTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0X3VybHMoY29uZmlnX2RhdGEpXHJcbntcclxuICAgIGhkYlVSTCA9IGNvbmZpZ19kYXRhLmhkYlVSTDsgXHJcbiAgICBjZHBVUkwgPSBjb25maWdfZGF0YS5jZHBVUkw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0X3N0cmluZ190b19hcnJheShzdHIpIHtcclxuICAgIHJldHVybiBzdHIuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnRyaW0oKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplTWVzc2FnZUJhbm5lcigpXHJcbntcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1zLU1lc3NhZ2VCYW5uZXInKTtcclxuICAgIG1lc3NhZ2VCYW5uZXIgPSBuZXcgZmFicmljLk1lc3NhZ2VCYW5uZXIoZWxlbWVudCk7XHJcbiAgICBtZXNzYWdlQmFubmVyLmhpZGVCYW5uZXIoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZW1wdHkoZGF0YSkge1xyXG4gICAgaWYgKHR5cGVvZiAoZGF0YSkgPT0gJ251bWJlcicgfHwgdHlwZW9mIChkYXRhKSA9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIChkYXRhKSA9PSAndW5kZWZpbmVkJyB8fCBkYXRhID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIChkYXRhLmxlbmd0aCkgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGggPT0gMDtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vLyB0aGlzIGlzIGtpbmQgb2YgYSBwYXR0ZXJuIGZvciBoYW5kbGluZyBjb250ZW50cyBpbiB0aGUgY3VycmVudCBleGNlbCBzaGVldFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhjZWxBY3Rpb25IYW5kbGVyKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBFeGNlbC5ydW4oYWN0aW9uKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZXJyb3JIYW5kbGVyKGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGZvciB0cmVhdGluZyBlcnJvcnNcclxuZXhwb3J0IGZ1bmN0aW9uIGVycm9ySGFuZGxlcihlcnJvcikge1xyXG4gICAgLy8gQWx3YXlzIGJlIHN1cmUgdG8gY2F0Y2ggYW55IGFjY3VtdWxhdGVkIGVycm9ycyB0aGF0IGJ1YmJsZSB1cCBmcm9tIHRoZSBFeGNlbC5ydW4gZXhlY3V0aW9uXHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKFwiRXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBPZmZpY2VFeHRlbnNpb24uRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRlYnVnIGluZm86IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IuZGVidWdJbmZvKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBmb3IgZGlzcGxheWluZyBub3RpZmljYXRpb25zXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKGhlYWRlciwgY29udGVudCkge1xyXG4gICAgJChcIiNub3RpZmljYXRpb24taGVhZGVyXCIpLnRleHQoaGVhZGVyKTtcclxuICAgICQoXCIjbm90aWZpY2F0aW9uLWJvZHlcIikudGV4dChjb250ZW50KTtcclxuICAgIG1lc3NhZ2VCYW5uZXIuc2hvd0Jhbm5lcigpO1xyXG4gICAgbWVzc2FnZUJhbm5lci50b2dnbGVFeHBhbnNpb24oKTtcclxufVxyXG5cclxuIiwiaW1wb3J0ICogYXMgQVBJSGFuZGxlciBmcm9tIFwiLi9BUElIYW5kbGVyXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi9Db21tb25cIjtcclxuXHJcbmNvbnN0IGltcG9ydFN0YXJ0Q29sID0gMDtcclxuY29uc3QgZXhwb3J0U3RhcnRDb2wgPSAzO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcG9uZW50SWRzTGlzdChjYWxsYmFjaykge1xyXG4gICAgQVBJSGFuZGxlci5zeW5jQXBpR2V0Q2FsbChcImFwaS9sb2FkY29tcG9uZW50aWRzXCIsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RJZHNMaXN0KGNhbGxiYWNrKSB7XHJcbiAgICBBUElIYW5kbGVyLnN5bmNBcGlHZXRDYWxsKFwiYXBpL2xvYWRwcm9qZWN0aWRzXCIsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUGFyYW1ldGVycyhzZWFyY2hWYWx1ZXMpIHtcclxuICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZVwiLCBcIkRhdGEgaXMgbG9hZGluZyAuLi5cIik7XHJcbiAgICBsZXQgaW1wb3J0UHJvcHMgPSBhd2FpdCBnZXRJbXBvcnRQcm9wTmFtZXMoKTtcclxuICAgIGxldCBwcm9wTmFtZXMgPSBpbXBvcnRQcm9wc1swXTtcclxuICAgIGxldCBpbXBvcnRWYWx1ZUxvY3MgPSBpbXBvcnRQcm9wc1sxXTtcclxuICAgIEFQSUhhbmRsZXIuYXN5bmNBcGlHZXRDYWxsKFwiYXBpL2xvYWRwYXJhbWV0ZXJzL1wiICsgXCI/cHJvcE5hbWVzPVwiICsgcHJvcE5hbWVzLnRvU3RyaW5nKCkgKyBcIiZzZWFyY2hWYWx1ZXM9XCIgKyBzZWFyY2hWYWx1ZXMsIHNldEltcG9ydFBhcmFtZXRlcnMsIGltcG9ydFZhbHVlTG9jcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQYXJhbWV0ZXJzKCkge1xyXG4gICAgQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlOlwiLCBcIlVwZGF0aW5nIHRoZSBjb21wb25lbnRzLi4uIFwiKTtcclxuICAgIGxldCBleHBvcnRQYXJhbXMgPSBhd2FpdCBnZXRFeHBvcnRQcm9wTmFtZXMoKTtcclxuICAgIGxldCBleHBvcnRQcm9wTmFtZXMgPSBleHBvcnRQYXJhbXNbMF07XHJcbiAgICBsZXQgZXhwb3J0VmFsdWVzID0gZXhwb3J0UGFyYW1zWzFdO1xyXG4gICAgQVBJSGFuZGxlci5zeW5jQXBpUHV0Q2FsbChcImFwaS91cGRhdGVwYXJhbWV0ZXJzLz9wcm9wTmFtZXM9XCIgKyBleHBvcnRQcm9wTmFtZXMudG9TdHJpbmcoKSAsZXhwb3J0VmFsdWVzLnRvU3RyaW5nKCksIGhhbmRsZUV4cG9ydFBhcmFtc0ZlZWRiYWNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRXhwb3J0UGFyYW1zRmVlZGJhY2socmVzcG9uc2UpIHtcclxuICAgIGxldCByZXNwSnNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgaWYgKHJlc3BKc29uLmlzU3VjY2Vzc2Z1bCkge1xyXG4gICAgICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZTpcIiwgXCJVcGRhdGluZyBzdWNjZWVkZWQhXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2U6XCIsIHJlc3BKc29uLmRhdGEpO1xyXG59XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0SW1wb3J0UHJvcE5hbWVzKCkge1xyXG4gICAgbGV0IHByb3BOYW1lcyA9IFtdO1xyXG4gICAgbGV0IGxvY3MgPSBbXTtcclxuICAgIGF3YWl0IENvbW1vbi5leGNlbEFjdGlvbkhhbmRsZXIoYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgICAgIGxldCBzaGVldCA9IGN0eC53b3JrYm9vay53b3Jrc2hlZXRzLmdldEFjdGl2ZVdvcmtzaGVldCgpO1xyXG4gICAgICAgIGxldCByYW5nZSA9IHNoZWV0LmdldFVzZWRSYW5nZSgpLmxvYWQoXCJyb3dDb3VudFwiKTtcclxuICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgIGxldCByb3dDb3VudCA9IHJhbmdlLnJvd0NvdW50O1xyXG4gICAgICAgIGxldCBmaXJzdFByb3BDZWxsID0gc2hlZXQuZ2V0VXNlZFJhbmdlKCkuZ2V0Q2VsbCgwLCBpbXBvcnRTdGFydENvbCkubG9hZChcImFkZHJlc3NcIik7XHJcbiAgICAgICAgbGV0IGxhc3RQcm9wQ2VsbCA9IHNoZWV0LmdldFVzZWRSYW5nZSgpLmdldENlbGwocm93Q291bnQgLSAxLCBpbXBvcnRTdGFydENvbCkubG9hZChcImFkZHJlc3NcIik7XHJcbiAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgICAgICByYW5nZSA9IHNoZWV0LmdldFJhbmdlKGZpcnN0UHJvcENlbGwuYWRkcmVzcyArIFwiOlwiICsgbGFzdFByb3BDZWxsLmFkZHJlc3MpLmxvYWQoXCJ2YWx1ZXNcIik7XHJcbiAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgICAgICBsZXQgcHJvcHMgPSByYW5nZS52YWx1ZXM7XHJcblxyXG4gICAgICAgIC8vc2VhcmNoIGZvciBhbGwgcGFyYW1ldGVyIG5hbWVzXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcm93Q291bnQ7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wTmFtZSA9IHByb3BzW3Jvd11bMF07XHJcbiAgICAgICAgICAgIGlmIChwcm9wTmFtZS5pbmRleE9mKFwiL1wiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wTmFtZXMucHVzaChwcm9wTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBsb2NzLnB1c2gocm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFtwcm9wTmFtZXMsIGxvY3NdIDtcclxufVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEV4cG9ydFByb3BOYW1lcygpIHtcclxuICAgIGxldCBwcm9wTmFtZXMgPSBbXTtcclxuICAgIGxldCB2YWx1ZXMgPSBbXTtcclxuICAgIGF3YWl0IENvbW1vbi5leGNlbEFjdGlvbkhhbmRsZXIoYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgICAgIGxldCBzaGVldCA9IGN0eC53b3JrYm9vay53b3Jrc2hlZXRzLmdldEFjdGl2ZVdvcmtzaGVldCgpO1xyXG4gICAgICAgIGxldCByYW5nZSA9IHNoZWV0LmdldFVzZWRSYW5nZSgpLmxvYWQoXCJyb3dDb3VudFwiKTtcclxuICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgIGxldCByb3dDb3VudCA9IHJhbmdlLnJvd0NvdW50O1xyXG4gICAgICAgIGxldCBmaXJzdFByb3BDZWxsID0gc2hlZXQuZ2V0VXNlZFJhbmdlKCkuZ2V0Q2VsbCgwLCBleHBvcnRTdGFydENvbCkubG9hZChcImFkZHJlc3NcIik7XHJcbiAgICAgICAgbGV0IGxhc3RQcm9wQ2VsbCA9IHNoZWV0LmdldFVzZWRSYW5nZSgpLmdldENlbGwocm93Q291bnQgLSAxLCBleHBvcnRTdGFydENvbCsxKS5sb2FkKFwiYWRkcmVzc1wiKTtcclxuICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgIHJhbmdlID0gc2hlZXQuZ2V0UmFuZ2UoZmlyc3RQcm9wQ2VsbC5hZGRyZXNzICsgXCI6XCIgKyBsYXN0UHJvcENlbGwuYWRkcmVzcykubG9hZChcInZhbHVlc1wiKTtcclxuICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgIGxldCBwcm9wcyA9IHJhbmdlLnZhbHVlcztcclxuXHJcbiAgICAgICAgLy9zZWFyY2ggZm9yIGFsbCBwYXJhbWV0ZXIgbmFtZXNcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dDb3VudDsgcm93KyspIHtcclxuICAgICAgICAgICAgbGV0IHByb3BOYW1lID0gcHJvcHNbcm93XVswXTtcclxuICAgICAgICAgICAgaWYgKHByb3BOYW1lLmluZGV4T2YoXCIvXCIpID49IDApIHtcclxuICAgICAgICAgICAgICAgIHByb3BOYW1lcy5wdXNoKHByb3BOYW1lKTtcclxuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHByb3BzW3Jvd11bMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gW3Byb3BOYW1lcywgdmFsdWVzXTtcclxufVxyXG5cclxuXHJcbi8vd2UgcGFkIHRoZSBpbXBvcnQgcGFyYW1ldGVyIGFycmF5IHdpdGggZW1wdHkgc3RyaW5ncyBhdCBsb2NhdGlvbnMgb2YgZW1wdHkgcm93c1xyXG4vL2FuZCB0dXJuIGl0IGludG8gY29sdW1uIGFycmF5XHJcbmZ1bmN0aW9uIGZvcm1hdFBhcmFtQXJyKHBhcmFtQXJyLCBpbXBvcnRWYWx1ZUxvY3MpIHtcclxuICAgIGxldCBwYXJhbXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1wb3J0VmFsdWVMb2NzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgPiAwKXtcclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gaW1wb3J0VmFsdWVMb2NzW2ldIC0gaW1wb3J0VmFsdWVMb2NzW2kgLSAxXS0xO1xyXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiAwKVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkaXN0YW5jZTsgaisrKVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKFtcIlwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmFtcy5wdXNoKFtwYXJhbUFycltpXV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcmFtcztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2V0SW1wb3J0UGFyYW1ldGVycyhyZXNwb25zZSwgaW1wb3J0VmFsdWVMb2NzKSB7XHJcbiAgICBhd2FpdCBDb21tb24uZXhjZWxBY3Rpb25IYW5kbGVyKGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBsZXQgcmVzcEpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICBpZiAocmVzcEpzb24uaXNTdWNjZXNzZnVsKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbUFyciA9IGZvcm1hdFBhcmFtQXJyKHJlc3BKc29uLmRhdGEsIGltcG9ydFZhbHVlTG9jcyk7XHJcbiAgICAgICAgICAgIGxldCBzaGVldCA9IGN0eC53b3JrYm9vay53b3Jrc2hlZXRzLmdldEFjdGl2ZVdvcmtzaGVldCgpO1xyXG4gICAgICAgICAgICBsZXQgZmlyc3RWYWx1ZUNlbGwgPSBzaGVldC5nZXRVc2VkUmFuZ2UoKS5nZXRDZWxsKGltcG9ydFZhbHVlTG9jc1swXSwgaW1wb3J0U3RhcnRDb2wgKyAxKS5sb2FkKFwiYWRkcmVzc1wiKTtcclxuICAgICAgICAgICAgbGV0IGxhc3RWYWx1ZUNlbGwgPSBzaGVldC5nZXRVc2VkUmFuZ2UoKS5nZXRDZWxsKGltcG9ydFZhbHVlTG9jc1tpbXBvcnRWYWx1ZUxvY3MubGVuZ3RoLTFdLCBpbXBvcnRTdGFydENvbCArIDEpLmxvYWQoXCJhZGRyZXNzXCIpO1xyXG4gICAgICAgICAgICBhd2FpdCBjdHguc3luYygpO1xyXG4gICAgICAgICAgICBsZXQgaW1wb3J0UmFuZ2UgPSBzaGVldC5nZXRSYW5nZShmaXJzdFZhbHVlQ2VsbC5hZGRyZXNzICsgXCI6XCIgKyBsYXN0VmFsdWVDZWxsLmFkZHJlc3MpO1xyXG4gICAgICAgICAgICBpbXBvcnRSYW5nZS52YWx1ZXMgPSBwYXJhbUFycjtcclxuICAgICAgICAgICAgLy9pbXBvcnRSYW5nZS5mb3JtYXQud3JhcFRleHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAvL2ltcG9ydFJhbmdlLmZvcm1hdC5hdXRvZml0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICAvL2ltcG9ydFJhbmdlLnN0eWxlID0gRXhjZWwuQnVpbHRJblN0eWxlLm5ldXRyYWw7XHJcbiAgICAgICAgICAgIC8vaW1wb3J0UmFuZ2UuZm9ybWF0Lmhvcml6b250YWxBbGlnbm1lbnQgPSBcIlJpZ2h0XCI7XHJcbiAgICAgICAgICAgIENvbW1vbi5zaG93Tm90aWZpY2F0aW9uKFwiTWVzc2FnZVwiLCBcIkRhdGEgaGFzIGJlZW4gbG9hZGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBDb21tb24uc2hvd05vdGlmaWNhdGlvbihcIk1lc3NhZ2VcIiwgcmVzcEpzb24uZGF0YSk7XHJcbiAgICAgICAgYXdhaXQgY3R4LnN5bmMoKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIEV4Y2VsSGFuZGxlciBmcm9tIFwiLi9FeGNlbEhhbmRsZXJcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuL0NvbW1vblwiO1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAvLyBUaGUgaW5pdGlhbGl6ZSBmdW5jdGlvbiBtdXN0IGJlIHJ1biBlYWNoIHRpbWUgYSBuZXcgcGFnZSBpcyBsb2FkZWQuXHJcbiAgICBPZmZpY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChyZWFzb24pIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBGYWJyaWNVSSBub3RpZmljYXRpb24gbWVjaGFuaXNtIGFuZCBoaWRlIGl0XHJcbiAgICAgICAgICAgIENvbW1vbi5pbml0aWFsaXplTWVzc2FnZUJhbm5lcigpO1xyXG4gICAgICAgICAgICAvL2Rlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICQoXCIjdGVtcGxhdGUtZGVzY3JpcHRpb25cIikudGV4dChcIlRoaXMgc2FtcGxlIGFsbG93cyByZWFkaW5nL3dyaXRpbmcgZnJvbS90byB0aGUgRXhjZWwgc2hlZXQuXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2VhcmNoIGRhdGEgbGlzdHNcclxuICAgICAgICAgICAgLy9jb21wb25lbnQgaWRzIGxpc3RcclxuICAgICAgICAgICAgJCgnI2NvbXBvbmVudC1kYXRhbGlzdC10ZXh0JykudGV4dChcIkNvbXAuaWRzXCIpO1xyXG5cclxuICAgICAgICAgICAgLy9wcm9qZWN0IGlkcyBsaXN0XHJcbiAgICAgICAgICAgICQoJyNwcm9qZWN0LWRhdGFsaXN0LXRleHQnKS50ZXh0KFwiUHJvai5pZHNcIik7XHJcblxyXG4gICAgICAgICAgICAvL2xvYWQgZGF0YSBidXR0b25cclxuICAgICAgICAgICAgJCgnI2ZldGNoLWJ1dHRvbi10ZXh0JykudGV4dChcIkxvYWQgZGF0YVwiKTtcclxuICAgICAgICAgICAgJCgnI2ZldGNoLWJ1dHRvbi1kZXNjJykudGV4dChcIkZldGNoIGFsbCB0aGUgY29tcG9uZW50cy5cIik7XHJcbiAgICAgICAgICAgICQoJyNmZXRjaC1idXR0b24nKS5jbGljayhsb2FkUGFyYW1ldGVycyk7XHJcblxyXG4gICAgICAgICAgICAvL3VwZGF0ZSBkYXRhIGJ1dHRvblxyXG4gICAgICAgICAgICAkKCcjcHV0LWJ1dHRvbi10ZXh0JykudGV4dChcIlVwZGF0ZSBkYXRhXCIpO1xyXG4gICAgICAgICAgICAkKCcjcHV0LWJ1dHRvbi1kZXNjJykudGV4dChcIlVwZGF0ZSBjb21wb25lbnRzLlwiKTtcclxuICAgICAgICAgICAgJCgnI3B1dC1idXR0b24nKS5jbGljayh1cGRhdGVQYXJhbWV0ZXJzKTtcclxuXHJcbiAgICAgICAgICAgIGxvYWRJbml0aWFsU2VhcmNoVmFsdWVzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufSkoKTtcclxuXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZFBhcmFtZXRlcnMoKSB7XHJcbiAgICBsZXQgY29tcG9uZW50SWQgPSAkKFwiI2NvbXBvbmVudElkc0xpc3RcIikudmFsKCk7XHJcbiAgICBsZXQgcHJvamVjdElkID0gJChcIiNwcm9qZWN0SWRzTGlzdFwiKS52YWwoKTtcclxuICAgIGxldCBzZWFyY2hWYWx1ZXMgPSBbXCJjb21wb25lbnRzL2NvbXBvbmVudElEOlwiICsgY29tcG9uZW50SWQsIFwicHJvamVjdHMvaWQ6XCIrcHJvamVjdElkXTtcclxuICAgIGF3YWl0IEV4Y2VsSGFuZGxlci5sb2FkUGFyYW1ldGVycyhzZWFyY2hWYWx1ZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQYXJhbWV0ZXJzKCkge1xyXG4gICAgRXhjZWxIYW5kbGVyLnVwZGF0ZVBhcmFtZXRlcnMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q29uZmlnRm9yQXV0b1RleHRib3godGJOYW1lLCBnZXREYXRhQXBpKSB7XHJcbiAgICBnZXREYXRhQXBpKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGxldCByZXNwSnNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgIGlmIChyZXNwSnNvbi5pc1N1Y2Nlc3NmdWwpXHJcbiAgICAgICAgJCh0Yk5hbWUpLmF1dG9jb21wbGV0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBmdW5jdGlvbiAocmVxdWVzdCwgcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoXCJeXCIgKyAkLnVpLmF1dG9jb21wbGV0ZS5lc2NhcGVSZWdleChyZXF1ZXN0LnRlcm0pLCBcImlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UoJC5ncmVwKHJlc3BKc29uLmRhdGEsIGZ1bmN0aW9uIChpdGVtOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXIudGVzdChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgbXk6IFwicmlnaHQgY2VudGVyXCIsIGF0OiBcInJpZ2h0IGJvdHRvbVwiIH0sXHJcbiAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxufVxyXG5mdW5jdGlvbiBsb2FkSW5pdGlhbFNlYXJjaFZhbHVlcygpIHtcclxuICAgIC8vQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlOlwiLCBcIkxvYWRpbmcgc2VhcmNoIHZhbHVlc1wiKTtcclxuICAgIC8vZ2V0IGxpc3Qgb2YgY29tcG9uZW50IGlkc1xyXG4gICAgc2V0Q29uZmlnRm9yQXV0b1RleHRib3goXCIjY29tcG9uZW50SWRzTGlzdFwiLCBFeGNlbEhhbmRsZXIuZ2V0Q29tcG9uZW50SWRzTGlzdCk7XHJcblxyXG4gICAgLy9nZXQgbGlzdCBvZiBwcm9qZWN0IGlkc1xyXG4gICAgc2V0Q29uZmlnRm9yQXV0b1RleHRib3goXCIjcHJvamVjdElkc0xpc3RcIiwgRXhjZWxIYW5kbGVyLmdldFByb2plY3RJZHNMaXN0KTtcclxuICAgIC8vQ29tbW9uLnNob3dOb3RpZmljYXRpb24oXCJNZXNzYWdlOlwiLCBcIlNlYXJjaCB2YWx1ZXMgaGF2ZSBiZWVuIGxvYWRlZFwiKTtcclxufVxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==