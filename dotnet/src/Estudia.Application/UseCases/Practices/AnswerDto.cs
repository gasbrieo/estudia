namespace Estudia.Application.UseCases.Practices;

public record AnswerDto(Guid PracticeId, Guid QuestionId, Guid AnswerId, string GivenAnswer, bool IsCorrect, string? Feedback);