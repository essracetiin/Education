using APIWithDb.Data;
using APIWithDb.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIWithDb.Controllers
{
    [Route("/[controller]/[action]")]
    [ApiController]
    public class PersonelController : ControllerBase
    {
        MyContext _db;
        Response _response;
        public PersonelController(MyContext db, Response response)
        {
            _db = db;
            _response = response;
        }
        [HttpGet]
        public List<PersonelDTO> List()
        {
            return _db.Set<Personel>().Select(x=> new PersonelDTO
            {
                Id = x.Id,
                Name = x.Name,
                CityName = x.City.Name
            }).ToList();
        }
        [HttpGet("{id:int}")]
        public Personel GetPersonel(int id)
        {
            return _db.Set<Personel>().Find(id);
        }
        [HttpPost]
        public Response Add(Personel personel)
        {
            try
            {
                
                _db.Set<Personel>().Add(personel);
                _db.SaveChanges();
                _response.Error = false;
                _response.Msg = $"{personel.Name} Başarılı şekilde Eklendi";
            }
            catch (Exception ex)
            {

                _response.Error = true;
                _response.Msg = ex.Message;
            }
            return _response;
        }

        [HttpPut]

        public Response Update(Personel personel)
        {
            try
            {
                _db.Set<Personel>().Update(personel);
                _db.SaveChanges();
                _response.Error = false;
                _response.Msg = $"{personel.Name} Başarılı şekilde Güncellendi";
            }
            catch (Exception ex)
            {

                _response.Error = true;
                _response.Msg = ex.Message;
            }
            return _response;
        }
        [HttpDelete]
        public Response Delete(Personel personel)
        {
            try
            {
                _db.Set<Personel>().Remove(personel);
                _db.SaveChanges();
                _response.Error = false;
                _response.Msg = $"{personel.Name} Başarılı şekilde Silindi";
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
            return Delete(GetPersonel(id));
        }
    }
}


