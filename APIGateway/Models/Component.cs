using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public class Component
    {
        public List<Parameter> ImportParams { get; set; }
        public List<Parameter> ExportParams { get; set; }
        public string CompName { get; set; }
        public string IdName { get; set; }
        public JObject ComponentDetails { get; set; }
        public Constraint Constraint { get; set; }
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
        protected virtual string GetSearchURL() => "";
        protected virtual string GetPutUrl(string idValue) => "";
        protected virtual string GetAllComponenstUrl() => "";

        protected async Task<ResponseMessage> SearchForComponentAsync()
        {
            //fetch parameters based on the search criteria
            string searchUrl = GetSearchURL();
            ResponseMessage respObject = await FetchDataFromDB(searchUrl);
            if (!respObject.IsSuccessful) return respObject;

            //update parameters with the values fetched from the databases
            return SaveImportParameters(respObject);
        }

        public ResponseMessage SaveImportParameters(ResponseMessage respObject)
        {
            JObject componentDetails = GetUpdateComponent(respObject.Data);
            if (componentDetails == null) return new ResponseMessage(false, "No results for component '" + CompName + "' were found");
            foreach (Parameter impParam in ImportParams)
            {
                ResponseMessage savingStatus = impParam.SaveValue(componentDetails);
                if (!savingStatus.IsSuccessful) return savingStatus;
            }
            return new ResponseMessage(true, componentDetails);
        }
        private JObject GetUpdateComponent(object jsonData)
        {
            object data = ExtractResponseBody(jsonData);
            if (data is JArray)
            {
                JArray dataArr = data as JArray;
                return dataArr.Count > 0 ? (JObject)dataArr.First : null; //if the response contains more than one component, then only the first one is selected
            }
            return data as JObject;
        }
        protected virtual object ExtractResponseBody(object jsonData) => null;

        public async Task<ResponseMessage> LoadParameters()
        {
            ResponseMessage response = await SearchForComponentAsync();
            if (!response.IsSuccessful) return response;
            ComponentDetails = response.Data as JObject;
            return response;
        }

        public async Task<ResponseMessage> LoadParametersByCompId(string compId)
        {
            string searchUrl = GetAllComponenstUrl();
            searchUrl += "/" + compId;
            ResponseMessage respObject = await FetchDataFromDB(searchUrl);
            if (!respObject.IsSuccessful) return respObject;

            //update parameters with the values fetched from the databases
            return SaveImportParameters(respObject);
        }

        /// <summary>
        /// Update the component with new parameters
        /// </summary>
        /// <param name="compIdName"></param>
        /// <param name="compIdValue"></param>
        /// <param name="loadedCompDetails"></param>
        /// <param name="exportParams"></param>
        /// <returns></returns>
        public ResponseMessage UpdateParamsWithNewValues()
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
