using Estudia.Domain.Entities;

namespace Estudia.Application.UseCases;

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
