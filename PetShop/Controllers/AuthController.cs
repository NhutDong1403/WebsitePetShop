using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using PetShop.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace PetShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly MyDataContext _context;
        private readonly IConfiguration _config;

        public AuthController(MyDataContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        // ===================== LOGIN =====================
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            if (string.IsNullOrWhiteSpace(model.Username) || string.IsNullOrWhiteSpace(model.Password))
                return BadRequest(new { message = "Tên đăng nhập và mật khẩu không được để trống" });

            // Chỉ lấy các cột cần thiết: UserId, Username, Password, Role, IsActive
            var user = await _context.Users
                .AsNoTracking()
                .Where(u => u.Username == model.Username)
                .Select(u => new
                {
                    u.UserId,
                    u.Username,
                    u.Password,
                    u.Role,
                    u.IsActive
                })
                .FirstOrDefaultAsync();

            if (user == null || user.Password != model.Password) // TODO: hash password khi production
                return Unauthorized(new { message = "Sai tên đăng nhập hoặc mật khẩu" });

            if (!user.IsActive)
                return StatusCode(403, new { message = "Tài khoản đã bị vô hiệu hóa" });

            var token = GenerateJwtToken(new Models.User
            {
                UserId = user.UserId,
                Username = user.Username,
                Role = user.Role
            });

            return Ok(new { token });
        }


        private string GenerateJwtToken(User user)
        {
            var role = string.IsNullOrEmpty(user.Role) ? "User" : user.Role;

            var claims = new[]
            {
                new Claim("username", user.Username),
                new Claim("role", role),
                new Claim(ClaimTypes.Role, role),
                new Claim("userId", user.UserId.ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                _config["Jwt:Key"] ?? throw new InvalidOperationException("Jwt:Key chưa cấu hình")
            ));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddHours(3),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        // ===================== GET PROFILE =====================
        [Authorize]
        [HttpGet("me")]
        public async Task<IActionResult> GetProfile()
        {
            var userIdClaim = User.FindFirst("userId")?.Value;
            if (userIdClaim == null)
                return Unauthorized(new { message = "Không tìm thấy userId trong token" });

            var user = await _context.Users
                .AsNoTracking()
                .FirstOrDefaultAsync(u => u.UserId == int.Parse(userIdClaim));

            if (user == null)
                return NotFound(new { message = "Người dùng không tồn tại" });

            return Ok(new
            {
                userId = user.UserId,
                username = user.Username,
                role = user.Role,
                email = user.Email,
                phoneNumber = user.PhoneNumber,
                status = user.IsActive
            });
        }

        // ===================== REGISTER =====================
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] Register model)
        {
            if (string.IsNullOrWhiteSpace(model.Username) || string.IsNullOrWhiteSpace(model.Password))
                return BadRequest(new { message = "Tên đăng nhập và mật khẩu không được để trống" });

            if (await _context.Users.AnyAsync(u => u.Username == model.Username))
                return Conflict(new { message = "Tên đăng nhập đã tồn tại" });

            if (await _context.Users.AnyAsync(u => u.Email == model.Email))
                return Conflict(new { message = "Email đã được sử dụng" });

            var newUser = new User
            {
                FullName = model.FullName,
                Username = model.Username,
                Email = model.Email,
                PhoneNumber = model.PhoneNumber,
                Password = model.Password, // giữ plaintext tạm thời
                Role = "User",
                IsActive = true // tài khoản mới mặc định active
            };

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Đăng ký thành công ✅" });
        }
    }

    // ===================== MODELS =====================
    public class LoginModel
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
