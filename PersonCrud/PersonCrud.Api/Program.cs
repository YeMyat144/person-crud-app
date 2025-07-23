using Microsoft.EntityFrameworkCore;
using PersonCrud.Api.Endpoints;
using PersonCrud.Api.Models;

var builder = WebApplication.CreateBuilder(args);

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
// registering AppDbContext in the DI container
// It registered as Scoped lifetime

string connectionString = "Data Source=Person.db";
builder.Services.AddDbContext<AppDbContext>(options => options.
UseSqlite(connectionString));

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
       policy =>
       {
           policy.WithOrigins("http://localhost:4200")
                 .AllowAnyHeader()
                 .AllowAnyMethod();
       });
});

var app = builder.Build();

app.UseCors(MyAllowSpecificOrigins);

app.MapPersonEndpoints();

app.Run();
