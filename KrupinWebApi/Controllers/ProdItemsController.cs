using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using KrupinWebApi.Data;
using KrupinWebApi.Model;
using Microsoft.AspNetCore.Authorization;

namespace KrupinWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class ProdItemsController : ControllerBase
    {
        private readonly DBContext _context;

        public ProdItemsController(DBContext context)
        {
            _context = context;
        }

        // GET: api/ProdItems
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProdItem>>> GetProdItem()
        {
            return await _context.ProdItem.ToListAsync();
        }

        // GET: api/ProdItems/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ActionResult<ProdItem>> GetProdItem(int id)
        {
            var prodItem = await _context.ProdItem.FindAsync(id);

            if (prodItem == null)
            {
                return NotFound();
            }

            return prodItem;
        }

        [AllowAnonymous]
        [HttpPost("{id}")]
        public async Task<ActionResult<ProdItem>> PatchProdItem(int id)
        {
            var prodItem = await _context.ProdItem.FindAsync(id);
            if (prodItem == null)
            {
                return NotFound();
            }

            if(prodItem.Number > 0)
            {
                prodItem.Number--;
                _context.ProdItem.Update(prodItem);
                await _context.SaveChangesAsync();
            }

            return prodItem;
        }


        // PUT: api/ProdItems/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [AllowAnonymous]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProdItem(int id, ProdItem prodItem)
        {
            if (id != prodItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(prodItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProdItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProdItems
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ProdItem>> PostProdItem(ProdItem prodItem)
        {
            _context.ProdItem.Add(prodItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProdItem", new { id = prodItem.Id }, prodItem);
        }

        // DELETE: api/ProdItems/5
        [AllowAnonymous]
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProdItem>> DeleteProdItem(int id)
        {
            var prodItem = await _context.ProdItem.FindAsync(id);
            if (prodItem == null)
            {
                return NotFound();
            }

            _context.ProdItem.Remove(prodItem);
            await _context.SaveChangesAsync();

            return prodItem;
        }

        private bool ProdItemExists(int id)
        {
            return _context.ProdItem.Any(e => e.Id == id);
        }
    }
}
