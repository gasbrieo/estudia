using Estudai.Domain.Aggregates.Decks.Repositories;

namespace Estudai.Application.UseCases.Decks.Delete;

public class DeleteDeckHandler(IDeckRepository repository) : ICommandHandler<DeleteDeckCommand, Result>
{
    public async Task<Result> Handle(DeleteDeckCommand request, CancellationToken cancellationToken)
    {
        var deck = await repository.GetByIdAsync(request.DeckId, cancellationToken);

        if (deck is not null)
            await repository.DeleteAsync(deck, cancellationToken);

        return Result.NoContent();
    }
}