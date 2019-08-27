using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    /// <summary>
    /// This class implements common data manipulations for HDB and CDP
    /// </summary>
    public class DBHandler
    {
        protected static ApiHandler ApiHandler = new ApiHandler(); // it will be shared between CDP and HDB handlers
        public async Task<ResponseMessage> UpdateComponentWithFetchedValues(params object[] args)
        {
            string searchUrl = GetSearchURL(args);
            ResponseMessage respObject = await FetchDataFromDB(searchUrl);
            if (!respObject.IsSuccessful) return respObject;

            string compName = args[0] as string;
            JObject componentDetails = GetUpdateComponent(respObject.Data, compName);
            if (componentDetails == null) return new ResponseMessage(false, "No results for component '" + compName + "' were found");
            //update parameters with the values fetched from the databases
            List<ParamCell> impParams = args[3] as List<ParamCell>;
            foreach (ParamCell impParam in impParams)
            {
                ResponseMessage savingStatus = impParam.SaveValue(componentDetails);
                if (!savingStatus.IsSuccessful) return savingStatus;
            }
            return new ResponseMessage(true, componentDetails);
        }

        /// <summary>
        /// Get all component's values of a given attribute
        /// </summary>
        /// <param name="args"></param>
        /// <returns></returns>
        public virtual async Task<ResponseMessage> GetAttributeValuesOfAllComponents(params object[] args)
        {
            string[] attrPath = args as string[];
            string apiUrl = GetAllComponentUrl(attrPath[0]);
            ResponseMessage response = await ApiHandler.FetchDataFromDB(apiUrl);
            if (!response.IsSuccessful) return response;
            object data = ExtractResponseBody(response.Data, attrPath[0]);
            return JsonHelper.GetStringAttributeFromMultipleComponents(data, attrPath);
        }

        private JObject GetUpdateComponent(params object[] args)
        {
            object data = ExtractResponseBody(args);
            if (data is JArray)
            {
                JArray dataArr = data as JArray;
                return dataArr.Count > 0 ? (JObject)dataArr.First : null; //if the response contains more than one component, then only the first one is selected
            }
            return data as JObject;
        }

        protected virtual string GetAllComponentUrl(string compName) => "";
        protected virtual object ExtractResponseBody(params object[] args) => null;
        public virtual async Task<ResponseMessage> FetchDataFromDB(string Url)
        {
            return await ApiHandler.FetchDataFromDB(Url);
        }
        public virtual async Task<ResponseMessage> UpdateComponentToDB(params object[] args)
        {
            return await Task.FromResult<ResponseMessage>(null);
        }

        protected virtual string GetSearchURL(params object[] args) => "";
        protected virtual string GetPutUrl(params object[] args) => "";
    }
}
