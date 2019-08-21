using Newtonsoft.Json.Linq;

namespace APIGateway.Models
{
    public sealed class ParamCell
    {
        public string[] PropPath { get; private set; }
        public string Value { get; set; }
        public ParamCell(string[] path, string value)
        {
            this.PropPath = path;
            this.Value = value;
        }
        public ParamCell(string[] path) : this(path, "") { }
        /// <summary>
        /// Fill up value for this cell using the data from the database
        /// </summary>
        public ResponseMessage SaveValue(object response)
        {
            ResponseMessage saveValueStatus = JsonHelper.GetAttributeValue(response, PropPath);
            if (!saveValueStatus.IsSuccessful) return saveValueStatus;
            JValue valueObj = saveValueStatus.Data as JValue;
            if (valueObj == null) return new ResponseMessage(false, "No data is found for property '" + PropPath[PropPath.Length - 1] + "'");
            object value = valueObj.Value;
            Value = value == null ? "" : value.ToString();
            return new ResponseMessage(true, null);
        }

        /// <summary>
        /// Update value to the loaded data which can then be put back to the database
        /// </summary>
        /// <param name="data"></param>
        public ResponseMessage UpdateValueTo(object response, string compIdName, string compIdValue)
        {
            ResponseMessage updateValueStatus = JsonHelper.GetAttributeValue(response, PropPath);
            if (!updateValueStatus.IsSuccessful) return updateValueStatus;
            JValue valueObj = updateValueStatus.Data as JValue;
            if (valueObj == null) return new ResponseMessage(false, "No data is found for property '" + PropPath[PropPath.Length - 1] + "'");
            if (PropPath[PropPath.Length - 1].CompareTo(compIdName) == 0 && Value.CompareTo(compIdValue) != 0)
                return new ResponseMessage(false, "Property '" + compIdName + "' is the primary key and thus cannot be changed");
            valueObj.Value = Value;
            return new ResponseMessage(true, null);
        }
    }
}
