using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LinksDBManager.Models
{
    public class ProjectLinkModel
    {
        public int Id { get; set; }
        [Display(Name ="Cdp project Id")]
        [Range(10000,99999, ErrorMessage ="It is not a valid identifier")]
        [Required(ErrorMessage ="An identifier is required")]
        public int CdpProjectId { get; set; }

        [Display(Name = "Hdb project Id")]
        [StringLength(50)]
        [Required(ErrorMessage = "An identifier is required")]
        public string HdbProjectId { get; set; }
    }
}
