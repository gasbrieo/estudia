namespace Estudia.Application.UseCases.Practices.GetQuestion;

public class GetQuestionValidator : AbstractValidator<GetQuestionQuery>
{
    public GetQuestionValidator()
    {
        RuleFor(e => e.PracticeId).NotEmpty();
        RuleFor(e => e.QuestionId).NotEmpty();
    }
}
