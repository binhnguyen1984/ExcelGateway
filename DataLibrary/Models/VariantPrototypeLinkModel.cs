using System;
using System.Collections.Generic;
using System.Text;

namespace DataLibrary.Models
{
    public class VariantPrototypeLinkModel
    {
        public int Id { get; set; }
        public int VariantId { get; set; }
        public string PrototypeId { get; set; }
    }
}
