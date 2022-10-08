using Microsoft.AspNetCore.Mvc;
using MvcModel.Models;
using System.Diagnostics;

namespace MvcModel.Controllers
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
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult Contact()
        {
            // 1. Yol A ViewBag
            Webmaster wb = new Webmaster();
            wb.Id = 1;
            wb.Ad = "Esra";
            wb.Soyad = "Çetin";
            wb.Mail = "esracetin@gmail.com";
            ViewBag.Id = wb.Id.ToString();
            ViewBag.Ad = wb.Ad;
            ViewBag.Soyad = wb.Soyad;
            ViewBag.Mail = wb.Mail;
           
            //1.Yol B ViewBag
            ViewBag.Webmaster = wb;
            return View();
        }
        public IActionResult Contact2()
        {
            Webmaster wb = new Webmaster();
            wb.Id = 1;
            wb.Ad = "Esra";
            wb.Soyad = "Çetin";
            wb.Mail = "esracetin@gmail.com";
            ViewBag.Id = wb.Id.ToString();
            ViewBag.Ad = wb.Ad;
            ViewBag.Soyad = wb.Soyad;
            ViewBag.Mail = wb.Mail;
            return View(wb);
        }
        // 3 kişilik personel listesi yazdır
        public IActionResult PersonelListe()
        {
            List<Personel> plist = new List<Personel>();
            Personel p1 = new Personel();
            p1.PersonelId = 1;
            p1.PersonelAd = "Gökhan";
            p1.PersonelSoyad = "Özen";
            Personel p2 = new Personel();
            p2.PersonelId = 2;
            p2.PersonelAd = "İrem";
            p2.PersonelSoyad = "Yağcı";
            Personel p3 = new Personel();
            p3.PersonelId = 3;
            p3.PersonelAd = "Merve";
            p3.PersonelSoyad = "Özbey";
            plist.Add(p1);
            plist.Add(p2);
            plist.Add(p3);
            

            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}