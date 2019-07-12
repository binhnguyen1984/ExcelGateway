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
//# sourceMappingURL=FileHandler.js.map