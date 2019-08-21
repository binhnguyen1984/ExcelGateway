using Newtonsoft.Json.Linq;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static APIGateway.Models.Settings;

namespace APIGateway.Models
{
    public class DBHelper
    {
        private static DatabaseHandler CdpHandler = null;
        private static DatabaseHandler HdbHandler = null;
        public static void InitializeDbHelper()
        {
            CdpHandler = new CDPHandler();
            HdbHandler = new HDBHandler();
        }
        public static async Task<ResponseMessage> UpdateComponentWithFetchedValues(DBCenters dbCenter, string compName, List<string> searchProps, List<string> searchValues, List<ParamCell> impParams)
        {
            if (dbCenter == DBCenters.HDB)
                return await HdbHandler.UpdateComponentWithFetchedValues(compName, searchProps, searchValues, impParams);
            else return await CdpHandler.UpdateComponentWithFetchedValues(compName, searchProps,searchValues, impParams);
        }
        public static async Task<ResponseMessage> UpdateComponentToDB(DBCenters dbCenter, string compName, JObject loadedCompDetails, string compIdValue)
        {
            if (dbCenter == DBCenters.HDB)
                return await HdbHandler.UpdateComponentToDB(compName, loadedCompDetails, compIdValue);
            else return await CdpHandler.UpdateComponentToDB(compName, loadedCompDetails);
        }

        public static async Task<ResponseMessage> GetAttributeValues(DBCenters dbCenter, string[] attrPath)
        {
            if (dbCenter == DBCenters.HDB)
                return await HdbHandler.GetComponentAttr(attrPath);
            return await CdpHandler.GetComponentAttr(attrPath);
        }
        public static async Task<string> TestApi(string url)
        {
            object response = await HdbHandler.FetchDataFromDB(url);
            return response.ToString();
        }
    }
}
