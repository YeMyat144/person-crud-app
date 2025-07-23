using System;
using System.ComponentModel.DataAnnotations;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using PersonCrud.Api.Models;

namespace PersonCrud.Api.Endpoints;

public static class PersonEndpoints
{
    public static void MapPersonEndpoints(this WebApplication app)
    {
        app.MapGet("/api/people", async (AppDbContext context) =>
        {
            try
            {
                var people = await context.People.ToListAsync();
                return Results.Ok(people);
            }
            catch (Exception ex)
            {
                return Results.InternalServerError(ex.Message);
            }
        }).WithName("GetAllPeople");

        app.MapGet("/api/people/{id:int}", async (int id, AppDbContext context) =>
        {
            try
            {
                var person = await context.People.FindAsync(id);
                if (person == null)
                {
                    return Results.NotFound($"Person with ID {id} not found.");
                }
                return Results.Ok(person);
            }
            catch (Exception ex)
            {
                return Results.InternalServerError(ex.Message);
            }
        }).WithName("GetPersonbyId");

        app.MapPost("/api/people", async (IValidator<Person> personValidator, AppDbContext context, Person person) =>
        {
            try
            {
                var validationResult = await personValidator.ValidateAsync(person);
                if (!validationResult.IsValid)
                {
                    return Results.ValidationProblem(validationResult.ToDictionary());
                }

                context.People.Add(person);
                await context.SaveChangesAsync();
                return Results.CreatedAtRoute("GetPersonbyId", new { id = person.Id }, person);
            }
            catch (Exception ex)
            {
                return Results.InternalServerError(ex.Message);
            }
        }).WithName("CreatePerson");

        app.MapPut("/api/people/{id:int}", async (IValidator<Person> personValidator, int id, AppDbContext context, Person person) =>
        {
            try
            {
                var validationResult = await personValidator.ValidateAsync(person);
                if (!validationResult.IsValid)
                {
                    return Results.ValidationProblem(validationResult.ToDictionary());
                }
                if (id != person.Id)
                {
                    return Results.BadRequest("ID mismatch.");
                }
                if (!await context.People.AnyAsync(p => p.Id == id))
                {
                    return Results.NotFound($"Person with ID {id} not found.");
                }
                context.People.Update(person);
                await context.SaveChangesAsync();
                return Results.NoContent();
            }
            catch (Exception ex)
            {
                return Results.InternalServerError(ex.Message);
            }
        }).WithName("UpdatePerson");

        app.MapDelete("/api/people/{id:int}", async (int id, AppDbContext context) =>
        {
            try
            {
                var person = await context.People.FindAsync(id);
                if (person == null)
                {
                    return Results.NotFound($"Person with ID {id} not found.");
                }
                context.People.Remove(person);
                await context.SaveChangesAsync();
                return Results.NoContent();
            }
            catch (Exception ex)
            {
                return Results.InternalServerError(ex.Message);
            }
        }).WithName("DeletePerson");
    }
}
