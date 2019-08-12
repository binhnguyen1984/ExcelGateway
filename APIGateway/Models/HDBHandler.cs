using Newtonsoft.Json.Linq;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public class HDBHandler : DatabaseHandler
    {
        protected override string GetAllComponentUrl(string compName)
        {
            return Settings.HDBApiUrl + compName + ".json?";
        }

        protected override string GetSearchURL(string compName, IEnumerator searchValues, List<SearchParamCell> searchCells)
        {
            string searchUrl = GetAllComponentUrl(compName);
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

        protected override object GetResponseBody(object respObject, string compName)
        {
            if (respObject == null) return null;
            JObject responseBody = (respObject as JObject)["message"] as JObject;
            return responseBody[compName];
        }
        protected override string GetPutUrl(string compName, string compID)
        {
            return Settings.HDBApiUrl + compName + "(" + compID + ")";
        }
    }
}
