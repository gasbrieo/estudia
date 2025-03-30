namespace Estudai.Application.UseCases.Decks.Get;

public record GetDeckQuery(Guid DeckId) : IQuery<Result<DeckDto>>;
