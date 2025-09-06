using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetShop.Models;

namespace PetShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly MyDataContext _context;

        public CategoriesController(MyDataContext context)
        {
            _context = context;
        }

        // GET: api/Categories?type=Accessory&animalType=Cat
        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetCategories(
    [FromQuery] string? type,
    [FromQuery] string? animalType)
        {
            var query = _context.Categories
                                .AsNoTracking()   // Không track entity, tăng tốc
                                .AsQueryable();

            if (!string.IsNullOrEmpty(type))
                query = query.Where(c => c.Type == type);

            if (!string.IsNullOrEmpty(animalType))
                query = query.Where(c => c.AnimalType == animalType);

            // Chỉ select những cột cần thiết, tránh lấy toàn bộ entity
            var result = await query
                .Select(c => new { c.CategoryId, c.Name, c.Type, c.AnimalType })
                .ToListAsync();

            return Ok(result);
        }


        // GET: api/Categories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategory(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null) return NotFound();
            return category;
        }

        // PUT: api/Categories/5
        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategory(int id, Category category)
        {
            if (id != category.CategoryId) return BadRequest("Category ID không khớp");

            _context.Entry(category).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id)) return NotFound("Không tìm thấy Category");
                throw;
            }

            return NoContent();
        }

        // POST: api/Categories
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<ActionResult<Category>> PostCategory([FromBody] Category category)
        {
            if (string.IsNullOrWhiteSpace(category.Name) || string.IsNullOrWhiteSpace(category.Type) || string.IsNullOrWhiteSpace(category.AnimalType))
                return BadRequest("Name, Type và AnimalType là bắt buộc");

            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCategory), new { id = category.CategoryId }, category);
        }

        // DELETE: api/Categories/5
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null) return NotFound("Không tìm thấy Category");

            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoryExists(int id)
        {
            return _context.Categories.Any(e => e.CategoryId == id);
        }
    }
}
