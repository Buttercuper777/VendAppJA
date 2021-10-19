using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KrupinWebApi.Model
{
    public class Coins
    {
        public int Id { get; set; }
        public int Denomination { get; set; }
        public int Number { get; set; }
        public bool State { get; set; }
    }
}
