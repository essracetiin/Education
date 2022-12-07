using APIWithDb.Data;
using APIWithDb.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIWithDb.Controllers
{
    [Route("/[controller]/[action]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        MyContext _db;
        Response _response;
        public CityController(MyContext db, Response response)
        {
            _db = db;
            _response = response;
        }
        [HttpGet]
        public List<City> GetCities()
        {
            return _db.Set<City>().ToList();
        }
        [HttpGet("{id:int}")]
        public City GetCity(int id)
        {
            return _db.Set<City>().Find(id);
        }
        [HttpPost]
        public Response Add(City city)
        {
            try
            {
                _db.Set<City>().Add(city);
                _db.SaveChanges();
                _response.Error = false;
                _response.Msg = $"{city.Name} Başarılı şekilde Eklendi";
            }
            catch (Exception ex)
            {

                _response.Error = true;
                _response.Msg = ex.Message;
            }
            return _response;
        }

        [HttpPut]

        public Response Update(City city)
        {
            try
            {
                _db.Set<City>().Update(city);
                _db.SaveChanges();
                _response.Error = false;
                _response.Msg = $"{city.Name} Başarılı şekilde Güncellendi";
            }
            catch (Exception ex)
            {

                _response.Error = true;
                _response.Msg = ex.Message;
            }
            return _response;
        }
        [HttpDelete]
        public Response Delete(City city)
        {
            try
            {
                _db.Set<City>().Remove(city);
                _db.SaveChanges();
                _response.Error = false;
                _response.Msg = $"{city.Name} Başarılı şekilde Silindi";
            }
            catch (Exception ex)
            { 

                _response.Error = true;
                _response.Msg = ex.Message;
            }
            return _response;
        }
        [HttpDelete("{id:int}")]
        public Response DeletebyId(int id)
        {
            return Delete(GetCity(id));
        }
    }
}


