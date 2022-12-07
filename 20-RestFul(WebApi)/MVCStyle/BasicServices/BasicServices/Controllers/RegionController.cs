using BasicServices.Models;
using Microsoft.AspNetCore.Mvc;

namespace BasicServices.Controllers
{
    public class RegionController : Controller
    {
        NorthwindContext _db;
        public RegionController(NorthwindContext db)
        {
            _db = db;
        }

        public IActionResult List()
        {
            var rlist = _db.Set<Region>().ToList();
            return Json(rlist);
        }
    }
}
