namespace Estudia.Application.UseCases.Practices.CreateQuestion;

public record CreateQuestionCommand(Guid PracticeId) : ICommand<Result<QuestionDto>>;
