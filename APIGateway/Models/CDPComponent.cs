using System.Collections.Generic;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public class CDPComponent : Component
    {
        public CDPComponent(string compName)
        {
            CompName = compName;
        }
        public override async Task<ResponseMessage> FetchDataFromDB(string url)
        {
            return await CDPHandler.FetchDataFromDB(url);
        }

        /// <summary>
        /// Currently, CDP only supports searching conditioned on a single property
        /// </summary>
        /// <returns></returns>
        protected override string GetSearchURL()
        {
            List<string> searchProps = Constraint.Properties;
            List<string> searchValues = Constraint.Values;
            string searchUrl = Settings.CDPApiUrl + CompName;
            searchUrl += "?";
            string filter = CreateFilter(searchProps, searchValues);
            if (filter.Length > 0) searchUrl += filter;
            return searchUrl;
        }

        private string CreateFilter(List<string> searchProps, List<string> searchValues)
        {
            // create a filter
            string filter = "";
            for (int i = 0; i < searchProps.Count; i++)
            {
                if (searchProps[i] != null && searchProps[i].Length > 0 && searchValues[i] != null && searchValues[i].Length > 0)
                    filter += searchProps[i] + " = '" + searchValues[i] + "'";
            }
            return filter;
        }

        protected override string GetAllComponenstUrl() => CDPHandler.GetAllComponenstUrl(CompName);
        protected override object ExtractResponseBody(object jsonData, string dataName = null) => CDPHandler.ExtractResponseBody(jsonData);

        protected override string GetPutUrl(string idValue)
        {
            return Settings.CDPApiUrl + idValue;
        }

        public override async Task<ResponseMessage> UpdateComponentToDB()
        {
            string updateUrl = GetPutUrl(CompName);
            return await CDPHandler.UpdateComponentToDB(updateUrl, ComponentDetails.ToString());
        }
        public override async Task<ResponseMessage> LoadParametersByCompId(string compId)
        {
            ResponseMessage response = await CDPHandler.LoadParametersByCompId(CompName, compId);
            if (!response.IsSuccessful) return response;
            //update parameters with the values fetched from the databases
            return SaveImportParameters(response, null);
        }
    }
}
