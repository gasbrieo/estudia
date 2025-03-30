using Estudai.Domain.Aggregates.Decks;
using Estudai.Domain.Aggregates.Decks.Repositories;

namespace Estudai.Application.UseCases.Decks.Update;

public class UpdateDeckHandler(IDeckRepository repository) : ICommandHandler<UpdateDeckCommand, Result<DeckDto>>
{
    public async Task<Result<DeckDto>> Handle(UpdateDeckCommand request, CancellationToken cancellationToken)
    {
        var deck = await repository.GetByIdAsync(request.DeckId, cancellationToken);

        if (deck is null)
            return Result.NotFound();

        deck.ClearFlashcards();

        foreach (var flashcardDto in request.Flashcards)
        {
            var flashcard = new Flashcard(deck.Id, flashcardDto.Front, flashcardDto.Back);
            deck.AddFlashcard(flashcard);
        }

        await repository.UpdateAsync(deck, cancellationToken);

        return DeckDto.FromAggregate(deck);
    }
}