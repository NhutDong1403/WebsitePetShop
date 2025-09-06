using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PetShop.Models
{
    public class OrderItem
    {
        [Key]
        public int OrderItemId { get; set; }

        [Required]
        public string ProductName { get; set; } = string.Empty;

        [Range(1, int.MaxValue)]
        public int Quantity { get; set; }

        [Range(0, double.MaxValue)]
        public decimal UnitPrice { get; set; }

        // Tự động tính thành tiền
        [NotMapped]
        public decimal SubTotal => Quantity * UnitPrice;

        public int OrderId { get; set; }
        public Order Order { get; set; }
    }
}
