namespace Estudia.Application.UseCases.Practices.CreateAnswer;

public record ValidatedAnswerDto(bool IsCorrect, string? Feedback);
