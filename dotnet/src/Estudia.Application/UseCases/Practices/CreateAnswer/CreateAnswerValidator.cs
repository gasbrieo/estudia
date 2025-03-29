namespace Estudia.Application.UseCases.Practices.CreateAnswer;

public class CreateAnswerValidator : AbstractValidator<CreateAnswerCommand>
{
    public CreateAnswerValidator()
    {
        RuleFor(e => e.PracticeId).NotEmpty();
        RuleFor(e => e.QuestionId).NotEmpty();
        RuleFor(e => e.GivenAnswer).NotEmpty();
    }
}
