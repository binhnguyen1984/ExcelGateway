﻿using Newtonsoft.Json.Linq;

namespace APIGateway.Models
{
    public sealed class Parameter
    {
        public string[] PropPath { get; private set; }
        public object Value { get; set; }
        public Parameter(string[] path, string value)
        {
            this.PropPath = path;
            this.Value = value;
        }
        public Parameter(string[] path) : this(path, "") { }

        /// <summary>
        /// Fill up value for this cell using the data from the database
        /// </summary>
        /// <param name="response"></param>
        /// <returns></returns>
        public ResponseMessage SaveValue(JObject response)
        {
            ResponseMessage saveValueStatus = JsonHelper.GetJsonAttributeFromOneComponent(response, PropPath);
            if (!saveValueStatus.IsSuccessful) return saveValueStatus;
            if (saveValueStatus.Data is JValue)
            {
                JValue valueObj = saveValueStatus.Data as JValue;
                object value = valueObj.Value;
                Value = value == null ? "" : value.ToString();
                return new ResponseMessage(true, null);
            }
            else if (saveValueStatus.Data is JArray)
                return new ResponseMessage(false, "Parameter '" + PropPath[PropPath.Length - 1] + "' is a list and thus requires an index");
            return new ResponseMessage(false, "Datatype of parameter '" + PropPath[PropPath.Length - 1] + "' is unknown");
        }

        /// <summary>
        /// Update value to the loaded data which can then be put back to the database
        /// </summary>
        /// <param name="componendData"></param>
        /// <param name="compIdName"></param>
        /// <param name="compIdValue"></param>
        /// <returns></returns>
        public ResponseMessage UpdateValueTo(object componendData, string compIdName, string compIdValue)
        {
            ResponseMessage response = JsonHelper.GetJsonAttributeFromOneComponent(componendData, PropPath);
            if (!response.IsSuccessful) return response;
            if (PropPath[PropPath.Length - 1].CompareTo(compIdName) == 0 && (Value as string).CompareTo(compIdValue) != 0)
                return new ResponseMessage(false, "Parameter '" + compIdName + "' is the primary key and thus cannot be changed");
            if (response.Data is JValue)
            {
                (response.Data as JValue).Value = Value;
                return new ResponseMessage(true, null);
            }
            else if (response.Data is JArray)
                return new ResponseMessage(false, "Parameter '" + PropPath[PropPath.Length - 1] + "' is a list and thus requires an index");
            return new ResponseMessage(false, "Datatype of parameter '" + PropPath[PropPath.Length - 1] + "' is unknown");
        }
    }
}
