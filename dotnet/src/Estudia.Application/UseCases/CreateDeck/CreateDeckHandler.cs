using Estudia.Domain.Entities;
using Estudia.Domain.Repositories;

namespace Estudia.Application.UseCases.CreateDeck;

public class CreateDeckHandler(IDeckRepository repository) : ICommandHandler<CreateDeckCommand, Result<DeckDto>>
{
    public async Task<Result<DeckDto>> Handle(CreateDeckCommand request, CancellationToken cancellationToken)
    {
        var deck = new Deck(request.Name);

        foreach (var flashcardDto in request.Flashcards)
        {
            var flashcard = new Flashcard(deck.Id, flashcardDto.Front, flashcardDto.Back);
            deck.AddFlashcard(flashcard);
        }

        await repository.AddAsync(deck, cancellationToken);

        return Result.Created(DeckDto.FromAggregate(deck), $"/api/decks/{deck.Id}");
    }
}