using Newtonsoft.Json.Linq;
using System;
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
                if (componentData == null) return new ResponseMessage(false, "No data found for property '" + attrPath[i] + "'");
                if (componentData is JObject)
                {
                    JObject dataObj = (componentData as JObject);
                    if (!dataObj.ContainsKey(attrPath[i]))
                        return new ResponseMessage(false, "Property '" + attrPath[i] + "' does not exist");
                    componentData = dataObj[attrPath[i]];
                }
                else if (componentData is JArray)
                {
                    JArray dataArr = componentData as JArray;
                    if (Int32.TryParse(attrPath[i], out int index))
                    {
                        if (index >= dataArr.Count)
                            return new ResponseMessage(false, "Index of property '" + attrPath[i-1] + "' is out of range");
                        componentData = dataArr[index];
                    }
                    else return new ResponseMessage(false, "'"+ attrPath[i]+"' is not a valid index");
                }
                else return new ResponseMessage(false, "Datatype of property '" + attrPath[i] + "' is unknown");
                i++;
            }
            return new ResponseMessage(true, componentData);
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
                    ResponseMessage response = GetJsonAttributeFromOneComponent(comp, attrPath);
                    if (!response.IsSuccessful) return response;
                    idList.Add((response.Data as JValue).Value.ToString());
                }
            }
            else
            {
                ResponseMessage response = GetJsonAttributeFromOneComponent(multComponentData, attrPath);
                if (!response.IsSuccessful) return response;
                idList.Add((response.Data as JValue).Value.ToString());
            }
            return new ResponseMessage(true, idList);
        }
    }
}
