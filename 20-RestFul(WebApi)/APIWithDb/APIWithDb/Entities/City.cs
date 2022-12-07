using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace APIWithDb.Entities
{
    public class City
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Personel> ?Personel { get; set; }
    }
}
