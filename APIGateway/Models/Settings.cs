namespace APIGateway.Models
{
    public static class Settings
    {
        public enum DBCenters { HDB, CDP };
        public static string HDBApiUrl = "https://grzsms216.andritz.com/services/api/";
        public static string CDPApiUrl = "https://volta-dev.andritz.com/api/";
        public static string CDPAuthUrl = "https://heimdall.andritz.com";
        public static int CDPRedirecPort = 4200;
        public static string CDPClientId = "spa";
        public static string CDPScope = "openid volta";
        public static string ExcelConfigFile = "excelconfig.xls";
        public const string StartSearchSectionHeader = "Components"; //the text appears first in the search section
        public const string StartListPropsHeader = "List properties";
        public static string PathSplitter = "/"; //splitter between parents and children nodes
        public static string PropValueSplitter = "="; // spliter between a property name and its value
        public static string DBNameCompSplitter = ":"; //spliter between a database name and a component name
        public static string ListPropFilterSplitter = "$"; //spliter between a list property field and its value
    }
}
