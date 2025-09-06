using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetShop.DTO;
using PetShop.Models;

namespace PetShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MyDataContext _context;

        public UserController(MyDataContext context)
        {
            _context = context;
        }

        // GET: api/User
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            // Trả về tất cả người dùng, bất kể trạng thái isActive
            return await _context.Users.ToListAsync();
        }

        // GET: api/User/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/User/5
        // Chỉ update trường isActive để toggle trạng thái
        [HttpPut("{id}")]
        public async Task<IActionResult> ToggleUserStatus(int id, UserStatusDto dto)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return NotFound();

            user.IsActive = dto.IsActive;
            _context.Entry(user).Property(u => u.IsActive).IsModified = true;

            await _context.SaveChangesAsync();
            return Ok(user);
        }


        // POST: api/User
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.UserId }, user);
        }

        // DELETE: api/User/5 (vẫn có thể giữ nếu muốn vô hiệu hóa theo cách cũ)
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DisableUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
                return NotFound();

            if (!user.IsActive)
                return BadRequest("Tài khoản đã bị vô hiệu hóa trước đó.");

            user.IsActive = false;
            _context.Entry(user).Property(u => u.IsActive).IsModified = true;
            await _context.SaveChangesAsync();

            return Ok("Tài khoản đã bị vô hiệu hóa.");
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.UserId == id);
        }
    }
}
