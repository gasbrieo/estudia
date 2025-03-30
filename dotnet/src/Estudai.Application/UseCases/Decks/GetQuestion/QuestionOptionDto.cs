namespace Estudai.Application.UseCases.Decks.GetQuestion;

public record QuestionOptionDto(Guid OptionId, string Back, bool IsCorrect = false);