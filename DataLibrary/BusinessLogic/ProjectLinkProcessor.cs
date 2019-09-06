using DataLibrary.DataAccess;
using DataLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataLibrary.BusinessLogic
{
    public class ProjectLinkProcessor : IComponentLinkProcessor
    {
        public static int CreateProjectLink(int cdpProjectId, string hdbProjectId)
        {
            ProjectLinkModel projectLink = new ProjectLinkModel
            {
                CdpProjectId = cdpProjectId,
                HdbProjectId = hdbProjectId
            };
            string sql = $@"insert into {SqlDataAccess.ProjectLinkDB}(CdpProjectId, HdbProjectId)
                           values (@CdpProjectId, @HdbProjectId);";
            return SqlDataAccess.SaveData(sql, projectLink);
        }

        int IComponentLinkProcessor.CreateComponentLink(int cdpComponentId, string hdbComponentId) => ProjectLinkProcessor.CreateProjectLink(cdpComponentId, hdbComponentId);
        public static int UpdateProjectLink(int Id, int newCdpProjectId, string newHdbProjectId)
        {
            string sql = $@"update {SqlDataAccess.ProjectLinkDB}
                            set CdpProjectId={newCdpProjectId}, HdbProjectId='{newHdbProjectId}'
                            where Id={Id};";
            return SqlDataAccess.ExecuteCommand(sql);
        }
        int IComponentLinkProcessor.UpdateComponentLink(int Id, int newCdpComponentId, string newHdbComponentId) =>
            UpdateProjectLink(Id, newCdpComponentId, newHdbComponentId);

        public static int DeleteProjectLink(int Id)
        {
            string sql = $@"delete from {SqlDataAccess.ProjectLinkDB}
                            where Id={Id};";
            return SqlDataAccess.ExecuteCommand(sql);
        }
        int IComponentLinkProcessor.DeleteComponentLink(int Id) => DeleteProjectLink(Id);
        public static List<ProjectLinkModel> LoadProjectLinks()
        {
            string sql = $@"select Id, CdpProjectId, HdbProjectId
                          from {SqlDataAccess.ProjectLinkDB};";
            return SqlDataAccess.LoadData<ProjectLinkModel>(sql);
        }
        List<ProjectLinkModel> IComponentLinkProcessor.LoadComponentLinks<ProjectLinkModel>() => LoadProjectLinks() as List<ProjectLinkModel>;
        
        public static List<string> GetCdpProjectId(string hdbProjectId)
        {
            string sql = $@"select CdpProjectId from {SqlDataAccess.ProjectLinkDB} where HdbProjectId='{hdbProjectId}';";
            return SqlDataAccess.LoadData<string>(sql);
        }

        List<string> IComponentLinkProcessor.GetCdpComponentId(string hdbComponentId) => ProjectLinkProcessor.GetCdpProjectId(hdbComponentId);
        public static List<string> GetHdbProjectId(int cdpProjectId)
        {
            string sql = $@"select HdbProjectId from {SqlDataAccess.ProjectLinkDB} where CdpProjectId={cdpProjectId};";
            return SqlDataAccess.LoadData<string>(sql);
        }
        List<string> IComponentLinkProcessor.GetHdbComponentId(int cdpComponentId) => ProjectLinkProcessor.GetHdbProjectId(cdpComponentId);
    }
}
