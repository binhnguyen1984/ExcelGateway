﻿using System.Threading.Tasks;

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

        public delegate Task<ResponseMessage> dbAction(params object[] args);
        public static async Task<ResponseMessage> PerformDBAction(dbAction hdbAction, dbAction cdpAction, params object[] args)
        {
            string DBAndCompNames = args[0] as string;
            string[] split = DBAndCompNames.Split(Settings.DBNameCompSplitter);
            if (split.Length < 2)
                return new ResponseMessage(false, "No database is specified for '" + DBAndCompNames + "'");
            args[0] = split[1];
            if (split[0].ToLower().CompareTo("hdb") == 0)
                return await hdbAction(args);
            else if (split[0].ToLower().CompareTo("cdp") == 0)
                return await cdpAction(args);
            return new ResponseMessage(false, "Database '" + split[0] + "' specified for '" + split[1] + "' is unknown");
        }
        public static async Task<ResponseMessage> UpdateComponentWithFetchedValues(params object[] args)
        {
            return await PerformDBAction(HdbHandler.UpdateComponentWithFetchedValues, CdpHandler.UpdateComponentWithFetchedValues, args);
            //string[] split = DBAndCompNames.Split(Settings.DBNameCompSplitter);
            //if (split.Length < 2)
            //    return new ResponseMessage(false, "No database is specified for '"+ DBAndCompNames+ "'");
            //if (split[0].ToLower().CompareTo("hdb")==0)
            //    return await HdbHandler.UpdateComponentWithFetchedValues(split[1], searchProps, searchValues, impParams);
            //else if (split[0].ToLower().CompareTo("cdp") == 0)
            //    return await CdpHandler.UpdateComponentWithFetchedValues(split[1], searchProps, searchValues, impParams);
            //return new ResponseMessage(false, "Database '" + split[0] + "' specified for '" + split[1] + "' is unknown");
        }

        public static async Task<ResponseMessage> UpdateComponentToDB(params object[] args)
        {
            return await PerformDBAction(HdbHandler.UpdateComponentToDB, CdpHandler.UpdateComponentToDB, args);
            //string[] split = DBAndCompNames.Split(Settings.DBNameCompSplitter);
            //if (split.Length < 2)
            //    return new ResponseMessage(false, "No database is specified for '" + split[0] + "'");
            //if (split[0].ToLower().CompareTo("hdb") == 0)
            //    return await HdbHandler.UpdateComponentToDB(split[1], loadedCompDetails, compIdValue);
            //else if (split[0].ToLower().CompareTo("cdp") == 0)
            //    return await CdpHandler.UpdateComponentToDB(split[1], loadedCompDetails);
            //return new ResponseMessage(false, "Database '" + split[0] + "' specified for '" + split[1] + "' is unknown");
        }

        public static async Task<ResponseMessage> GetAttributeValuesOfAllComponents(params object[] args)
        {
            return await PerformDBAction(HdbHandler.GetAttributeValuesOfAllComponents, CdpHandler.GetAttributeValuesOfAllComponents, args);
            //string[] split = attrPath[0].Split(Settings.DBNameCompSplitter);
            //if (split.Length < 2)
            //    return new ResponseMessage(false, "No database is specified for '" + split[0] + "'");
            //if (split[0].ToLower().CompareTo("hdb") == 0)
            //    return await HdbHandler.GetAttributeValuesOfAllComponents(attrPath);
            //else if (split[0].ToLower().CompareTo("cdp") == 0)
            //    return await CdpHandler.GetAttributeValuesOfAllComponents(attrPath);
            //return new ResponseMessage(false, "Database '" + split[0] + "' specified for '" + split[1] + "' is unknown");
        }
    }
}
