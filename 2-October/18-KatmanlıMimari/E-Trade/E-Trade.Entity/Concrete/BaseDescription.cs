using E_Trade.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Trade.Entity.Concrete
{
    public class BaseDescription : IBaseDescription, IBaseTable
    {
        public int Id { get; set; }
        public string Description { get; set; }
        
    }
}
