using Syncfusion.XlsIO;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public sealed class Settings
    {
        public enum DBCenters { HDB, CDP };
        public static string HDBApiUrl = "https://grzsms216.andritz.com/services/api/";
        public static string CDPApiUrl = "https://volta-dev.andritz.com/api/";
        public static string CDPAuthUrl = "https://heimdall.andritz.com";
        public static int CDPRedirecPort = 4200;
        public static string CDPClientId = "spa";
        public static string CDPScope = "openid volta";

        private const string ConfigFile = "excelconfig.xls";
        public static IDictionary<string, ExcelContent> ExcelConfigDict = new Dictionary<string, ExcelContent>();
        public static List<string> LoadExcelConfiguration(string sheetName)
        {
            ExcelContent excelContent = GetExcelContent(sheetName);
            return excelContent.GetExcelConfig();
        }

        public static void LoadAllExcelConfigs()
        {
            IWorkbook wb = GetExcelWorkBook();
            foreach (IWorksheet ws in wb.Worksheets)
            {
                if (!ExcelConfigDict.Keys.Contains(ws.Name))
                    ExcelConfigDict.Add(ws.Name, new ExcelContent(ws));
            }
        }

        private static IWorkbook GetExcelWorkBook()
        {
            ExcelEngine excelEngine = new ExcelEngine();
            IApplication application = excelEngine.Excel;
            application.DefaultVersion = ExcelVersion.Excel2016;

            FileStream configFile = new FileStream(ConfigFile, FileMode.Open);
            return application.Workbooks.Open(configFile);
        }
        private static ExcelContent GetExcelContent(string sheetName)
        {
            if (!ExcelConfigDict.Keys.Contains(sheetName))
            {
                //try to re-load the configuration file and look for the sheet as the file could have been updated in the mean time
                IWorkbook wb = GetExcelWorkBook();
                foreach (IWorksheet ws in wb.Worksheets)
                {
                    if (string.Compare(ws.Name, sheetName) == 0)
                    {
                        ExcelContent excelContent = new ExcelContent(ws);
                        ExcelConfigDict.Add(ws.Name, excelContent);
                        return excelContent;
                    }
                }
                //did not succeed, so there is no configuration for this sheet
                return null;
            }
            return ExcelConfigDict[sheetName];
        }
        public static async Task<List<ParamCell>> LoadParametersAsync(string sheetName, string[] searchValues)
        {
            ExcelContent excelContent = GetExcelContent(sheetName);
            return await excelContent?.FetchParamsFromDBAsync(searchValues);
        }

        public static async Task<int> UpdateParametersAsync(string sheetName, string[] paramValues)
        {
            ExcelContent excelContent = GetExcelContent(sheetName);
            if(excelContent!=null) return await excelContent?.UpdateParametersAsync(paramValues);
            return 0;
        }
    }
}
