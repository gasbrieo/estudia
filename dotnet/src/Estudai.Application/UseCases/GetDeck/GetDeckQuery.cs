namespace Estudai.Application.UseCases.GetDeck;

public record GetDeckQuery(Guid Id) : IQuery<Result<DeckDto>>;
