using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static APIGateway.Models.Settings;

namespace APIGateway.Models
{
    public class UpdateCompInfo
    {
        public DBCenters FromDB { get; private set; }
        public string CompIDName { get; private set; }

        public UpdateCompInfo(DBCenters fromDB, string compIDName)
        {
            FromDB = fromDB;
            CompIDName = compIDName;
        }
    }
}
