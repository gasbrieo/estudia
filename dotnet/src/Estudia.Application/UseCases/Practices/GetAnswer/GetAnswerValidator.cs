namespace Estudia.Application.UseCases.Practices.GetAnswer;

public class GetAnswerValidator : AbstractValidator<GetAnswerQuery>
{
    public GetAnswerValidator()
    {
        RuleFor(e => e.PracticeId).NotEmpty();
        RuleFor(e => e.QuestionId).NotEmpty();
        RuleFor(e => e.AnswerId).NotEmpty();
    }
}
