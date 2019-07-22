using Newtonsoft.Json.Linq;
using Syncfusion.XlsIO;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using static APIGateway.Models.Settings;

namespace APIGateway.Models
{
    public class ExcelSheetModel
    {
        private const string ComponentSectionText = "Path"; //the text appears first in the component section
        private const string SearchSectionText = "Search criteria"; //the text appears first in the search section
        private const string ReadOpText = "READ";
        private const string ReadWriteOpText = "READ/WRITE";
        private const string HdbName = "HDB";
        private List<ParamCell> ImportParamList { get; set; } //list of import parameters
        private IRange range;
        private int RowCount, ColumnCount;
        private IDictionary<string, JObject> ExportLoadedCompList { get; set; } // a dictionary of components loaded from the database which are to be updated
        private IDictionary<string, string> SearchCompIDValues { get; set; }

        public IDictionary<string, SearchCompInfo> SearchParamsDict { get; private set; }
        public List<ParamCell> ExportParamList { get; private set; } //list of export parameters
        public ExcelSheetModel(string fileName)
        {
            InitializeData();
            InitializeExcelHelper(fileName);
            ReadConfiguration();
            InitializeExportLoadedCompList();
        }

        private void InitializeExportLoadedCompList()
        {
            ExportLoadedCompList = new Dictionary<string, JObject>();
            foreach (ParamCell paramCell in ExportParamList)
            {
                if (!ExportLoadedCompList.ContainsKey(paramCell.Props[0]))
                    ExportLoadedCompList.Add(paramCell.Props[0], null);
            }
        }

        private void InitializeData()
        {
            this.ImportParamList = new List<ParamCell>();
            this.ExportParamList = new List<ParamCell>();
            this.SearchParamsDict = new Dictionary<string, SearchCompInfo>();
            this.SearchCompIDValues = new Dictionary<string, string>();
        }

        private void InitializeExcelHelper(string filePath)
        {
            ExcelEngine excelEngine = new ExcelEngine();
            IApplication application = excelEngine.Excel;
            application.DefaultVersion = ExcelVersion.Excel2016;

            FileStream configFile = new FileStream(filePath, FileMode.Open);
            IWorkbook wb = application.Workbooks.Open(configFile);
            IWorksheet ws = wb.Worksheets[0];
            range = ws.Range;
            RowCount = ws.Rows.Length;
            ColumnCount = ws.Columns.Length;
        }

        private void ReadConfiguration()
        {
            int firstRow = 1;
            ReadDataCellList(ref firstRow);
            ReadSearchCriteria(ref firstRow);
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

        private void ReadDataCellList(ref int firstRow)
        {
            //find the first row of the data
            if (FindFirstRowStartWithText(ComponentSectionText, ref firstRow))
            {
                firstRow++;
                while (firstRow <= RowCount)
                {
                    object pathValue, valueLocValue, opStrValue;
                    if ((pathValue = range[firstRow, 1].Value) == null ||
                       (valueLocValue = range[firstRow, 2].Value) == null ||
                       (opStrValue = range[firstRow, 3].Value) == null)
                        break;
                    string path = pathValue.ToString();
                    string valueLocation = valueLocValue.ToString();
                    string opStr = opStrValue.ToString().ToUpper();
                    if (path.Length > 0 && valueLocation.Length > 0 && opStr.Length > 0)
                    {
                        ParamCell cell = new ParamCell(path, valueLocation);
                        if (string.Compare(opStr, ReadWriteOpText) == 0)
                        {
                            ImportParamList.Add(cell);
                            ExportParamList.Add(cell);
                        }
                        else if (string.Compare(opStr, ReadOpText) == 0)
                            ImportParamList.Add(cell);
                        else ExportParamList.Add(cell);
                        firstRow++;
                    }
                    else break;
                }
            }
            else throw new Exception("Configuration for loaded SearchComponents is invalid");
        }

        private void ReadSearchCriteria(ref int firstRow)
        {
            if (FindFirstRowStartWithText(SearchSectionText, ref firstRow))
            {
                firstRow++;
                List<SearchParamCell> searchCells = null;
                ReadComponentAndDBNames(ref firstRow, ref searchCells);
                ReadComponentSearchCriteria(ref firstRow, ref searchCells);
            }
            else throw new Exception("Configuration in the search section is invalid");
        }

        private void ReadComponentSearchCriteria(ref int firstRow, ref List<SearchParamCell> searchCells)
        {
            while (firstRow <= RowCount)
            {
                object propNameValue, valueLocValue, cellLocValue, displayTextValue;
                if ((propNameValue = range[firstRow, 1].Value) == null ||
                    (valueLocValue = range[firstRow, 2].Value) == null ||
                    (cellLocValue = range[firstRow, 3].Value) == null ||
                    (displayTextValue = range[firstRow, 4].Value) == null)
                    break;

                string propName = propNameValue.ToString();
                string valueLocation = valueLocValue.ToString();
                string cellLocation = cellLocValue.ToString();
                string displayText = displayTextValue.ToString();
                if (propName.Length > 0 && cellLocation.Length > 0 && valueLocation.Length > 0 && displayText.Length > 0)
                {
                    SearchParamCell cell = new SearchParamCell(cellLocation, valueLocation, displayText, propName);
                    searchCells.Add(cell);
                    firstRow++;
                }
                else break;
            }
        }

        private void ReadComponentAndDBNames(ref int firstRow, ref List<SearchParamCell> searchCells)
        {
            object compNameValue, dbNameValue, compIDNameValue;
            if ((compNameValue = range[firstRow, 1].Value) == null ||
                (dbNameValue = range[firstRow, 2].Value) == null ||
                (compIDNameValue = range[firstRow, 5].Value) == null)
                throw new Exception("Missing values in the search section");
            string compName = compNameValue.ToString();
            string dbName = dbNameValue.ToString();
            string compIDName = compIDNameValue.ToString();
            if (compName.Length > 0 && dbName.Length > 0 && compIDName.Length > 0)
            {
                DBCenters FromDB = GetDBIdentity(dbName);
                UpdateCompInfo updateCompInfo = new UpdateCompInfo(FromDB, compIDName);
                if (!SearchParamsDict.ContainsKey(compName))
                {
                    searchCells = new List<SearchParamCell>();
                    SearchParamsDict.Add(compName, new SearchCompInfo(updateCompInfo, searchCells));
                }
                else searchCells = SearchParamsDict[compName].SearchParamList;
                firstRow++;
            }
            else throw new Exception("Specification of database for " + compName + " is missing");
        }

        /// <summary>
        /// return filter string corresponding to the search conditions for a given component
        /// this filter is specific to HDB 
        /// </summary>
        /// <returns></returns>
        delegate string GetConstraint(string varName, string value);
        private string GetComponentFilterStr(string compName, string[] searchValues, ref int searchValueId, GetConstraint getConstraint)
        {
            List<SearchParamCell> searchCells = SearchParamsDict[compName].SearchParamList;
            int searchCondNum = searchCells.Count;
            int searchValueLen = searchValues.Length;
            if (searchCondNum > 0)
            {
                int i = 0;
                while (searchValueId < searchValueLen && searchValues[searchValueId].Length == 0)
                {
                    searchValueId++;
                    i++;
                }
                if (i < searchCondNum)
                {
                    string filter = "$filter=" + getConstraint(searchCells[i].PropName, searchValues[searchValueId]);
                    i++;
                    searchValueId++;
                    for (; i < searchCondNum; i++)
                    {
                        if (searchValues[searchValueId].Length > 0)
                            filter += " and " + getConstraint(searchCells[i].PropName, searchValues[searchValueId]);
                        searchValueId++;
                    }
                    return filter;
                }
            }
            return "";
        }

        private string GetHDBConstraint(string propName, string value)
        {
            return propName + " eq '" + value + "'";
        }

        private string GetCDPConstraint(string propName, string value)
        {
            return "";
        }
        /// <summary>
        /// return the searching URL for a given component 
        /// this is specific to HDB
        /// </summary>
        /// <param name="compName"></param>
        /// <returns></returns>
        private string GetHDBSearchURL(string compName, string[] searchValues, ref int searchValueId)
        {
            return HDBUrl + compName + ".json?" + GetComponentFilterStr(compName, searchValues, ref searchValueId, GetHDBConstraint);
        }

        /// <summary>
        /// return the searching URL for a given component 
        /// this is specific to CDP
        /// </summary>
        /// <param name="compName"></param>
        /// <returns></returns>
        private string GetCDPSearchURL(string compName, string[] searchValues, ref int searchValueId)
        {
            return CDPUrl + compName + GetComponentFilterStr(compName, searchValues, ref searchValueId, GetCDPConstraint);
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
            if (ExportLoadedCompList.ContainsKey(compName))
                ExportLoadedCompList[compName] = componentDetails;

            //we save the value of the ID of the component if its parameters are to be updated to the database
            if (ExportLoadedCompList.ContainsKey(compName))
            {
                //get value of the componentID from the loaded component
                string compIDValue = (string)componentDetails[compIDName];
                //store the value of the componentID which is used in update request
                if (!SearchCompIDValues.ContainsKey(compIDName)) SearchCompIDValues.Add(compIDName, compIDValue);
                else SearchCompIDValues[compIDName] = compIDValue;
            }
        }
        /// <summary>
        /// Fetch data from the database 
        /// </summary>
        public async Task<List<ParamCell>> FetchParamsFromDBAsync(string[] searchValues)
        {
            List<ParamCell> result = new List<ParamCell>();
            int searchValueId = 0;
            foreach (KeyValuePair<string, SearchCompInfo> compInfo in SearchParamsDict)
            {
                string compName = compInfo.Key;
                UpdateCompInfo updateCompInfor = compInfo.Value.UpdateInfo;
                //get the name of the component ID
                string compIDName = updateCompInfor.CompIDName;

                //find all the cells whose data comes from the same component
                List<ParamCell> paramCells = ImportParamList.FindAll(paramCell => string.Compare(paramCell.Props[0], compName) == 0);

                //make a query to the corresponding database server
                string searchUrl = updateCompInfor.FromDB == DBCenters.HDB ? GetHDBSearchURL(compName, searchValues, ref searchValueId) : GetCDPSearchURL(compName, searchValues, ref searchValueId);
                JObject response = await APICaller.FetchData(searchUrl);
                JObject responseBody = (JObject)response["message"];
                JObject componentDetails = (JObject)responseBody[compName][0]; //if the reponse contains more than one component value, then only the first one is selected

                //store the loaded component for update later
                StoreUpdateInfo(compName, compIDName, componentDetails);

                //fill the values to all the component cells
                foreach (ParamCell paramCell in paramCells)
                    paramCell.SaveValue(componentDetails);
                result.AddRange(paramCells);
            }
            return result;
        }

        private string GetHDBPutUrl(string compName, string compID)
        {
            return HDBUrl + compName + "(" + compID + ")";
        }

        private string GetCDPPutUrl(string compName, string compID)
        {
            return HDBUrl + compName + "/" + compID;
        }

        /// <summary>
        /// Update parameters to the database
        /// </summary>
        /// <param name="paramValues"></param>
        /// <returns></returns>
        public async Task<int> UpdateParametersAsync(string[] paramValues)
        {
            foreach (KeyValuePair<string, JObject> loadedComp in ExportLoadedCompList)
            {
                string compName = loadedComp.Key;
                //find all export parameters that belong to this component
                List<ParamCell> tobeUpdatedParams = ExportParamList.FindAll(paramCell => string.Compare(paramCell.Props[0], compName) == 0);

                //update parameters
                int paramIndex = 0;
                foreach (ParamCell paramCell in tobeUpdatedParams)
                {
                    paramCell.Value = paramValues[paramIndex];
                    paramIndex++;
                }

                //get information about the component to be updated
                UpdateCompInfo updateCompInfo = SearchParamsDict[compName].UpdateInfo;

                //get the value of the componentID which should be in the search parameters
                string compIDValue = SearchCompIDValues[updateCompInfo.CompIDName];

                //get the current loaded component
                JObject loadedCompDetails = loadedComp.Value;

                //update the loaded component with new values
                foreach (ParamCell paramCell in tobeUpdatedParams)
                    paramCell.UpdateValueTo(loadedCompDetails);

                //make a query to the corresponding database server
                string updateUrl = updateCompInfo.FromDB == DBCenters.HDB ? GetHDBPutUrl(compName, compIDValue) : GetCDPPutUrl(compName, compIDValue);

                JObject response = await APICaller.UpdateData(updateUrl, loadedCompDetails.ToString());
                int code = (int)response["code"];
                if (code != 200) return code;
            }
            return 200;
        }
    }
}

