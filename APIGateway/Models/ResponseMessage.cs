using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public class ResponseMessage
    {
        public bool IsSuccessful { get; private set; }
        public object Data { get; private set; }
        public ResponseMessage(bool isSucessful, object data)
        {
            IsSuccessful = isSucessful;
            Data = data;
        }
    }
}
