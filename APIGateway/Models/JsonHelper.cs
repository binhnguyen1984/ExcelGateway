using Newtonsoft.Json.Linq;
using System.Collections.Generic;

namespace APIGateway.Models
{
    public class JsonHelper
    {
        /// <summary>
        /// Get value of an attribute of a given Json object
        /// </summary>
        /// <param name="data"> the Json object from which an attribute value is extracted </param>
        /// <param name="attPath"> a path in the tree representation leading to the given attribute </param>
        /// <param name="startId"> the index from which the path start </param>
        /// <returns></returns>
        public static ResponseMessage GetAttributeValue(object data, string[] attrPath)
        {
            int prop_num = attrPath.Length;
            int i = 1;
            while (i < prop_num)
            {
                if (data is JObject)
                    data = ((JObject)data)[attrPath[i]];
                else if (data is JArray)
                {
                    data = ((JArray)data).First;
                    continue;
                }
                if (data == null) return new ResponseMessage(false, "No data found for property '" + attrPath[i] + "'");
                i++;
            }
            return new ResponseMessage(true, (JValue)data);
        }

        public static ResponseMessage ExtractAttributeValues(string[] attrPath, object data)
        {
            if (data != null)
            {
                List<string> idList = new List<string>();
                if (data is JArray)
                {
                    foreach (JToken comp in (JArray)data)
                    {
                        ResponseMessage response = GetAttributeValue(comp, attrPath);
                        if (!response.IsSuccessful) return response;
                        idList.Add((response.Data as JValue).Value.ToString());
                    }
                }
                else
                {
                    ResponseMessage response = GetAttributeValue(data, attrPath);
                    if (!response.IsSuccessful) return response;
                    idList.Add((response.Data as JValue).Value.ToString());
                }
                return new ResponseMessage(true, idList);
            }
            return new ResponseMessage(true, null);
        }

    }
}
