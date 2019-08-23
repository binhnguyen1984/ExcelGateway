using Newtonsoft.Json.Linq;
using System.Collections.Generic;

namespace APIGateway.Models
{
    public class HDBHandler : DBHandler
    {
        protected override string GetAllComponentUrl(string compName)
        {
            return Settings.HDBApiUrl + compName + ".json?";
        }

        protected override string GetSearchURL(string compName, List<string> searchProps, List<string> searchValues, IEnumerable<string[]> impPaths)
        {
            string searchUrl = GetAllComponentUrl(compName);
            string filter = CreateFilter(searchProps, searchValues);
            string expansion = CreateExpansion(impPaths);
            if (filter.Length > 0)
            {
                searchUrl += "$filter=" + filter;
                if (expansion.Length > 0)
                    searchUrl += "&$expand=" + expansion;
            }
            else if(expansion.Length>0)
                searchUrl += "$expand=" + expansion;
            return searchUrl;
        }

        private string CreateExpansion(IEnumerable<string[]> paths)
        {
            HashSet<string> typeProps = DBHelper.ExcelHandlerInst.GetListTypeProps(paths);
            string expansion = "";
            foreach (var prop in typeProps)
                expansion += prop + ",";
            return expansion.Length>0?expansion.Substring(0,expansion.Length-1):expansion;
        }

        private string CreateFilter(List<string> searchProps, List<string> searchValues)
        {
            // create a filter
            string filter = "";
            for (int i = 0; i < searchProps.Count; i++)
            {
                if (searchProps[i] != null && searchProps[i].Length > 0 && searchValues[i] != null && searchValues[i].Length > 0)
                    filter += searchProps[i] + " eq " + searchValues[i];
            }
            return filter;
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
