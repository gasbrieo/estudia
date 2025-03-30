using Estudai.Domain.Aggregates.Decks.Repositories;

namespace Estudai.Application.UseCases.Decks.Get;

public class GetDeckHandler(IDeckRepository repository) : IQueryHandler<GetDeckQuery, Result<DeckDto>>
{
    public async Task<Result<DeckDto>> Handle(GetDeckQuery request, CancellationToken cancellationToken)
    {
        var deck = await repository.GetByIdAsync(request.DeckId, cancellationToken);

        if (deck is null)
            return Result.NotFound();

        return DeckDto.FromAggregate(deck);
    }
}