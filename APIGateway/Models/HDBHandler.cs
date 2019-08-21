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

        protected override string GetSearchURL(string compName, List<string> searchProps, List<string> searchValues)
        {
            string searchUrl = GetAllComponentUrl(compName);

            // create a filter
            string filter = "";
            for (int i = 0; i < searchProps.Count; i++)
            {
               if (searchProps[i]!=null && searchProps[i].Length>0 && searchValues[i]!=null && searchValues[i].Length>0)
                    filter += searchProps[i] + " eq " + searchValues[i];
            }
            if (filter.Length > 0)
                searchUrl += "$filter=" + filter;
            return searchUrl;
        }

        protected override object ExtractResponseBody(object respObject, string compName)
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
