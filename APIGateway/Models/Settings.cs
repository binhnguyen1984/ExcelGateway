namespace APIGateway.Models
{
    public sealed class Settings
    {
        public enum DBCenters { HDB, CDP };
        public static string HDBApiUrl = "https://grzsms216.andritz.com/services/api/";
        public static string CDPApiUrl = "https://volta-dev.andritz.com/api/";
        public static string CDPAuthUrl = "https://heimdall.andritz.com";
        public static int CDPRedirecPort = 4200;
        public static string CDPClientId = "spa";
        public static string CDPScope = "openid volta";

        public static string PathSplitter = "/"; //splitter between parents and children nodes
        public static string PropValueSplitter = "="; // spliter between a property name and its value
        public static string DBNameCompSplitter = ":"; //spliter between a database name and a component name
    }
}
