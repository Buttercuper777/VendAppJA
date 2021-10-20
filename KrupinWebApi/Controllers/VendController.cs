using KrupinWebApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KrupinWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VendController : ControllerBase
    {
        [HttpPost]
        public async Task<ActionResult<Vend>> Vend(Vend vend)
        {
            int Count = 0;
            var newCoins = vend.coins;

            for (int i = 0; i < newCoins.Length; i++)
            {
                for (int j = 0; j < newCoins.Length; j++)
                {
                    if (newCoins[i] == newCoins[j])
                        Count++;
                }
                Console.WriteLine("Элемент {0} встречается в массиве {1} раз", newCoins[i], Count);
                Count = 0;
            }

            return vend;
        }
    }
}
