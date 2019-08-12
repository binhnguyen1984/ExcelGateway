using Newtonsoft.Json.Linq;

namespace APIGateway.Models
{
    public sealed class ParamCell
    {
        public string[] Props { get; private set; }
        public string Value { get; set; }
        public string[] ValueLocations { get; private set; }
        public ParamCell(string path, string locStr)
        {
            this.Props = path.Split('.');
            this.ValueLocations = locStr.Split(',');
            this.Value = "";
        }
        /// <summary>
        /// Fill up value for this cell using the data from the database
        /// </summary>
        public void SaveValue(object response)
        {
            JValue valueObj = JsonHelper.GetAttributeValue(response, Props);
            object value = valueObj.Value;
            Value = value == null ? "" : value.ToString();
        }

        /// <summary>
        /// Update value to the loaded data which can then be put back to the database
        /// </summary>
        /// <param name="data"></param>
        public void UpdateValueTo(object response)
        {
            JValue valueObj = JsonHelper.GetAttributeValue(response, Props);
            valueObj.Value = Value;
        }
    }
}
