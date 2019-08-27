using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public class HDBHandler : DBHandler
    {
        protected override string GetAllComponentUrl(string compName)
        {
            return Settings.HDBApiUrl + compName + ".json?";
        }
        protected override string GetSearchURL(params object[] args)
        {
            string compName = args[0] as string;
            List<string> searchProps = args[1] as List<string>;
            List<string> searchValues = args[2] as List<string>;
            List<ParamCell> impParams = args[3] as List<ParamCell>;
            IEnumerable<string[]> impPaths = impParams.Select(param => param.PropPath);

            string searchUrl = GetAllComponentUrl(compName);
            string filter = CreateFilter(searchProps, searchValues);
            string expansion = CreateExpansion(impPaths);
            if (filter.Length > 0)
            {
                searchUrl += "$filter=" + filter;
                if (expansion.Length > 0)
                    searchUrl += "&$expand=" + expansion;
            }
            else if (expansion.Length > 0)
                searchUrl += "$expand=" + expansion;
            return searchUrl;
        }

        public override async Task<ResponseMessage> UpdateComponentToDB(params object[] args)
        {
            string compName = args[0] as string;
            JObject loadedCompDetails = args[1] as JObject;
            string compIdValue = args[2] as string;
            string updateUrl = GetPutUrl(compName, compIdValue);
            return await ApiHandler.UpdateDataToDB(updateUrl, loadedCompDetails.ToString());
        }
        private string CreateExpansion(IEnumerable<string[]> paths)
        {
            HashSet<string> typeProps = DBHelper.ExcelHandlerInst.GetListTypeProps(paths);
            string expansion = "";
            foreach (var prop in typeProps)
                expansion += prop + ",";
            return expansion.Length > 0 ? expansion.Substring(0, expansion.Length - 1) : expansion;
        }

        private string CreateFilter(List<string> searchProps, List<string> searchValues)
        {
            // create a filter
            string filter = "";
            for (int i = 0; i < searchProps.Count; i++)
            {
                if (searchProps[i] != null && searchProps[i].Length > 0 && searchValues[i] != null && searchValues[i].Length > 0)
                    filter += searchProps[i] + " eq '" + searchValues[i] + "'";
            }
            return filter;
        }

        protected override object ExtractResponseBody(params object[] args)
        {
            object jsonResponse = args[0];
            string compName = args[1] as string;
            if (jsonResponse == null) return null;
            JObject responseBody = (jsonResponse as JObject)["message"] as JObject;
            return responseBody[compName];
        }
        protected override string GetPutUrl(params object[] args)
        {
            string compName = args[0] as string;
            string compID = args[1] as string;
            return Settings.HDBApiUrl + compName + "(" + compID + ")";
        }
    }
}
