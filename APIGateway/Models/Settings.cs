using Syncfusion.XlsIO;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public sealed class Settings
    {
        public enum DBCenters { HDB, CDP };
        public static string HDBUrl = "https://grzsms216.andritz.com/services/api/";
        public static string CDPUrl = "https://volta-dev.andritz.com/api/";
        private const string ConfigFile = "excelconfig.xls";
        public static IDictionary<string, ExcelContent> ExcelConfigDict = new Dictionary<string, ExcelContent>();
        public static object[] LoadExcelConfiguration(string sheetName)
        {
            ExcelContent excelContent = GetExcelContent(sheetName);
            return excelContent.GetExcelConfig();
        }

        public static void LoadAllExcelConfigs()
        {
            ExcelEngine excelEngine = new ExcelEngine();
            IApplication application = excelEngine.Excel;
            application.DefaultVersion = ExcelVersion.Excel2016;

            FileStream configFile = new FileStream(ConfigFile, FileMode.Open);
            IWorkbook wb = application.Workbooks.Open(configFile);
            foreach(IWorksheet ws in wb.Worksheets)
            {
                if (!ExcelConfigDict.Keys.Contains(ws.Name))
                    ExcelConfigDict.Add(ws.Name, new ExcelContent(ws));
            }
        }

        private static ExcelContent GetExcelContent(string sheetName)
        {
            if (!ExcelConfigDict.Keys.Contains(sheetName)) throw new System.Exception("Could not find configuration for sheet "+sheetName);
            return ExcelConfigDict[sheetName];
        }
        public static async Task<List<ParamCell>> LoadParametersAsync(string sheetName, string[] searchValues)
        {
            ExcelContent excelContent = GetExcelContent(sheetName);
            return await excelContent.FetchParamsFromDBAsync(searchValues);
        }

        public static async Task<int> UpdateParametersAsync(string sheetName, string[] paramValues)
        {
            ExcelContent excelContent = GetExcelContent(sheetName);
            return await excelContent.UpdateParametersAsync(paramValues);
        }
    }
}
