using Estudia.Domain.Aggregates.Decks.Repositories;

namespace Estudia.Application.UseCases.Decks.Get;

public class GetDeckHandler(IDeckRepository repository) : IQueryHandler<GetDeckQuery, Result<DeckDto>>
{
    public async Task<Result<DeckDto>> Handle(GetDeckQuery request, CancellationToken cancellationToken)
    {
        var deck = await repository.GetByIdAsync(request.Id, cancellationToken);

        if (deck is null)
            return Result.NotFound();

        return DeckDto.FromAggregate(deck);
    }
}