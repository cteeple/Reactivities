using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Activity> Activities { get; set; }
        public DbSet<Child> Children { get; set; }
        public DbSet<Family> Families { get; set; }
        public DbSet<User> Users { get; set; }
    }
}