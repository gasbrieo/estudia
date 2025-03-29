namespace Estudia.Application.UseCases.Practices.GetPractice;

public class GetPracticeValidator : AbstractValidator<GetPracticeQuery>
{
    public GetPracticeValidator()
    {
        RuleFor(e => e.PracticeId).NotEmpty();
    }
}
