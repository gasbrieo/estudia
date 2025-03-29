namespace Estudia.Application.UseCases.Practices.CreateAnswer;

public record CreateAnswerCommand(Guid PracticeId, Guid QuestionId, string GivenAnswer) : ICommand<Result<AnswerDto>>;
