namespace APIGateway.Models
{
    public class GlobalResources
    {
        public static ExcelHandler ExcelHandlerInst;
        public static ApiHandler ApiHandler;
        public static void InitializeGlobalResources()
        {
            ExcelHandlerInst = new ExcelHandler(Settings.ExcelConfigFile);
            ApiHandler = new ApiHandler();
        }
    }
}
