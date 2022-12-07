using _19_Session.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;

namespace _19_Session.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            var student = new Student();
            student.Id = 1;
            student.Email = "esra@gmail.com";
            student.Name = "Esra";
            //Kayıt
            HttpContext.Session.SetString("User", JsonConvert.SerializeObject(student));
            //student nesnesini json tipine çevirir ve tarayıcının içinde saklar.
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}