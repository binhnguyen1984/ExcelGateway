using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataLibrary.BusinessLogic;
using LinksDBManager.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LinksDBManager.Controllers
{
    public class ProjectLinkController : Controller
    {
        public IActionResult CreateProjectLink()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult CreateProjectLink(ProjectLinkModel projectLink)
        {
            if (ModelState.IsValid)
            {
                ProjectLinkProcessor.CreateProjectLink(projectLink.CdpProjectId, projectLink.HdbProjectId);
                return Redirect("../Home/Index");
            }
            return View();
        }

        public IActionResult ViewProjectLinks()
        {
            var data = ProjectLinkProcessor.LoadProjectLinks();
            List<ProjectLinkModel> links = new List<ProjectLinkModel>();
            foreach (var row in data)
            {
                links.Add(new ProjectLinkModel
                {
                    Id = row.Id,
                    CdpProjectId = row.CdpProjectId,
                    HdbProjectId = row.HdbProjectId
                });
            }
            return View(links);
        }

        public IActionResult UpdateProjectLink(ProjectLinkModel model)
        {
            return View(model);
        }

        [HttpPost]
        public IActionResult SaveProjectLink(ProjectLinkModel model)
        {
            ProjectLinkProcessor.UpdateProjectLink(model.Id, model.CdpProjectId, model.HdbProjectId);
            return RedirectToAction("ViewProjectLinks");
        }

        public IActionResult DeleteProjectLink(int Id)
        {
            ProjectLinkProcessor.DeleteProjectLink(Id);
            return RedirectToAction("ViewProjectLinks");
        }
    }
}