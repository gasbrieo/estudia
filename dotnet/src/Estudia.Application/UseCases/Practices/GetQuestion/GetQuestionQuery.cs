namespace Estudia.Application.UseCases.Practices.GetQuestion;

public record GetQuestionQuery(Guid PracticeId, Guid QuestionId) : IQuery<Result<QuestionDto>>;
