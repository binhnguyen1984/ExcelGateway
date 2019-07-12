//import * as XLSX from 'ts-xlsx';

export function asyncLoadFile(apiURL,callback) {
    let rawFile = new XMLHttpRequest();
    //rawFile.overrideMimeType("application/json");
    rawFile.open("GET", apiURL, true);
    rawFile.onreadystatechange = async function () {
        if (rawFile.readyState === 4 && rawFile.status == 200) {
            await callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

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