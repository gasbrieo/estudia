namespace Estudai.Application.UseCases.Decks.GetQuestion;

public record GetQuestionQuery(Guid DeckId, Guid FlashcardId) : IQuery<Result<QuestionDto>>;
