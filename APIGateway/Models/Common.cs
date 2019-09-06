namespace APIGateway.Models
{
    public static class Common
    {
        public static ResponseMessage SplitPath(string path)
        {
            string[] result = path.Split(Settings.PathSplitter);
            if (result.Length < 2)
                return new ResponseMessage(false, "Property '" + path + "' is not valid");
            return new ResponseMessage(true, result);
        }

        public static ResponseMessage SplitDBAndCompNames(string dBAndCompNames)
        {
            string[] result = dBAndCompNames.Split(Settings.DBNameCompSplitter);
            if (result.Length != 2)
                return new ResponseMessage(false, "Component '" + dBAndCompNames + "' is not valid");
            return new ResponseMessage(true, result);
        }

        public static ResponseMessage StripOffDBNameFromAttrPath(string attrPath)
        {
            ResponseMessage response = SplitPath(attrPath);
            if (!response.IsSuccessful) return response;
            string[] path = response.Data as string[];
            response = SplitDBAndCompNames(path[0]);
            if (!response.IsSuccessful) return response;
            string[] split = response.Data as string[];
            path[0] = split[1];
            return new ResponseMessage(true, new object[2] { split[0], path });
        }
    }
}
