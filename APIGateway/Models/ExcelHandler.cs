using Newtonsoft.Json.Linq;
using Syncfusion.XlsIO;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static APIGateway.Models.Settings;

namespace APIGateway.Models
{
    public class ExcelHandler
    {
        private const string ComponentSectionText = "Path"; //the text appears first in the component section
        private const string SearchSectionText = "Search criteria"; //the text appears first in the search section
        private const string ReadOpText = "READ";
        private const string ReadWriteOpText = "READ/WRITE";
        private const string HdbName = "HDB";
        private IRange range;
        private int RowCount, ColumnCount;
        private IDictionary<string, string> SearchCompIDValues { get; set; }
        private IDictionary<string, ComponentInfo> SearchCompDict { get; set; }
        private IDictionary<string, JObject> ExportLoadedCompList { get; set; } // a dictionary of components loaded from the database which are to be updated

        public ExcelHandler(IWorksheet ws)
        {
            SetExcelGlobals(ws);
            InitializeData();
            ReadConfiguration();
            InitializeExportLoadedCompList();
        }



        private void InitializeData()
        {
            this.SearchCompDict = new Dictionary<string, ComponentInfo>();
            this.SearchCompIDValues = new Dictionary<string, string>();
            ExportLoadedCompList = new Dictionary<string, JObject>();
        }

        private void SetExcelGlobals(IWorksheet ws)
        {
            range = ws.Range;
            RowCount = ws.Rows.Length;
            ColumnCount = ws.Columns.Length;
        }

        private void ReadConfiguration()
        {
            int firstRow = 1;
            ReadSearchCriteria(ref firstRow);
        }
        private void InitializeExportLoadedCompList()
        {
            foreach (string compName in SearchCompDict.Keys)
                ExportLoadedCompList.Add(compName, null);
        }

        private DBCenters GetDBIdentity(string dbName)
        {
            if (string.Compare(dbName.ToUpper(), HdbName) == 0) return DBCenters.HDB;
            return DBCenters.CDP;
        }

        private bool FindFirstRowStartWithText(string text, ref int firstRow)
        {
            for (int col = 1; col < ColumnCount; col++)
                for (; firstRow <= RowCount; firstRow++)
                {
                    var cell = range[firstRow, col];
                    if (cell != null && cell.Value != null && string.Compare(cell.Value.ToString(), text) == 0)
                        return true;
                }
            return false;
        }

        private void ReadSearchCriteria(ref int firstRow)
        {
            FindFirstRowStartWithText(SearchSectionText, ref firstRow);
            firstRow++; //read the title line
            while (firstRow < RowCount)
            {
                ReadComponentAndDBNames(ref firstRow);
                firstRow++; // read an empty line
            }
        }

        private void ReadComponentAndDBNames(ref int firstRow)
        {
            object compNameValue, dbNameValue, compIDNameValue;
            if ((compNameValue = range[firstRow, 1].Value) == null ||
                (dbNameValue = range[firstRow, 2].Value) == null ||
                (compIDNameValue = range[firstRow, 3].Value) == null)
                throw new Exception("Missing values in the search section");
            string compName = compNameValue.ToString();
            string dbName = dbNameValue.ToString();
            string compIDName = compIDNameValue.ToString();
            if (compName.Length > 0 && dbName.Length > 0 && compIDName.Length > 0)
            {
                DBCenters FromDB = GetDBIdentity(dbName);
                ComponentInfo updateCompInfo = new ComponentInfo(FromDB, compIDName);
                if (!SearchCompDict.ContainsKey(compName))
                    SearchCompDict.Add(compName, updateCompInfo);
            }
            else firstRow++;
        }

        /// <summary>
        /// Store information about the components whose parameters are to be updated to the database
        /// </summary>
        /// <param name="compName"></param>
        /// <param name="compIDName"></param>
        /// <param name="componentDetails"></param>
        private void StoreUpdateInfo(string compName, string compIDName, JObject componentDetails)
        {
            //store the loaded component for update later
            ExportLoadedCompList[compName] = componentDetails;

            //we save the value of the ID of the component if its parameters are to be updated to the database
            string compIDValue = (string)componentDetails[compIDName];
            //store the value of the componentID which is used in update request
            if (!SearchCompIDValues.ContainsKey(compIDName)) SearchCompIDValues.Add(compIDName, compIDValue);
            else SearchCompIDValues[compIDName] = compIDValue;
        }

        private IDictionary<string,List<ParamCell>> BuildParamDict(string[] propNames)
        {
            IDictionary<string, List<ParamCell>> paramDict = new Dictionary<string, List<ParamCell>>();
            foreach(string propName in propNames)
            {
                string[] path = propName.Split(Settings.PathSplitter);
                if (paramDict.ContainsKey(path[0]))
                    paramDict[path[0]].Add(new ParamCell(path));
                else paramDict.Add(path[0], new List<ParamCell> { new ParamCell(path)});
            }
            return paramDict;
        }

        private IDictionary<string, List<ParamCell>> BuildParamValueDict(string[] paramNames, string[] paramValues)
        {
            IDictionary<string, List<ParamCell>> paramValueDict = new Dictionary<string, List<ParamCell>>();
            for (int i = 0; i<paramNames.Length; i++)
            {
                string[] path = paramNames[i].Split(Settings.PathSplitter);
                if (paramValueDict.ContainsKey(path[0]))
                    paramValueDict[path[0]].Add(new ParamCell(path, paramValues[i]));
                else paramValueDict.Add(path[0], new List<ParamCell> { new ParamCell(path, paramValues[i]) });
            }
            return paramValueDict;
        }

        private IDictionary<string, (List<string>, List<string>)> BuildSearchParamDict(string[] searchValues)
        {
            IDictionary<string, (List<string>, List<string>)> searchParamDict = new Dictionary<string, (List<string>, List<string>)>();
            foreach(string val in searchValues)
            {
                string[] propAndVal = val.Split(Settings.PropValueSplitter);
                string[] path = propAndVal[0].Split(Settings.PathSplitter);
                if (searchParamDict.ContainsKey(path[0]))
                {
                    (List<string>, List<string>) listPair = searchParamDict[path[0]];
                    listPair.Item1.Add(path[1]);
                    listPair.Item2.Add(propAndVal[1]);
                }
                else searchParamDict.Add(path[0], (new List<string> { path[1] }, new List<string> { propAndVal[1] }));
            }
            return searchParamDict;
        }

        /// <summary>
        /// Fetch data from the database 
        /// note that the import parameters must be ordered so that parameters that belong to the same component are grouped together
        /// </summary>
        public async Task<ResponseMessage> FetchParamsFromDBAsync(string[] propNames, string[] searchValues)
        {
            List<string> result = new List<string>();
            IDictionary<string, List<ParamCell>> impParamDict = BuildParamDict(propNames);
            IDictionary<string, (List<string>, List<string>)> searchParamDict = BuildSearchParamDict(searchValues);
            foreach (KeyValuePair<string, (List<string>, List<string>)> searchParams in searchParamDict)
            {
                string compName = searchParams.Key;
                //find all the parameters that come from the same component
                List<ParamCell> impParams = impParamDict[compName];
                if (impParams == null) return new ResponseMessage(false, "Component "+ compName+" has no import parameters");
                ComponentInfo updateCompInfo = SearchCompDict[compName];
                if (updateCompInfo == null) return new ResponseMessage(false, "Missing database information for component "+compName);
                //make a query to the corresponding database server
                ResponseMessage response = await DBHelper.UpdateComponentWithFetchedValues(updateCompInfo.FromDB, compName, searchParams.Value.Item1, searchParams.Value.Item2, impParams);
                if (!response.IsSuccessful) return response;
                //store the loaded component for update later
                StoreUpdateInfo(compName, updateCompInfo.CompIdName, response.Data as JObject);

                //add parameters to the result
                result.AddRange(impParams.Select(param => param.Value));
            }
            return new ResponseMessage(true, result);
        }

        /// <summary>
        /// Update parameters to the database
        /// </summary>
        /// <param name="paramValues"></param>
        /// <returns></returns>
        public async Task<ResponseMessage> UpdateParametersAsync(string[] paramNames, string[] paramValues)
        {
            IDictionary<string, List<ParamCell>> exportParamDict = BuildParamValueDict(paramNames, paramValues);
            foreach (KeyValuePair<string, JObject> loadedComp in ExportLoadedCompList)
            {
                string compName = loadedComp.Key;
                //find all export parameters that belong to this component
                List<ParamCell> exportParams = exportParamDict[compName];

                //update parameters
                ComponentInfo updateCompInfo = SearchCompDict[compName]; ;
                string compIdValue = SearchCompIDValues[updateCompInfo.CompIdName]; ;
                ResponseMessage response = UpdateParamsWithNewValues(updateCompInfo.CompIdName, compIdValue, loadedComp.Value, exportParams);
                if (!response.IsSuccessful)
                    return response;
                //make a query to the corresponding database server
                response = await DBHelper.UpdateComponentToDB(updateCompInfo.FromDB, compName, loadedComp.Value, compIdValue);
                if (!response.IsSuccessful)
                    return response;// update failed
            }
            return new ResponseMessage(true, null); // update succeeded
        }

        /// <summary>
        /// Update the component with new parameters
        /// </summary>
        /// <param name="compIdName"></param>
        /// <param name="compIdValue"></param>
        /// <param name="loadedCompDetails"></param>
        /// <param name="exportParams"></param>
        /// <returns></returns>
        private ResponseMessage UpdateParamsWithNewValues(string compIdName, string compIdValue, JObject loadedCompDetails, List<ParamCell> exportParams)
        {
            //update the loaded component with new values
            foreach (ParamCell paramCell in exportParams)
            {
                ResponseMessage updateStatus = paramCell.UpdateValueTo(loadedCompDetails, compIdName, compIdValue);
                if (!updateStatus.IsSuccessful) return updateStatus;
            }
            return new ResponseMessage(true, null);
        }
    }
}

