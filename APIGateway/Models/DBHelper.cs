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
        public static async Task<JObject> UpdateComponentWithFetchedValues(DBCenters dbCenter, IEnumerator searchValuesIter, string compName, List<ParamCell> paramCells, List<SearchParamCell> searchCells)
        {
            if (dbCenter == DBCenters.HDB)
                return await HdbHandler.UpdateComponentWithFetchedValues(searchValuesIter, compName, paramCells, searchCells);
            else return await CdpHandler.UpdateComponentWithFetchedValues(searchValuesIter, compName, paramCells);
        }
        public static async Task<bool> UpdateComponentToDB(DBCenters dbCenter, string compName, JObject loadedCompDetails, string compIdValue)
        {
            if (dbCenter == DBCenters.HDB)
                return await HdbHandler.UpdateComponentToDB(compName, loadedCompDetails, compIdValue);
            else return await CdpHandler.UpdateComponentToDB(compName, loadedCompDetails);
        }

        public static async Task<List<string>> GetAttributeValues(DBCenters dbCenter, string[] attrPath)
        {
            if (dbCenter == DBCenters.HDB)
                return await HdbHandler.GetComponentAttr(attrPath);
            return await CdpHandler.GetComponentAttr(attrPath);
        }
    }
}
