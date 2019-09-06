using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataLibrary.BusinessLogic;
using DataLibrary.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LinksDBManager.Controllers
{
    public class VariantPrototypeLinkController : Controller
    {
        public IActionResult CreateVariantPrototypeLink()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult CreateVariantPrototypeLink(VariantPrototypeLinkModel variantPrototypeLink)
        {
            if (ModelState.IsValid)
            {
                VariantPrototypeLinkProcessor.CreateVariantPrototypeLink(variantPrototypeLink.VariantId, variantPrototypeLink.PrototypeId);
                return Redirect("../Home/Index");
            }
            return View();
        }

        public IActionResult ViewVariantPrototypeLinks()
        {
            var data = VariantPrototypeLinkProcessor.LoadVariantPrototypeLinks();
            List<VariantPrototypeLinkModel> links = new List<VariantPrototypeLinkModel>();
            foreach (var row in data)
            {
                links.Add(new VariantPrototypeLinkModel
                {
                    Id = row.Id,
                    VariantId = row.VariantId,
                    PrototypeId = row.PrototypeId
                });
            }
            return View(links);
        }

        public IActionResult UpdateVariantPrototypeLink(VariantPrototypeLinkModel model)
        {
            return View(model);
        }

        [HttpPost]
        public IActionResult SaveVariantPrototypeLink(VariantPrototypeLinkModel model)
        {
            VariantPrototypeLinkProcessor.UpdateVariantPrototypeLink(model.Id, model.VariantId, model.PrototypeId);
            return RedirectToAction("ViewVariantPrototypeLinks");
        }

        public IActionResult DeleteVariantPrototypeLink(int Id)
        {
            VariantPrototypeLinkProcessor.DeleteVariantPrototypeLink(Id);
            return RedirectToAction("ViewVariantPrototypeLinks");
        }
    }
}
