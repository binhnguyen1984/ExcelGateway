using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using static APIGateway.Models.Settings;

namespace APIGateway.Models
{
    /// <summary>
    /// This class is responsible for splitting different data manipulations between HDB and CDP databases
    /// </summary>
    public class DBHelper
    {
        private static DBHandler CdpHandler = null;
        private static DBHandler HdbHandler = null;
        public static ExcelHandler ExcelHandlerInst = null;
        public static void InitializeDbHelper()
        {
            CdpHandler = new CDPHandler();
            HdbHandler = new HDBHandler();
            ExcelHandlerInst = new ExcelHandler("excelconfig.xls");
        }

        public delegate Task<ResponseMessage> dbAction(string compName, params object[] args);
        public static async Task<ResponseMessage> PerformDBAction(string DBAndCompNames, dbAction hdbAction, dbAction cdpAction, params object[] args)
        {
            string[] split = DBAndCompNames.Split(Settings.DBNameCompSplitter);
            if (split.Length < 2)
                return new ResponseMessage(false, "No database is specified for '" + DBAndCompNames + "'");
            if (split[0].ToLower().CompareTo("hdb") == 0)
                return await hdbAction(split[1], args);
            else if (split[0].ToLower().CompareTo("cdp") == 0)
                return await cdpAction(split[1], args);
            return new ResponseMessage(false, "Database '" + split[0] + "' specified for '" + split[1] + "' is unknown");
        }
        public static async Task<ResponseMessage> UpdateComponentWithFetchedValues(string DBAndCompNames, List<string> searchProps, List<string> searchValues, List<ParamCell> impParams)
        {
            return await PerformDBAction(DBAndCompNames, HdbHandler.UpdateComponentWithFetchedValues, CdpHandler.UpdateComponentWithFetchedValues, searchProps, searchValues, impParams);
            //string[] split = DBAndCompNames.Split(Settings.DBNameCompSplitter);
            //if (split.Length < 2)
            //    return new ResponseMessage(false, "No database is specified for '"+ DBAndCompNames+ "'");
            //if (split[0].ToLower().CompareTo("hdb")==0)
            //    return await HdbHandler.UpdateComponentWithFetchedValues(split[1], searchProps, searchValues, impParams);
            //else if (split[0].ToLower().CompareTo("cdp") == 0)
            //    return await CdpHandler.UpdateComponentWithFetchedValues(split[1], searchProps, searchValues, impParams);
            //return new ResponseMessage(false, "Database '" + split[0] + "' specified for '" + split[1] + "' is unknown");
        }

        public static async Task<ResponseMessage> UpdateComponentToDB(string DBAndCompNames, JObject loadedCompDetails, string compIdValue)
        {
            return await PerformDBAction(DBAndCompNames, HdbHandler.UpdateComponentToDB, CdpHandler.UpdateComponentToDB, loadedCompDetails, compIdValue);
            //string[] split = DBAndCompNames.Split(Settings.DBNameCompSplitter);
            //if (split.Length < 2)
            //    return new ResponseMessage(false, "No database is specified for '" + split[0] + "'");
            //if (split[0].ToLower().CompareTo("hdb") == 0)
            //    return await HdbHandler.UpdateComponentToDB(split[1], loadedCompDetails, compIdValue);
            //else if (split[0].ToLower().CompareTo("cdp") == 0)
            //    return await CdpHandler.UpdateComponentToDB(split[1], loadedCompDetails);
            //return new ResponseMessage(false, "Database '" + split[0] + "' specified for '" + split[1] + "' is unknown");
        }

        public static async Task<ResponseMessage> GetAttributeValuesOfAllComponents(string[] attrPath)
        {
            string[] split = attrPath[0].Split(Settings.DBNameCompSplitter);
            if (split.Length < 2)
                return new ResponseMessage(false, "No database is specified for '" + split[0] + "'");
            if (split[0].ToLower().CompareTo("hdb") == 0)
                return await HdbHandler.GetAttributeValuesOfAllComponents(attrPath);
            else if (split[0].ToLower().CompareTo("cdp") == 0)
                return await CdpHandler.GetAttributeValuesOfAllComponents(attrPath);
            return new ResponseMessage(false, "Database '" + split[0] + "' specified for '" + split[1] + "' is unknown");
        }
    }
}
