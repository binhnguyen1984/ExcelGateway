using Newtonsoft.Json.Linq;
using System.Collections.Generic;

namespace APIGateway.Models
{
    public class JsonHelper
    {
        /// <summary>
        /// Get value of an attribute of a given component
        /// </summary>
        /// <param name="data"> the Json object from which an attribute value is extracted </param>
        /// <param name="attPath"> a path in the tree representation leading to the given attribute </param>
        /// <returns></returns>
        public static ResponseMessage GetJsonAttributeFromOneComponent(object componentData, string[] attrPath)
        {
            int prop_num = attrPath.Length;
            int i = 1;
            while (i < prop_num)
            {
                if (componentData == null) return new ResponseMessage(false, "No data found for parameter '" + attrPath[i] + "'");
                if (componentData is JObject)
                {
                    JObject dataObj = (componentData as JObject);
                    if (!dataObj.ContainsKey(attrPath[i]))
                        return new ResponseMessage(false, "Parameter '" + attrPath[i] + "' does not exist");
                    componentData = dataObj[attrPath[i]];
                }
                else if (componentData is JArray)
                {
                    JArray dataArr = componentData as JArray;
                    //if (Int32.TryParse(attrPath[i], out int index))
                    //{
                    //    if (index >= dataArr.Count)
                    //        return new ResponseMessage(false, "Index of parameter '" + attrPath[i - 1] + "' is out of range");
                    //    componentData = dataArr[index];
                    //}
                    //else return new ResponseMessage(false, "'" + attrPath[i] + "' is not a valid index");
                    string[] fieldAndValue = attrPath[i].Split(Settings.ListPropFilterSplitter);
                    if (fieldAndValue.Length != 2) return new ResponseMessage(false, $"Property name {attrPath[i]} is not a valid filter for list property");
                    ResponseMessage response = FilterListProperty(dataArr, fieldAndValue);
                    if (!response.IsSuccessful) return response;
                    componentData = response.Data;

                }
                else return new ResponseMessage(false, "Datatype of parameter '" + attrPath[i] + "' is unknown");
                i++;
            }
            return new ResponseMessage(true, componentData);
        }

        private static ResponseMessage FilterListProperty(JArray listProp, string[] fieldAndValue)
        {
            foreach (JToken token in listProp)
            {
                var fieldValue = token[fieldAndValue[0]];
                if (fieldValue != null && fieldValue.ToString().CompareTo(fieldAndValue[1]) == 0)
                    return new ResponseMessage(true, token);
            }
            return new ResponseMessage(false, $"No data with {fieldAndValue[0]}={fieldAndValue[1]}");
        }
        private static string GetJValueAsString(object jValue)
        {
            JValue valueObj = (jValue as JValue);
            return valueObj.Value != null ? valueObj.Value.ToString() : "null";
        }

        private static ResponseMessage GetAttributeValuesAsString(JToken values, string[] attrPath)
        {
            ResponseMessage response = GetJsonAttributeFromOneComponent(values, attrPath);
            if (!response.IsSuccessful) return response;
            if (response.Data is JValue)
            {
                return new ResponseMessage(true, GetJValueAsString(response.Data));
            }
            else if (response.Data is JArray)
            {
                string result = "[";
                foreach (JToken token in (response.Data as JArray))
                {
                    if (token is JValue)
                        result += GetJValueAsString(token);
                    else result += token != null ? token.ToString() : "null";
                }
                result += "]";
                return new ResponseMessage(true, result);
            }
            else return new ResponseMessage(true, response.Data.ToString());
        }
        /// <summary>
        /// Extract attribute values of multiple components
        /// </summary>
        /// <param name="jsonObj"></param>
        /// <returns></returns>
        public static ResponseMessage GetStringAttributeFromMultipleComponents(object multComponentData, string[] attrPath)
        {
            List<string> idList = new List<string>();
            if (multComponentData is JArray)
            {
                foreach (JToken comp in (JArray)multComponentData)
                {
                    ResponseMessage response = GetAttributeValuesAsString(comp, attrPath);
                    if (!response.IsSuccessful) return response;
                    idList.Add(response.Data as string);
                }
            }
            else
            {
                ResponseMessage response = GetAttributeValuesAsString(multComponentData as JToken, attrPath);
                if (!response.IsSuccessful) return response;
                idList.Add(response.Data as string);
            }
            return new ResponseMessage(true, idList);
        }
    }
}
