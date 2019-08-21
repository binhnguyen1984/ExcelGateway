using static APIGateway.Models.Settings;

namespace APIGateway.Models
{
    public class ComponentInfo
    {
        public DBCenters FromDB { get; private set; }
        public string CompIdName { get; private set; }

        public ComponentInfo(DBCenters fromDB, string compIDName)
        {
            FromDB = fromDB;
            CompIdName = compIDName;
        }
    }
}
