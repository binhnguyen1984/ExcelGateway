using Newtonsoft.Json.Linq;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public class DatabaseHandler
    {
        protected static ApiCaller ApiCaller = new ApiCaller(); // it will be shared between CDP and HDB handlers
        public async Task<JObject> UpdateComponentWithFetchedValues(IEnumerator searchValuesIter, string compName, List<ParamCell> paramCells, List<SearchParamCell> searchCells = null)
        {
            string searchUrl = GetSearchURL(compName, searchValuesIter, searchCells);
            object respObject = await FetchDataFromDB(searchUrl);
            if (respObject == null) return null;
            JObject componentDetails = GetUpdateComponent(respObject, compName);
            if (componentDetails == null) return null;
            //update parameters with the values fetched from the databases
            foreach (ParamCell paramCell in paramCells)
                paramCell.SaveValue(componentDetails);
            return componentDetails;
        }

        /// <summary>
        /// Get all component's values of a given attribute
        /// </summary>
        /// <param name="compName"></param>
        /// <returns></returns>
        public virtual async Task<List<string>> GetComponentAttr(string[] attrPath)
        {
            string apiUrl = GetAllComponentUrl(attrPath[0]);
            object response = await ApiCaller.FetchDataFromDB(apiUrl);
            object data = GetResponseBody(response, attrPath[0]);
            return JsonHelper.ExtractAttributeValues(attrPath, data);
        }
        private JObject GetUpdateComponent(object respObject, string compName = null)
        {
            object data = GetResponseBody(respObject, compName);
            if (data is JArray)
            {
                JArray dataArr = data as JArray;
                return dataArr.Count > 0 ? (JObject)dataArr.First : null; //if the response contains more than one component, then only the first one is selected
            }
            return data as JObject;
        }

        protected virtual string GetAllComponentUrl(string compName) => "";
        protected virtual object GetResponseBody(object respObject, string compName = null) => null;
        public virtual async Task<object> FetchDataFromDB(string Url)
        {
            return await ApiCaller.FetchDataFromDB(Url);
        }
        public virtual async Task<bool> UpdateComponentToDB(string compName, JObject loadedCompDetails, string compIdValue = null)
        {
            string updateUrl = GetPutUrl(compName, compIdValue);
            bool response = await ApiCaller.UpdateDataToDB(updateUrl, loadedCompDetails.ToString());
            return response;
        }
        protected virtual string GetSearchURL(string compName, IEnumerator searchValues, List<SearchParamCell> searchCells) => "";
        protected virtual string GetPutUrl(string compName, string compID = null) => "";
    }
}
