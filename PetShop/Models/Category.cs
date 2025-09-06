using System.ComponentModel.DataAnnotations;

namespace PetShop.Models
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }

        [Required, MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [Required, MaxLength(50)]
        public string Type { get; set; } = "Accessory"; // Pet / Accessory

        [MaxLength(20)]
        public string? AnimalType { get; set; } = "Dog"; // Dog, Cat, Reptile, Rodent, Bird, Squirrel
    }
}
