using BasicServices.Models;
using Microsoft.AspNetCore.Mvc;

namespace BasicServices.Controllers
{
    public class CategoriesController : Controller
    {
        NorthwindContext _db;
        public CategoriesController(NorthwindContext db)
        {
            _db = db;
        }
        public IActionResult List()
        {
            var clist = _db.Set<Category>().ToList().Select(x=>new CategoryDTO
            {
                Description = x.Description,
                Name = x.CategoryName,
                Id = x.CategoryId,
            });
            return Json(clist);
        }
        public IActionResult Find(int Id)
        {
            var cat = _db.Set<Category>().Find(Id);
            var catDto = new CategoryDTO();
            catDto.Description = cat.Description;
            catDto.Name = cat.CategoryName;
            catDto.Id = cat.CategoryId;
            return Json(catDto);
        }
    }
}
