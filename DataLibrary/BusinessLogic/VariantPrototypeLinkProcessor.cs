using System;
using System.Collections.Generic;
using System.Text;
using DataLibrary.DataAccess;
using DataLibrary.Models;

namespace DataLibrary.BusinessLogic
{
    public class VariantPrototypeLinkProcessor : IComponentLinkProcessor
    {
        public static int CreateVariantPrototypeLink(int VariantId, string PrototypeId)
        {
            VariantPrototypeLinkModel projectLink = new VariantPrototypeLinkModel
            {
                VariantId = VariantId,
                PrototypeId = PrototypeId
            };
            string sql = $@"insert into {SqlDataAccess.VariantPrototypeLinkDB}(VariantId, PrototypeId)
                           values (@VariantId, @PrototypeId);";
            return SqlDataAccess.SaveData(sql, projectLink);
        }
        int IComponentLinkProcessor.CreateComponentLink(int cdpComponentId, string hdbComponentId) => 
            CreateVariantPrototypeLink(cdpComponentId, hdbComponentId);
        public static int UpdateVariantPrototypeLink(int Id, int newCdpProjectId, string newHdbProjectId)
        {
            string sql = $@"update {SqlDataAccess.VariantPrototypeLinkDB}
                            set CdpProjectId={newCdpProjectId}, HdbProjectId='{newHdbProjectId}'
                            where Id={Id};";
            return SqlDataAccess.ExecuteCommand(sql);
        }
        int IComponentLinkProcessor.UpdateComponentLink(int Id, int newCdpComponentId, string newHdbComponentId) =>
            UpdateVariantPrototypeLink(Id, newCdpComponentId, newHdbComponentId);

        public static int DeleteVariantPrototypeLink(int Id)
        {
            string sql = $@"delete from {SqlDataAccess.VariantPrototypeLinkDB}
                            where Id={Id};";
            return SqlDataAccess.ExecuteCommand(sql);
        }
        int IComponentLinkProcessor.DeleteComponentLink(int Id) => DeleteVariantPrototypeLink(Id);

        public static List<VariantPrototypeLinkModel> LoadVariantPrototypeLinks()
        {
            string sql = $@"select Id, VariantId, PrototypeId
                          from {SqlDataAccess.VariantPrototypeLinkDB};";
            return SqlDataAccess.LoadData<VariantPrototypeLinkModel>(sql);
        }
        List<VariantPrototypeLinkModel> IComponentLinkProcessor.LoadComponentLinks<VariantPrototypeLinkModel>() =>
            LoadVariantPrototypeLinks() as List<VariantPrototypeLinkModel>;
        public static List<string> GetVariantId(string prototypeId)
        {
            string sql = $@"select VariantId
                          from {SqlDataAccess.VariantPrototypeLinkDB}
                          where PrototypeId='{prototypeId}';";
            return SqlDataAccess.LoadData<string>(sql);
        }
        List<string> IComponentLinkProcessor.GetCdpComponentId(string hdbComponentId) =>
            GetVariantId(hdbComponentId);
        public static List<string> GetPrototypeId(int variantId)
        {
            string sql = $@"select PrototypeId
                          from {SqlDataAccess.VariantPrototypeLinkDB}
                          where VariantId={variantId};";
            return SqlDataAccess.LoadData<string>(sql);
        }
        List<string> IComponentLinkProcessor.GetHdbComponentId(int cdpComponentId) =>
            GetPrototypeId(cdpComponentId);
    }
}
