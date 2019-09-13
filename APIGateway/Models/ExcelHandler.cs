using Syncfusion.XlsIO;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public class ExcelHandler
    {
        private IRange range;
        private int RowCount, ColumnCount;
        private IDictionary<string, string> CompIdNameDict { get; set; }
        private IDictionary<string, string> DataLinksDict { get; set; }
        private IDictionary<string, Component> LoadedCompDict { get; set; }
        private List<string> ListTypeProperties { get; set; }
        public ExcelHandler(string ConfigFile)
        {
            InitializeData();
            ReadConfiguration(ConfigFile);
        }

        private void InitializeData()
        {
            CompIdNameDict = new Dictionary<string, string>();
            ListTypeProperties = new List<string>();
            DataLinksDict = new Dictionary<string, string>();
            LoadedCompDict = new Dictionary<string, Component>();
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
                    ListTypeProperties.Add(propName);
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
                if (LoadedCompDict.ContainsKey(linkedComponentName))
                {
                    //get the linked component id value
                    //string linkedComponentIdValue = LoadedCompDict[linkedComponentName].GetIdValue();
                    //get the component id value that is associated to the linked component id's value
                    ResponseMessage response = Common.SplitDBAndCompNames(dBAndCompNames);
                    if (!response.IsSuccessful) return response;
                    string[] split = response.Data as string[];
                    List<string> componentIdValues;
                    if (split[0].ToLower().CompareTo("cdp") == 0)
                    {
                        //componentIdValues = ProjectLinkProcessor.GetCdpProjectId(linkedComponentIdValue);
                        componentIdValues = new List<string> { "36005" }; //hard-code this for testing purpose
                    }
                    else if (split[0].ToLower().CompareTo("hdb") == 0)
                    {
                        //try
                        //{
                        //    int cdpComponentId = Int32.Parse(linkedComponentIdValue);
                        //    componentIdValues = ProjectLinkProcessor.GetHdbProjectId(cdpComponentId);
                        //}
                        //catch (Exception e)
                        //{
                        //    return new ResponseMessage(false, e.Message);
                        //}
                        componentIdValues = new List<string> { "fc6b1c42-865c-472f-ae59-000364028f43" }; //hard-code this value for testing purpose
                    }
                    else return new ResponseMessage(false, "Database '" + split[0] + "' is unknown");
                    if (componentIdValues == null || componentIdValues.Count == 0) return new ResponseMessage(false, "Component '" + linkedComponentName + "' and '" + dBAndCompNames + "' are not linked to each other");
                    else if (componentIdValues.Count > 1) return new ResponseMessage(false, "Multiple components '" + dBAndCompNames + "' are linked to the same component '" + linkedComponentName + "'");
                    return new ResponseMessage(true, componentIdValues[0]);
                }
            }
            return new ResponseMessage(false, "Component '" + dBAndCompNames + "' is not linked to any component in the search");
        }

        private ResponseMessage CreateComponent(string dBAndCompNames, Constraint constraint)
        {
            if (!CompIdNameDict.ContainsKey(dBAndCompNames))
                return new ResponseMessage(false, "Unique Id is not found for component '" + dBAndCompNames + "'");
            string idName = CompIdNameDict[dBAndCompNames];
            ResponseMessage response = Component.CreateComponent(dBAndCompNames);
            if (!response.IsSuccessful) return response;
            Component component = response.Data as Component;
            component.IdName = idName;
            component.Constraint = constraint;
            return new ResponseMessage(true, component);
        }

        private async Task<ResponseMessage> LoadSearchComponents(WindowsIdentity callerIdentity, IDictionary<string, List<Parameter>> impParamDict, IDictionary<string, Constraint> searchConstraintsDict)
        {
            foreach (KeyValuePair<string, Constraint> searchComp in searchConstraintsDict)
            {
                string dBAndCompName = searchComp.Key;
                List<Parameter> impParams = impParamDict.ContainsKey(dBAndCompName) ? impParamDict[dBAndCompName] : null;
                ResponseMessage response = CreateComponent(dBAndCompName, searchComp.Value);
                if (!response.IsSuccessful) return response;
                Component component = response.Data as Component;
                var paramPaths = impParams?.Select(param => param.PropPath);
                response = await WindowsIdentity.RunImpersonated(callerIdentity.AccessToken,
                    async () => await component.LoadParameters(paramPaths, impParams));
                if (!response.IsSuccessful) return response;
                LoadedCompDict.Add(searchComp.Key, component);
            }
            return new ResponseMessage(true, null);
        }

        private async Task<ResponseMessage> LoadLinkedComponent(WindowsIdentity callerIdentity, string dBAndCompNames, List<Parameter> impParams)
        {
            ResponseMessage response = DeriveCompIdFromLinkedComponent(dBAndCompNames);
            if (!response.IsSuccessful) return response;
            string compId = response.Data as string;

            //get the component object
            response = CreateComponent(dBAndCompNames, null);
            if (!response.IsSuccessful) return response;
            Component component = response.Data as Component;
            //searchComp.Constraint = new Constraint { Properties = new List<string> { searchComp.IdName}, Values = new List<string> { compId} };
            response = await WindowsIdentity.RunImpersonated(callerIdentity.AccessToken,
                async () => await component.LoadParametersByCompId(compId, impParams));
            if (!response.IsSuccessful) return response;
            return new ResponseMessage(true, component);
        }

        private async Task<ResponseMessage> LoadImportParamsFromSearchComponents(WindowsIdentity callerIdentity, string[] importParams, string[] searchConstraints)
        {
            ResponseMessage response = BuildImportParamDict(importParams);
            if (!response.IsSuccessful) return response;
            IDictionary<string, List<Parameter>> impParamDict = response.Data as IDictionary<string, List<Parameter>>;
            IDictionary<string, Constraint> searchConstraintsDict = BuildSearchConstraintsDict(searchConstraints);

            //get all components w.r.t the search criteria
            LoadedCompDict.Clear();
            response = await LoadSearchComponents(callerIdentity, impParamDict, searchConstraintsDict);
            if (!response.IsSuccessful) return response;
            return new ResponseMessage(true, impParamDict);
        }

        private async Task<ResponseMessage> LoadParamsFromLinkedComponents(WindowsIdentity callerIdentity, string dBAndCompNames, List<Parameter> paramList)
        {
            ResponseMessage response = await LoadLinkedComponent(callerIdentity, dBAndCompNames, paramList);
            if (!response.IsSuccessful) return response;
            Component component = response.Data as Component;
            LoadedCompDict.Add(dBAndCompNames, component);
            return new ResponseMessage(true, component);
        }
        /// <summary>
        /// Fetch data from the database 
        /// note that the import parameters must be ordered so that parameters that belong to the same component are grouped together
        /// </summary>
        public async Task<ResponseMessage> LoadParametersAsync(WindowsIdentity callerIdentity, string[] importParams, string[] searchConstraints)
        {
            ResponseMessage response = await LoadImportParamsFromSearchComponents(callerIdentity, importParams, searchConstraints);
            if (!response.IsSuccessful) return response;
            IDictionary<string, List<Parameter>> impParamDict = response.Data as IDictionary<string, List<Parameter>>;
            //Load these components from the databases
            List<object> result = new List<object>();
            foreach (KeyValuePair<string, List<Parameter>> impParam in impParamDict)
            {
                if (!LoadedCompDict.ContainsKey(impParam.Key))
                {
                    response = await LoadParamsFromLinkedComponents(callerIdentity, impParam.Key, impParam.Value);
                    if (!response.IsSuccessful) return response;
                }
                //add parameters to the result
                result.AddRange(impParam.Value.Select(param => param.Value));
            }
            return new ResponseMessage(true, result);
        }

        private async Task<ResponseMessage> UpdateComponent(WindowsIdentity callerIdentity, Component component, List<Parameter> exportParams)
        {
            ResponseMessage response = component.UpdateParamsWithNewValues(exportParams);
            if (!response.IsSuccessful)
                return response;
            //make a query to the corresponding database server
            return await WindowsIdentity.RunImpersonated(callerIdentity.AccessToken, async () => await component.UpdateComponentToDB());
        }
        private async Task<ResponseMessage> UpdateLinkedComponentParams(WindowsIdentity callerIdentity, string dBAndCompNames, List<Parameter> exportParams)
        {
            ResponseMessage response = await LoadParamsFromLinkedComponents(callerIdentity, dBAndCompNames, null);
            if (!response.IsSuccessful) return response;
            Component linkedComp = response.Data as Component;
            return await UpdateComponent(callerIdentity, linkedComp, exportParams);
        }
        private async Task<ResponseMessage> UpdateLoadedComponentParams(WindowsIdentity callerIdentity, string dBAndCompNames, List<Parameter> exportParams)
        {
            Component searchComp = LoadedCompDict[dBAndCompNames];
            return await UpdateComponent(callerIdentity, searchComp, exportParams);
        }
        /// <summary>
        /// Update parameters to the database
        /// </summary>
        /// <param name="paramValues"></param>
        /// <returns></returns>
        public async Task<ResponseMessage> UpdateParametersAsync(WindowsIdentity callerIdentity, string[] paramNames, string[] paramValues)
        {
            ResponseMessage response = BuildParamValueDict(paramNames, paramValues);
            if (!response.IsSuccessful) return response;
            IDictionary<string, List<Parameter>> exportParamDict = response.Data as IDictionary<string, List<Parameter>>;
            foreach (KeyValuePair<string, List<Parameter>> exportParamEntry in exportParamDict)
            {
                if (!CompIdNameDict.ContainsKey(exportParamEntry.Key))
                    return new ResponseMessage(false, "No information about component '" + exportParamEntry.Key + "' was found");
                if (!LoadedCompDict.ContainsKey(exportParamEntry.Key))
                    response = await UpdateLinkedComponentParams(callerIdentity, exportParamEntry.Key, exportParamEntry.Value);
                else response = await UpdateLoadedComponentParams(callerIdentity, exportParamEntry.Key, exportParamEntry.Value);
                if (!response.IsSuccessful)
                    return response;
            }
            return new ResponseMessage(true, null); // update succeeded
        }

        /// <summary>
        /// Get a list of list properties
        /// this is particurlarly used for HDB as list properties need to be expanded explicitly in the query
        /// </summary>
        /// <param name="props"></param>
        /// <returns></returns>
        public HashSet<string> GetListTypeProps(IEnumerable<string[]> props)
        {
            if (props != null)
            {
                HashSet<string> listTypeProps = new HashSet<string>();
                foreach (var prop in props)
                    AddTypeProp2List(listTypeProps, prop);
                return listTypeProps;
            }
            return null;
        }

        private void AddTypeProp2List(HashSet<string> listTypeProps, string[] prop)
        {
            if (prop.Length > 2 /*prop[2].All(char.IsDigit)*/)
            {
                string name = "";
                for (int i = 1; i < prop.Length - 1; i++)
                {
                    name += prop[i - 1] + "/";
                    if (prop[i].Contains(Settings.ListPropFilterSplitter[0]) &&
                        ListTypeProperties.FirstOrDefault(propName => propName.CompareTo(name.Substring(0, name.Length - 1)) == 0) != null)
                        listTypeProps.Add(prop[i - 1]);
                }
            }
        }
    }
}

