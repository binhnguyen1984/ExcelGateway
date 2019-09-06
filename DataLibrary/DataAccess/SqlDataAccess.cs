using System;
using System.Collections.Generic;
using System.Text;
using Dapper;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
namespace DataLibrary.DataAccess
{
    public static class SqlDataAccess
    {
        public static string ProjectLinkDB = "dbo.ProjectLinks";
        public static string VariantPrototypeLinkDB = "dbo.VariantPrototypeLinks";
        public static string ConnectionString;
        public static string GetConnectionString(string connectionName="LinksDB")
        {
            return ConfigurationManager.ConnectionStrings[connectionName].ConnectionString;
        }
        public static List<T> LoadData<T>(string sql)
        {
            using(IDbConnection cnn = new SqlConnection(ConnectionString))
            {
                return cnn.Query<T>(sql).ToList();
            }
        }
        public static int SaveData<T>(string sql, T data)
        {
            using (IDbConnection cnn = new SqlConnection(ConnectionString))
            {
                return cnn.Execute(sql, data);
            }
        }
        public static int ExecuteCommand(string sqlCommand)
        {
            using (IDbConnection cnn = new SqlConnection(ConnectionString))
            {
                return cnn.Execute(sqlCommand);
            }
        }
    }
}
