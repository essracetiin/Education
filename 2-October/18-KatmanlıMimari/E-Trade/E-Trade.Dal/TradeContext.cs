using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Trade.Dal
{
    public class TradeContext : DbContext
    {
        public TradeContext(DbContextOptions<TradeContext> db):base(db)
        {

        }
    }
}
