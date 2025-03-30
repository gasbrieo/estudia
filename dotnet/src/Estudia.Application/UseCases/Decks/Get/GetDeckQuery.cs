namespace Estudia.Application.UseCases.Decks.Get;

public record GetDeckQuery(Guid Id) : IQuery<Result<DeckDto>>;
