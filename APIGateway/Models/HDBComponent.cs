using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public class HDBComponent : Component
    {
        public HDBComponent(string compName)
        {
            CompName = compName;
        }
        protected override string GetSearchURL()
        {
            List<string> searchProps = Constraint.Properties;
            List<string> searchValues = Constraint.Values;
            IEnumerable<string[]> impPaths = ImportParams.Select(param => param.PropPath);

            string searchUrl = GetAllComponenstUrl();
            searchUrl += ".json?";
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
        private string CreateExpansion(IEnumerable<string[]> paths)
        {
            HashSet<string> typeProps = GlobalResources.ExcelHandlerInst.GetListTypeProps(paths);
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

        public override async Task<ResponseMessage> FetchDataFromDB(string url) => await HDBHandler.FetchDataFromDB(url);

        protected override object ExtractResponseBody(object jsonData) => HDBHandler.ExtractResponseBody(jsonData, CompName);
        protected override string GetPutUrl(string idValue)
        {
            return Settings.HDBApiUrl + CompName + "(" + idValue + ")";
        }
        public override async Task<ResponseMessage> UpdateComponentToDB()
        {
            string compIdValue = GetIdValue();
            string updateUrl = GetPutUrl(compIdValue);
            return await HDBHandler.UpdateComponentToDB(updateUrl, ComponentDetails.ToString());
        }
        protected override string GetAllComponenstUrl() => HDBHandler.GetAllComponenstUrl(CompName);
    }
}
