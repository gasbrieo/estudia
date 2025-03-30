using Estudai.Domain.Aggregates.Decks;

namespace Estudai.Application.UseCases.Decks;

public record DeckDto(Guid DeckId, string Name, List<FlashcardDto> Flashcards)
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
