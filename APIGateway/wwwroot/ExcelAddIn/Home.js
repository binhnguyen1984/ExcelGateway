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
var ComponentsHandler = require("./ComponentsHandler");
var Common = require("./Common");
var FileHandler = require("./FileHandler");
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
//# sourceMappingURL=Home.js.map