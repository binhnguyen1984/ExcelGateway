namespace APIGateway.Models
{
    public sealed class SearchParamCell
    {
        public string PropName { get; set; }
        public SearchParamCell(string PropName)
        {
            this.PropName = PropName;
        }
    }
}
