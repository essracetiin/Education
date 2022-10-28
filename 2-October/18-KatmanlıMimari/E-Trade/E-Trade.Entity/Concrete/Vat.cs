using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Trade.Entity.Concrete
{
    public class Vat :BaseDescription
    {
        //vat katma değer vergisi
        public decimal Ratio { get; set; }
    }
}
