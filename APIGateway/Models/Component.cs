using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public abstract class Component
    {
        public string CompName { get; set; }
        public string IdName { get; set; }
        public JObject ComponentDetails { get; set; }
        public Constraint Constraint { get; set; }
        public Component(string compName)
        {
            CompName = compName;
        }

        public static ResponseMessage CreateComponent(string dBAndCompNames)
        {
            ResponseMessage response = Common.SplitDBAndCompNames(dBAndCompNames);
            if (!response.IsSuccessful) return response;
            string[] split = response.Data as string[];
            if (split[0].ToLower().CompareTo("hdb") == 0)
                return new ResponseMessage(true, new HDBComponent(split[1]));
            else if (split[0].ToLower().CompareTo("cdp") == 0)
                return new ResponseMessage(true, new CDPComponent(split[1]));
            return new ResponseMessage(false, $"Database '{split[0]}' is unknown");
        }

        public string GetIdValue() => ComponentDetails != null ? (string)ComponentDetails[IdName] : null;
        public virtual async Task<ResponseMessage> FetchDataFromDB(string Url) => await Task.FromResult<ResponseMessage>(null);
        protected abstract string GetSearchURL(IEnumerable<string[]> paramPaths, out string dataName);
        protected abstract string GetPutUrl(string idValue);
        protected abstract string GetAllComponenstUrl();
        protected string ExtractIdValue()
        {
            List<string> props = Constraint.Properties;
            List<string> values = Constraint.Values;
            for (int i = 0; i < props.Count; i++)
            {
                if (props[i] != null && props[i].CompareTo(IdName) == 0)
                {
                    string idValue = values[i];
                    props.RemoveAt(i);
                    values.RemoveAt(i);
                    return idValue;
                }
            }
            return null;
        }

        public ResponseMessage SaveImportParameters(ResponseMessage respObject, string dataName, List<Parameter> ImportParams)
        {
            ComponentDetails = GetUpdateComponent(respObject.Data, dataName);
            if (ComponentDetails == null) return new ResponseMessage(false, "No results for component '" + CompName + "' were found");
            if (ImportParams != null)
            {
                foreach (Parameter impParam in ImportParams)
                {
                    ResponseMessage savingStatus = impParam.SaveValue(ComponentDetails);
                    if (!savingStatus.IsSuccessful) return savingStatus;
                }
            }
            return new ResponseMessage(true, null);
        }
        private JObject GetUpdateComponent(object jsonData, string dataName)
        {
            object data = ExtractResponseBody(jsonData, dataName);
            if (data is JArray)
            {
                JArray dataArr = data as JArray;
                return dataArr.Count > 0 ? (JObject)dataArr.First : null; //if the response contains more than one component, then only the first one is selected
            }
            return data as JObject;
        }
        protected virtual object ExtractResponseBody(object jsonData, string dataName) => null;

        public async Task<ResponseMessage> LoadParameters(IEnumerable<string[]> paramPaths, List<Parameter> ImportParams)
        {
            //fetch parameters based on the search criteria
            string searchUrl = GetSearchURL(paramPaths, out string dataName);
            ResponseMessage respObject = await FetchDataFromDB(searchUrl);
            if (!respObject.IsSuccessful) return respObject;

            //update parameters with the values fetched from the databases
            return SaveImportParameters(respObject, dataName, ImportParams);
        }

        public virtual async Task<ResponseMessage> LoadParametersByCompId(string compId, List<Parameter> ImportParams) => await Task.FromResult<ResponseMessage>(null);
        /// <summary>
        /// Update the component with new parameters
        /// </summary>
        /// <param name="compIdName"></param>
        /// <param name="compIdValue"></param>
        /// <param name="loadedCompDetails"></param>
        /// <param name="exportParams"></param>
        /// <returns></returns>
        public ResponseMessage UpdateParamsWithNewValues(List<Parameter> ExportParams)
        {
            //update the loaded component with new values
            foreach (Parameter paramCell in ExportParams)
            {
                ResponseMessage updateStatus = paramCell.UpdateValueTo(ComponentDetails, IdName, GetIdValue());
                if (!updateStatus.IsSuccessful) return updateStatus;
            }
            return new ResponseMessage(true, null);
        }

        public virtual async Task<ResponseMessage> UpdateComponentToDB() => await Task.FromResult<ResponseMessage>(null);
    }
}
