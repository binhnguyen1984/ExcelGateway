using System.Collections.Generic;

namespace APIGateway.Models
{
    public class SearchCompInfo
    {
        public SearchCompInfo(UpdateCompInfo updateCompInfo, List<SearchParamCell> searchCells)
        {
            this.UpdateInfo = updateCompInfo;
            this.SearchParamList = searchCells;
        }

        public UpdateCompInfo UpdateInfo { get; private set; }
        public List<SearchParamCell> SearchParamList { get; private set; }
    }
}
