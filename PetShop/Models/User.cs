using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PetShop.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Required, MaxLength(100)]
        public string FullName { get; set; } = string.Empty; // Họ & Tên

        [Required, MaxLength(50)]
        public string Username { get; set; } = string.Empty; // Tên đăng nhập

        [Required, MaxLength(100)]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required, MaxLength(15)]
        [Phone]
        public string PhoneNumber { get; set; } = string.Empty;

        [Required, MaxLength(100)]
        public string Password { get; set; } = string.Empty;

        [NotMapped]
        [Compare("Password", ErrorMessage = "Mật khẩu xác nhận không khớp.")]
        public string ConfirmPassword { get; set; } = string.Empty;

        [Required, MaxLength(20)]
        public string Role { get; set; } = "User"; // Mặc định là User

        public bool IsActive { get; set; } = true; // Trạng thái tài khoản

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public ICollection<Order> Orders { get; set; } 
    }
}
