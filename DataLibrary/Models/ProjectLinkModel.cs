using System;
using System.Collections.Generic;
using System.Text;

namespace DataLibrary.Models
{
    public class ProjectLinkModel
    {
        public int Id { get; set; }
        public int CdpProjectId { get; set; }
        public string HdbProjectId { get; set; }
    }
}
