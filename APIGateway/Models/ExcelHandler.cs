using Newtonsoft.Json.Linq;
using Syncfusion.XlsIO;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using static APIGateway.Models.Settings;

namespace APIGateway.Models
{
    public class ExcelHandler
    {
        private const string StartSearchSectionHeader = "Search components"; //the text appears first in the search section
        private const string StartListPropsHeader = "List properties";
        private const string HdbName = "HDB";
        private IRange range;
        private int RowCount, ColumnCount;
        private IDictionary<string, string> SearchCompIDValues { get; set; }
        private IDictionary<string, ComponentInfo> SearchCompDict { get; set; }
        private IDictionary<string, JObject> ExportLoadedCompList { get; set; } // a dictionary of components loaded from the database which are to be updated
        private List<string[]> ListTypeProperties { get; set; }
        public ExcelHandler(string ConfigFile)
        {
            InitializeData();
            ReadConfiguration(ConfigFile);
            InitializeExportLoadedCompList();
        }
        private void InitializeData()
        {
            this.SearchCompDict = new Dictionary<string, ComponentInfo>();
            this.SearchCompIDValues = new Dictionary<string, string>();
            this.ListTypeProperties = new List<string[]>();
            ExportLoadedCompList = new Dictionary<string, JObject>();
        }

        private void ReadConfiguration(string ConfigFile)
        {
            FileStream configFile = new FileStream(ConfigFile, FileMode.Open);
            using (ExcelEngine excelEngine = new ExcelEngine())
            {
                IWorkbook wb = excelEngine.Excel.Workbooks.Open(configFile);
                var ws = wb.Worksheets[0];
                range = ws.Range;
                RowCount = ws.Rows.Length;
                ColumnCount = ws.Columns.Length;

                ReadConfiguration(StartSearchSectionHeader, ReadComponentAndDBNames,1,1);
                ReadConfiguration(StartListPropsHeader, ReadListProperties,1,5);
                wb.Close();
            }
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

        private void FindFirstRowStartWithText(string text, ref int firstRow, ref int firstCol)
        {
            for (; firstCol < ColumnCount; firstCol++)
                for (; firstRow <= RowCount; firstRow++)
                {
                    var cell = range[firstRow, firstCol];
                    if (cell != null && cell.Value != null && string.Compare(cell.Value.ToString(), text) == 0)
                        return;
                }
        }

        delegate void ReadConfigurationHandler(ref int firstRow, ref int firstCol);

        private void ReadConfiguration(string StartWithText, ReadConfigurationHandler readConfigHandler, int firstRow, int firstCol)
        {
            FindFirstRowStartWithText(StartWithText, ref firstRow, ref firstCol);
            firstRow++; //read the title line
            while (firstRow < RowCount)
            {
                readConfigHandler(ref firstRow, ref firstCol);
                firstRow++; // read an empty line
            }
        }

        private void ReadComponentAndDBNames(ref int firstRow, ref int firstCol)
        {
            object compNameValue, dbNameValue, compIDNameValue;
            if ((compNameValue = range[firstRow, firstCol].Value) != null &&
                (dbNameValue = range[firstRow, firstCol+1].Value) != null &&
                (compIDNameValue = range[firstRow, firstCol+2].Value) != null)
            {
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
        }

        private void ReadListProperties(ref int firstRow, ref int firstCol)
        {
            object propNameValue;
            if ((propNameValue = range[firstRow, firstCol].Value) != null)
            {
                string propName = propNameValue.ToString();
                if (propName.Length > 0)
                {
                    string[] path = propName.Split(Settings.PathSplitter);
                    if(path.Length==2)
                        ListTypeProperties.Add(path);
                }
                else firstRow++;
            }
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

        private IDictionary<string, List<ParamCell>> BuildParamDict(string[] propNames)
        {
            IDictionary<string, List<ParamCell>> paramDict = new Dictionary<string, List<ParamCell>>();
            foreach (string propName in propNames)
            {
                string[] path = propName.Split(Settings.PathSplitter);
                if (paramDict.ContainsKey(path[0]))
                    paramDict[path[0]].Add(new ParamCell(path));
                else paramDict.Add(path[0], new List<ParamCell> { new ParamCell(path) });
            }
            return paramDict;
        }

        private IDictionary<string, List<ParamCell>> BuildParamValueDict(string[] paramNames, string[] paramValues)
        {
            IDictionary<string, List<ParamCell>> paramValueDict = new Dictionary<string, List<ParamCell>>();
            for (int i = 0; i < paramNames.Length; i++)
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
            foreach (string val in searchValues)
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
            List<object> result = new List<object>();
            IDictionary<string, List<ParamCell>> impParamDict = BuildParamDict(propNames);
            IDictionary<string, (List<string>, List<string>)> searchParamDict = BuildSearchParamDict(searchValues);
            foreach (KeyValuePair<string, List<ParamCell>> impParamsEntry in impParamDict)
            {
                string compName = impParamsEntry.Key;
                //find all the parameters that come from the same component
                List<ParamCell> impParams = impParamsEntry.Value;
                if (!searchParamDict.ContainsKey(compName))
                    return new ResponseMessage(false, "Component " + compName + " is out of scope");
                (List<string>, List<string>) propsAndValues = searchParamDict[compName];
                if (!SearchCompDict.ContainsKey(compName))
                    return new ResponseMessage(false, "Missing database information for component '" + compName+"'");
                ComponentInfo updateCompInfo = SearchCompDict[compName];

                //make a query to the corresponding database server
                ResponseMessage response = await DBHelper.UpdateComponentWithFetchedValues(updateCompInfo.FromDB, compName, propsAndValues.Item1, propsAndValues.Item2, impParams);
                if (!response.IsSuccessful)
                    return response;
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
            foreach (KeyValuePair<string, List<ParamCell>> exportParamEntry in exportParamDict)
            {
                string compName = exportParamEntry.Key;
                List<ParamCell> exportParams = exportParamEntry.Value;
                if (!ExportLoadedCompList.ContainsKey(compName))
                    return new ResponseMessage(false, "Component '" + compName + "' was not loaded and thus cannot be updated");
                if (!SearchCompDict.ContainsKey(compName))
                    return new ResponseMessage(false, "No information about component '" + compName + "' was found");

                JObject loadedComp = ExportLoadedCompList[compName];
                ComponentInfo updateCompInfo = SearchCompDict[compName]; ;
                string compIdValue = SearchCompIDValues[updateCompInfo.CompIdName]; ;

                //update parameters
                ResponseMessage response = UpdateParamsWithNewValues(updateCompInfo.CompIdName, compIdValue, loadedComp, exportParams);
                if (!response.IsSuccessful)
                    return response;
                //make a query to the corresponding database server
                response = await DBHelper.UpdateComponentToDB(updateCompInfo.FromDB, compName, loadedComp, compIdValue);
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

        public HashSet<string> GetListTypeProps(IEnumerable<string[]> props)
        {
            HashSet<string> listTypeProps = new HashSet<string>();
            foreach(var prop in props)
            {
                if(prop.Length>2 && prop[2].Length>0 && prop[2].All(char.IsDigit))
                {
                    foreach(var typeProp in this.ListTypeProperties)
                    {
                        if (typeProp[0].CompareTo(prop[0]) == 0 && typeProp[1].CompareTo(prop[1]) == 0)
                            listTypeProps.Add(prop[1]);
                    }
                }
            }
            return listTypeProps;
        }
    }
}

