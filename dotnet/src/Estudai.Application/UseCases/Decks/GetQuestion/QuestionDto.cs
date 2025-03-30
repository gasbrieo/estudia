namespace Estudai.Application.UseCases.Decks.GetQuestion;

public record QuestionDto(Guid FlashcardId, string Front, List<QuestionOptionDto> Options);
