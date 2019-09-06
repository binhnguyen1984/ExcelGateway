using DataLibrary.BusinessLogic;
using Syncfusion.XlsIO;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public class ExcelHandler
    {
        private IRange range;
        private int RowCount, ColumnCount;
        private IDictionary<string, string> CompIdNameDict { get; set; }
        private IDictionary<string, string> DataLinksDict { get; set; }
        private IDictionary<string, Component> LoadingCompDict { get; set; }
        private List<string[]> ListTypeProperties { get; set; }
        public ExcelHandler(string ConfigFile)
        {
            InitializeData();
            ReadConfiguration(ConfigFile);
        }

        private void InitializeData()
        {
            CompIdNameDict = new Dictionary<string, string>();
            ListTypeProperties = new List<string[]>();
            DataLinksDict = new Dictionary<string, string>();
            LoadingCompDict = new Dictionary<string, Component>();
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

                ReadConfiguration(Settings.StartSearchSectionHeader, ReadComponentAndDBNames, 1, 1);
                ReadConfiguration(Settings.StartListPropsHeader, ReadListProperties, 1, 4);
                wb.Close();
            }
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
            object compNameValue, compIdNameValue, linkValue;
            if ((compNameValue = range[firstRow, firstCol].Value) != null &&
                (compIdNameValue = range[firstRow, firstCol + 1].Value) != null &&
                (linkValue = range[firstRow, firstCol + 2].Value) != null)
            {
                string compName = compNameValue.ToString();
                string compIdName = compIdNameValue.ToString();
                string linkTo = linkValue.ToString();
                if (compName.Length > 0 && compIdName.Length > 0)
                {
                    if (!CompIdNameDict.ContainsKey(compName))
                        CompIdNameDict.Add(compName, compIdName);
                    if (linkTo.Length > 0 && !DataLinksDict.ContainsKey(compName))
                        DataLinksDict.Add(compName, linkTo);
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
                    ResponseMessage response = Common.SplitPath(propName);
                    if(response.IsSuccessful)
                        ListTypeProperties.Add(response.Data as string[]);
                }
                else firstRow++;
            }
        }

        private ResponseMessage BuildImportParamDict(string[] propNames)
        {
            IDictionary<string, List<Parameter>> paramDict = new Dictionary<string, List<Parameter>>();
            foreach (string propName in propNames)
            {
                ResponseMessage response = Common.SplitPath(propName);
                if (!response.IsSuccessful) return response;
                string[] path = response.Data as string[];
                if (paramDict.ContainsKey(path[0]))
                    paramDict[path[0]].Add(new Parameter(path));
                else paramDict.Add(path[0], new List<Parameter> { new Parameter(path) });
            }
            return new ResponseMessage(true, paramDict);
        }

        private ResponseMessage BuildParamValueDict(string[] paramNames, string[] paramValues)
        {
            IDictionary<string, List<Parameter>> paramValueDict = new Dictionary<string, List<Parameter>>();
            for (int i = 0; i < paramNames.Length; i++)
            {
                ResponseMessage response = Common.SplitPath(paramNames[i]);
                if (!response.IsSuccessful) return response;
                string[] path = response.Data as string[];
                if (paramValueDict.ContainsKey(path[0]))
                    paramValueDict[path[0]].Add(new Parameter(path, paramValues[i]));
                else paramValueDict.Add(path[0], new List<Parameter> { new Parameter(path, paramValues[i]) });
            }
            return new ResponseMessage(true, paramValueDict);
        }

        private IDictionary<string, Constraint> BuildSearchConstraintsDict(string[] searchValues)
        {
            IDictionary<string, Constraint> searchConstraintsDict = new Dictionary<string, Constraint>();
            foreach (string val in searchValues)
            {
                string[] propAndVal = val.Split(Settings.PropValueSplitter);
                if (propAndVal.Length == 2 && propAndVal[1].Length > 0)
                {
                    string[] path = propAndVal[0].Split(Settings.PathSplitter);
                    if (searchConstraintsDict.ContainsKey(path[0]))
                    {
                        Constraint constraint = searchConstraintsDict[path[0]];
                        constraint.Properties.Add(path[1]);
                        constraint.Values.Add(propAndVal[1]);
                    }
                    else searchConstraintsDict.Add(path[0], new Constraint { Properties = new List<string> { path[1] }, Values = new List<string> { propAndVal[1] } });
                }
            }
            return searchConstraintsDict;
        }

        private ResponseMessage DeriveCompIdFromLinkedComponent(string dBAndCompNames)
        {
            if (DataLinksDict.ContainsKey(dBAndCompNames))
            {
                //get the component name this is linked to this component
                string linkedComponentName = DataLinksDict[dBAndCompNames];

                //check if the linked component was already loaded
                if (LoadingCompDict.ContainsKey(linkedComponentName))
                {
                    //get the linked component id value
                    //string linkedCompIdName = CompIdNameDict[linkedCompName];
                    string linkedComponentIdValue = LoadingCompDict[linkedComponentName].GetIdValue();
                    //get the component id value that is associated to the linked component id's value
                    //string compIdName = CompIdNameDict[dBAndCompNames];
                    ResponseMessage response = Common.SplitDBAndCompNames(dBAndCompNames);
                    if (!response.IsSuccessful) return response;
                    string[] split = response.Data as string[];
                    List<string> componentIdValues;
                    if (split[0].ToLower().CompareTo("cdp") == 0)
                        componentIdValues = ProjectLinkProcessor.GetCdpProjectId(linkedComponentIdValue);
                    else if (split[0].ToLower().CompareTo("hdb") == 0)
                        componentIdValues = ProjectLinkProcessor.GetHdbProjectId(Int32.Parse(linkedComponentIdValue));
                    else return new ResponseMessage(false, "Database '"+split[0]+"' is unknown") ;
                    if (componentIdValues==null || componentIdValues.Count == 0) return new ResponseMessage(false, "Component '" + linkedComponentName + "' and '" + dBAndCompNames + "' are not linked to each other");
                    else if (componentIdValues.Count > 1) return new ResponseMessage(false,"Multiple components '"+ dBAndCompNames+"' are linked to the same component '"+ linkedComponentName + "'");
                    return new ResponseMessage(true, componentIdValues[0]);
                }
            }
            return new ResponseMessage(false, "Component '" + dBAndCompNames + "' is not linked to any component in the search");
        }

        private ResponseMessage GetLoadingComponents(IDictionary<string, List<Parameter>> impParamDict, IDictionary<string, Constraint> searchConstraintsDict)
        {
            LoadingCompDict.Clear();
            HashSet<string> allComponents = new HashSet<string>();
            foreach (string compName in searchConstraintsDict.Keys)
                allComponents.Add(compName);
            foreach (string compName in impParamDict.Keys)
                allComponents.Add(compName);
            foreach (string dBAndCompNames in allComponents)
            {
                Constraint constraint = searchConstraintsDict.ContainsKey(dBAndCompNames) ? searchConstraintsDict[dBAndCompNames] : null;
                if (!CompIdNameDict.ContainsKey(dBAndCompNames))
                    return new ResponseMessage(false, "Unique Id is not found for component '" + dBAndCompNames + "'");
                string idName = CompIdNameDict[dBAndCompNames];
                List<Parameter> impParams = impParamDict.ContainsKey(dBAndCompNames) ? impParamDict[dBAndCompNames] : null;
                ResponseMessage response = Component.CreateComponent(dBAndCompNames);
                if (!response.IsSuccessful) return response;
                Component component = response.Data as Component;
                component.IdName = idName;
                component.ImportParams = impParams;
                component.Constraint = constraint;
                LoadingCompDict.Add(dBAndCompNames, component);
            }
            return new ResponseMessage(true, null);
        }
        /// <summary>
        /// Fetch data from the database 
        /// note that the import parameters must be ordered so that parameters that belong to the same component are grouped together
        /// </summary>
        public async Task<ResponseMessage> LoadParametersAsync(string[] importParams, string[] searchConstraints)
        {            
            ResponseMessage response;
            List<object> result = new List<object>();
            response = BuildImportParamDict(importParams);
            if (!response.IsSuccessful) return response;
            IDictionary<string, List<Parameter>> impParamDict = response.Data as IDictionary<string, List<Parameter>>;
            IDictionary<string, Constraint> searchConstraintsDict = BuildSearchConstraintsDict(searchConstraints);

            //get all components w.r.t the search criteria
            response = GetLoadingComponents(impParamDict, searchConstraintsDict);
            if (!response.IsSuccessful) return response;

            //Load these components from the databases
            foreach (KeyValuePair<string, Component> loadingComp in LoadingCompDict)
            {
                string dBAndCompNames = loadingComp.Key;
                Component searchComp = loadingComp.Value;
                if (searchComp.Constraint == null)
                {
                    response = DeriveCompIdFromLinkedComponent(dBAndCompNames);
                    if (!response.IsSuccessful) return response;
                    string compId = response.Data as string;
                    searchComp.Constraint = new Constraint { Properties = new List<string> { searchComp.IdName}, Values = new List<string> { compId} };
                    //response = await searchComp.LoadParametersByCompId(compId);
                }
                response = await searchComp.LoadParameters();
                if (!response.IsSuccessful) return response;

                //add parameters to the result
                result.AddRange(searchComp.ImportParams.Select(param => param.Value));
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
            ResponseMessage response = BuildParamValueDict(paramNames, paramValues);
            if (!response.IsSuccessful) return response;
            IDictionary<string, List<Parameter>> exportParamDict = response.Data as IDictionary<string, List<Parameter>>;
            foreach (KeyValuePair<string, List<Parameter>> exportParamEntry in exportParamDict)
            {
                string dBAndCompNames = exportParamEntry.Key;
                if (!LoadingCompDict.ContainsKey(dBAndCompNames))
                    return new ResponseMessage(false, "Component '" + dBAndCompNames + "' was not loaded and thus cannot be updated");
                if (!CompIdNameDict.ContainsKey(dBAndCompNames))
                    return new ResponseMessage(false, "No information about component '" + dBAndCompNames + "' was found");

                Component searchComp = LoadingCompDict[dBAndCompNames];
                searchComp.ExportParams = exportParamEntry.Value;
                //update parameters
                response = searchComp.UpdateParamsWithNewValues();
                if (!response.IsSuccessful)
                    return response;
                //make a query to the corresponding database server
                response = await searchComp.UpdateComponentToDB();
                if (!response.IsSuccessful)
                    return response;// update failed
            }
            return new ResponseMessage(true, null); // update succeeded
        }
        public HashSet<string> GetListTypeProps(IEnumerable<string[]> props)
        {
            HashSet<string> listTypeProps = new HashSet<string>();
            foreach (var prop in props)
            {
                if (prop.Length > 2 && prop[2].Length > 0 && prop[2].All(char.IsDigit))
                {
                    foreach (var typeProp in this.ListTypeProperties)
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

