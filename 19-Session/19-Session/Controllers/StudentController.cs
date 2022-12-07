using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace _19_Session.Controllers
{
    public class StudentController : Controller
    {
        public IActionResult Index()
        {
            //Okuma
            var student = JsonConvert.DeserializeObject<Student>(HttpContext.Session.GetString("User"));
            return View(student);
        }
    }
}
