using Estudia.Domain.Aggregates.Decks;

namespace Estudia.Application.UseCases.Decks;

public record DeckDto(Guid Id, string Name, List<FlashcardDto> Flashcards)
{
    public static DeckDto FromAggregate(Deck deck)
    {
        return new DeckDto(
            deck.Id,
            deck.Name,
            [.. deck.Flashcards.Select(f => new FlashcardDto(f.Id, f.Front, f.Back))]
        );
    }
};
