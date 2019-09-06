using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LinksDBManager.Models
{
    public class VariantPrototypeLinkModel
    {
        public int Id { get; set; }

        [Display(Name ="Variant Id")]
        [Required(ErrorMessage = "An identifier is required")]
        public int VariantId { get; set; }

        [Display(Name ="Prototype Id")]
        [Required(ErrorMessage ="A prototype identifier is required")]
        [StringLength(50)]
        public string PrototypeId { get; set; }
    }
}
