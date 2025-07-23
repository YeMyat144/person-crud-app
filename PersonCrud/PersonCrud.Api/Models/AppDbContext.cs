using System;
using Microsoft.EntityFrameworkCore;

namespace PersonCrud.Api.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
        //Seed some data

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Person>(mb =>
        {
            // mb.Property(p => p.FirstName).IsRequired().HasMaxLength(30);
            mb.HasData(
                new Person { Id = 1, FirstName = "John", LastName = "Doe" },
                new Person { Id = 2, FirstName = "Jane", LastName = "Smith" }
            );
        });
        base.OnModelCreating(modelBuilder);
    }

    public DbSet<Person> People { get; set; } = null!;
}



