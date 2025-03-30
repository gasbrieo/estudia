using Estudia.Domain.Entities;
using Estudia.Domain.Repositories;

namespace Estudia.Application.UseCases.UpdateDeck;

public class UpdateDeckHandler(IDeckRepository repository) : ICommandHandler<UpdateDeckCommand, Result<DeckDto>>
{
    public async Task<Result<DeckDto>> Handle(UpdateDeckCommand request, CancellationToken cancellationToken)
    {
        var deck = await repository.GetByIdAsync(request.Id, cancellationToken);

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