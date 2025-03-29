namespace Estudia.Application.UseCases.Practices.CreateQuestion;

public class CreateQuestionValidator : AbstractValidator<CreateQuestionCommand>
{
    public CreateQuestionValidator()
    {
        RuleFor(e => e.PracticeId).NotEmpty();
    }
}