using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PetShop.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }

        [Required]
        public string CustomerName { get; set; } = string.Empty;

        [Required]
        public string PhoneNumber { get; set; } = string.Empty;

        [Required]
        public string Address { get; set; } = string.Empty;

        [Required]
        public string ShippingMethod { get; set; } = "Hỏa tốc HCM đơn dưới 399k";

        [Required]
        public string PaymentMethod { get; set; } = "Thanh toán khi giao hàng (COD)";

        public string? DiscountCode { get; set; }

        [Range(0, double.MaxValue)]
        public decimal ShippingFee { get; set; } = 20000;

        [Range(0, double.MaxValue)]
        public decimal TotalAmount { get; set; }

        public DateTime OrderDate { get; set; } = DateTime.Now;

        public int UserId { get; set; } 
        public User User { get; set; }  

        // Một đơn hàng có nhiều sản phẩm
        public ICollection<OrderItem> Items { get; set; } = new List<OrderItem>();
    }
}
