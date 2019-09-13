using System.Collections.Generic;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public class HDBComponent : Component
    {
        public HDBComponent(string compName) : base(compName) { }
        protected override string GetSearchURL(IEnumerable<string[]> paramPaths, out string dataName)
        {
            string searchUrl = GetAllComponenstUrl();
            string idValue = ExtractIdValue();
            if (idValue != null)
            {
                searchUrl += $"({idValue}).json";
                dataName = CompName.Substring(0, CompName.Length - 1);
            }
            else
            {
                searchUrl += ".json";
                dataName = CompName;
            }
            searchUrl += GetFilterAndExpansion(paramPaths);
            return searchUrl;
        }
        private string GetFilterAndExpansion(IEnumerable<string[]> paramPaths)
        {
            string result = "";
            string filter = CreateFilter();
            string expansion = CreateExpansion(paramPaths);
            if (filter.Length > 0)
            {
                result += "?$filter=" + filter;
                if (expansion.Length > 0)
                    result += "&$expand=" + expansion;
            }
            else if (expansion.Length > 0)
                result += "$expand=" + expansion;
            return result;
        }
        private string CreateExpansion(IEnumerable<string[]> paths)
        {
            string expansion = "";
            HashSet<string> typeProps = GlobalResources.ExcelHandlerInst.GetListTypeProps(paths);
            if (typeProps != null)
            {
                foreach (var prop in typeProps)
                    expansion += prop + ",";
            }
            return expansion.Length > 0 ? expansion.Substring(0, expansion.Length - 1) : expansion;
        }

        private string CreateFilter()
        {
            List<string> searchProps = Constraint.Properties;
            List<string> searchValues = Constraint.Values;

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
        protected override object ExtractResponseBody(object jsonData, string dataName) => HDBHandler.ExtractResponseBody(jsonData, dataName);
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
        public override async Task<ResponseMessage> LoadParametersByCompId(string compId, List<Parameter> paramList)
        {
            ResponseMessage response = await HDBHandler.LoadParametersByCompId(CompName, compId);
            if (!response.IsSuccessful) return response;
            //update parameters with the values fetched from the databases
            return SaveImportParameters(response, CompName.Substring(0, CompName.Length - 1), paramList);
        }
    }
}
