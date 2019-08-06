using Newtonsoft.Json.Linq;
using System.Collections;
using System.Collections.Generic;
namespace APIGateway.Models
{
    public class HDBHandler : DatabaseHandler
    {
        public override string GetSearchURL(string compName, IEnumerator searchValues, List<SearchParamCell> searchCells)
        {
            string searchUrl = Settings.HDBApiUrl + compName + ".json?";
            int searchCondNum = searchCells.Count;

            // create a filter
            string filter = "";
            for (int i = 0; i < searchCondNum && searchValues.MoveNext(); i++)
            {
                if ((searchValues.Current as string).Length > 0)
                    filter += searchCells[i].PropName + " eq " + searchValues.Current;
            }
            if (filter.Length > 0)
                searchUrl += "$filter=" + filter;
            return searchUrl;
        }
        public override JObject GetUpdateComponent(object respObject, string compName = null)
        {
            JObject response = respObject is JArray ? (respObject as JArray).First as JObject : respObject as JObject;
            JObject responseBody = (JObject)response["message"];
            return (JObject)responseBody[compName][0]; //if the response contains more than one component value, then only the first one is selected
        }
        public override string GetPutUrl(string compName, string compID)
        {
            return Settings.HDBApiUrl + compName + "(" + compID + ")";
        }
    }
}
