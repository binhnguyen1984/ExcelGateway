using DataLibrary.DataAccess;
using DataLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataLibrary.BusinessLogic
{
    public interface IComponentLinkProcessor
    {
        int CreateComponentLink(int cdpComponentId, string hdbComponentId);
        int UpdateComponentLink(int Id, int newCdpComponentId, string newHdbComponentId);
        int DeleteComponentLink(int Id);
        List<T> LoadComponentLinks<T>();
        List<string> GetCdpComponentId(string hdbComponentId);
        List<string> GetHdbComponentId(int cdpComponentId);
    }
}
