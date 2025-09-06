using Microsoft.EntityFrameworkCore;
using PetShop.Models;

namespace PetShop.Models
{
    public class MyDataContext : DbContext
    {
        public MyDataContext(DbContextOptions<MyDataContext> options)
            : base(options)
        {
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Pet> Pets { get; set; }
        public DbSet<Accessory> Accessories { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<PetShop.Models.OrderItem> OrderItem { get; set; } = default!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Accessory>()
                .Property(a => a.Price)
                .HasPrecision(18, 4); // 18 chữ số, 4 chữ số thập phân

            modelBuilder.Entity<Order>()
                .Property(o => o.ShippingFee)
                .HasPrecision(18, 4);

            modelBuilder.Entity<Order>()
                .Property(o => o.TotalAmount)
                .HasPrecision(18, 4);

            modelBuilder.Entity<OrderItem>()
                .Property(oi => oi.UnitPrice)
                .HasPrecision(18, 4);

            modelBuilder.Entity<Pet>()
                .Property(p => p.Price)
                .HasPrecision(18, 4);

            modelBuilder.Entity<Order>()
               .HasOne(o => o.User)
               .WithMany(u => u.Orders)
               .HasForeignKey(o => o.UserId)
               .OnDelete(DeleteBehavior.Cascade); // hoặc Restrict tùy logic

            modelBuilder.Entity<User>()
               .Property(u => u.IsActive)
               .HasConversion<int>();
        }
    }
}
