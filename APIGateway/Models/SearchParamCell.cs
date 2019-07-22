namespace APIGateway.Models
{
    public sealed class SearchParamCell
    {
        public string ValueLocation { get; set; } //address of the cell that contains the value of the corresponding component's property
        public string CellLocation { get; set; } //address of the cell to be displayed in the excel sheet
        public string DisplayText { get; set; } //the text (name) of the property that is to be displayed in the excel sheet (*NEED NOT BE* the same as in the database)

        public string PropName { get; set; }
        public SearchParamCell(string CellLocation, string ValueLocation, string DisplayText, string PropName)
        {
            this.ValueLocation = ValueLocation;
            this.CellLocation = CellLocation;
            this.DisplayText = DisplayText;
            this.PropName = PropName;
        }
    }
}
