using Newtonsoft.Json.Linq;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public class DatabaseHandler
    {
        protected static ApiCaller ApiCaller = new ApiCaller(); // it will be shared between CDP and HDB handlers
        public async Task<ResponseMessage> UpdateComponentWithFetchedValues(string compName, List<string> searchProps, List<string> searchValues, List<ParamCell> impParams)
        {
            string searchUrl = GetSearchURL(compName, searchProps, searchValues);
            ResponseMessage respObject = await FetchDataFromDB(searchUrl);
            if (!respObject.IsSuccessful) return respObject;
            JObject componentDetails = GetUpdateComponent(respObject.Data, compName);
            if (componentDetails == null) return null;
            //update parameters with the values fetched from the databases
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
        /// <param name="compName"></param>
        /// <returns></returns>
        public virtual async Task<ResponseMessage> GetComponentAttr(string[] attrPath)
        {
            string apiUrl = GetAllComponentUrl(attrPath[0]);
            ResponseMessage response = await ApiCaller.FetchDataFromDB(apiUrl);
            if (!response.IsSuccessful) return response;
            object data = ExtractResponseBody(response.Data, attrPath[0]);
            response = JsonHelper.ExtractAttributeValues(attrPath, data);
            if (!response.IsSuccessful) return response;
            return new ResponseMessage(true, response.Data);
        }
        private JObject GetUpdateComponent(object respObject, string compName = null)
        {
            object data = ExtractResponseBody(respObject, compName);
            if (data is JArray)
            {
                JArray dataArr = data as JArray;
                return dataArr.Count > 0 ? (JObject)dataArr.First : null; //if the response contains more than one component, then only the first one is selected
            }
            return data as JObject;
        }

        protected virtual string GetAllComponentUrl(string compName) => "";
        protected virtual object ExtractResponseBody(object respObject, string compName = null) => null;
        public virtual async Task<ResponseMessage> FetchDataFromDB(string Url)
        {
            return await ApiCaller.FetchDataFromDB(Url);
        }
        public virtual async Task<ResponseMessage> UpdateComponentToDB(string compName, JObject loadedCompDetails, string compIdValue = null)
        {
            string updateUrl = GetPutUrl(compName, compIdValue);
            return await ApiCaller.UpdateDataToDB(updateUrl, loadedCompDetails.ToString());
        }
        protected virtual string GetSearchURL(string compName, List<string> searchProps, List<string> searchValues) => "";
        protected virtual string GetPutUrl(string compName, string compID = null) => "";
    }
}
