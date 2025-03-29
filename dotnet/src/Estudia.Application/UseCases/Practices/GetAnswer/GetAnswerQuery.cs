namespace Estudia.Application.UseCases.Practices.GetAnswer;

public record GetAnswerQuery(Guid PracticeId, Guid QuestionId, Guid AnswerId) : IQuery<Result<AnswerDto>>;
