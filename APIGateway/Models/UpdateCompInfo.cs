using static APIGateway.Models.Settings;

namespace APIGateway.Models
{
    public class UpdateCompInfo
    {
        public DBCenters FromDB { get; private set; }
        public string CompIdName { get; private set; }

        public UpdateCompInfo(DBCenters fromDB, string compIDName)
        {
            FromDB = fromDB;
            CompIdName = compIDName;
        }
    }
}
