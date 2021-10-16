using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KrupinWebApi.Model
{
    public class ProdItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string ImgPath { get; set; }
        public int Number { get; set; }
    }
}
