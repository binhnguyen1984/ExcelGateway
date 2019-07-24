namespace APIGateway.Models
{
    public sealed class Settings
    {
        public enum DBCenters { HDB, CDP };
        public static string HDBUrl = "https://grzsms216.andritz.com/services/api/";
        public static string CDPUrl = "https://volta-dev.andritz.com/api/";
        private const string ExcelConfigFileName = "excelconfig.xls";
        public static ExcelContent ExcelModel;
        public static object[] ExcelConfig;
        public static void ReadExcelConfiguration()
        {
            ExcelModel = new ExcelContent(ExcelConfigFileName);
            ExcelConfig = new object[2] { ExcelModel.ExcelSearchParamList, ExcelModel.ExcelExportLocationList };
        }
    }
}
