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
        public virtual string GetSearchURL(string compName, IEnumerator searchValues, List<SearchParamCell> searchCells) => "";
        public virtual JObject GetUpdateComponent(object respObject, string compName = null) => null;
        public virtual string GetPutUrl(string compName, string compID = null) => "";
    }
}
