using System.ComponentModel.DataAnnotations;

namespace PetShop.Models
{
    public class Accessory
    {
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [Range(0, double.MaxValue)]
        public decimal Price { get; set; }

        [Range(0, int.MaxValue)]
        public int Quantity { get; set; }

        [MaxLength(500)]
        public string Description { get; set; } = string.Empty;

        [MaxLength(200)]
        public string ImageUrl { get; set; } = string.Empty;

        public int CategoryID { get; set; } 
        public Category Category { get; set; } 
    }
}
