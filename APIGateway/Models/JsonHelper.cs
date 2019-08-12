using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
        public static JValue GetAttributeValue(object data, string[] attrPath)
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
                i++;
            }
            return (JValue)data;
        }

        public static List<string> ExtractAttributeValues(string[] attrPath, object data)
        {
            List<string> idList = new List<string>();
            if (data is JArray)
            {
                foreach (JToken comp in (JArray)data)
                {
                    JValue attValue = GetAttributeValue(comp, attrPath);
                    idList.Add(attValue.Value.ToString());
                }
            }
            else
            {
                JValue attValue = GetAttributeValue(data, attrPath);
                idList.Add(attValue.Value.ToString());
            }
            return idList;
        }

    }
}
