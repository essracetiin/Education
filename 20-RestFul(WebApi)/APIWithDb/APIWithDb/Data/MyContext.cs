using APIWithDb.Entities;
using Microsoft.EntityFrameworkCore;

namespace APIWithDb.Data
{
    public class MyContext : DbContext
    {

        public MyContext(DbContextOptions<MyContext> options) : base(options)
        {

        }
        public DbSet<Personel> Personel { get; set; }
        public DbSet<City> City { get; set; }



    }
}
