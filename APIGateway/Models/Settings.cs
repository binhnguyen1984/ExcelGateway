using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public sealed class Settings
    {
        public enum DBCenters { HDB, CDP};
        public static string hdbURL = "https://grzsms216.andritz.com/services/api/";
        public static string cdpURL = "https://volta-dev.andritz.com/api/";
        public static ExcelSheetModel ExcelModel;
        public static object[] ExcelConfig;
        public static void ReadExcelConfiguration()
        {
            ExcelModel = new ExcelSheetModel(System.IO.Path.GetFullPath("excelconfig.xls"), "excelconfig");
            ExcelConfig = new object[2] { ExcelModel.SearchParamsDict, ExcelModel.ExportParamList };
        }
    }
}
