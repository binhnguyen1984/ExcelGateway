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
        /// Get the object that stores the value of the parameter
        /// </summary>
        /// <param name="response"></param>
        /// <returns></returns>
        private JValue GetDataObjectFromResponse(object response)
        {
            int prop_num = Props.Length;
            int i = 1;
            while (i < prop_num)
            {
                if (response is JObject)
                    response = ((JObject)response)[Props[i]];
                else if (response is JArray)
                {
                    response = ((JArray)response)[0];
                    continue;
                }
                i++;
            }
            return (JValue)response;
        }
        /// <summary>
        /// Fill up value for this cell using the data from the database
        /// </summary>
        public void SaveValue(object response)
        {
            JValue valueObj = GetDataObjectFromResponse(response);
            object value = valueObj.Value;
            Value = value == null ? "" : value.ToString();
        }

        /// <summary>
        /// Update value to the loaded data which can then be put back to the database
        /// </summary>
        /// <param name="data"></param>
        public void UpdateValueTo(object response)
        {
            JValue valueObj = GetDataObjectFromResponse(response);
            valueObj.Value = Value;
        }
    }
}
