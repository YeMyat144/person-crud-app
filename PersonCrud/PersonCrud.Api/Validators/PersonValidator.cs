using FluentValidation;
using FluentValidation.Validators;
using PersonCrud.Api.Models;

namespace PersonCrud.Api.Validators;

public class PersonValidator : AbstractValidator<Person>
{
    public PersonValidator()
    {
        RuleFor(p => p.FirstName)
            .NotEmpty().WithMessage("First name is required.")
            .MaximumLength(30)
            .WithMessage("First name cannot exceed 30 characters.");

        RuleFor(p => p.LastName)
            .NotEmpty().WithMessage("Last name is required.")
            .MaximumLength(30)
            .WithMessage("Last name cannot exceed 30 characters.");
    }

}
