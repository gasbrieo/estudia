using Estudai.Domain.Entities;
using Estudai.Domain.Repositories;

namespace Estudai.Infrastructure.Persistence.Repositories;

public class DeckRepository(AppDbContext context) : IDeckRepository
{
    public Task<Deck?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default)
    {
        return context.Decks
            .AsNoTracking()
            .Include(d => d.Flashcards)
            .FirstOrDefaultAsync(d => d.Id == id, cancellationToken);
    }

    public async Task AddAsync(Deck deck, CancellationToken cancellationToken = default)
    {
        await context.Decks.AddAsync(deck, cancellationToken);
        await context.SaveChangesAsync(cancellationToken);
    }

    public async Task UpdateAsync(Deck deck, CancellationToken cancellationToken = default)
    {
        var existingDeck = await context.Decks
            .Include(d => d.Flashcards)
            .FirstOrDefaultAsync(d => d.Id == deck.Id, cancellationToken);

        if (existingDeck is not null)
        {
            context.Entry(existingDeck).CurrentValues.SetValues(deck);
            UpdateFlashcards(existingDeck.Flashcards, deck.Flashcards);
            await context.SaveChangesAsync(cancellationToken);
        }
    }

    public async Task DeleteAsync(Deck deck, CancellationToken cancellationToken = default)
    {
        context.Decks.Remove(deck);
        await context.SaveChangesAsync(cancellationToken);
    }

    private void UpdateFlashcards(IEnumerable<Flashcard> existingFlashcards, IEnumerable<Flashcard> flashcards)
    {
        foreach (var existingFlashcard in existingFlashcards)
        {
            if (!flashcards.Any(c => c.Id == existingFlashcard.Id))
                context.Flashcards.Remove(existingFlashcard);
        }

        foreach (var flashcard in flashcards)
        {
            var existingFlashcard = existingFlashcards
                .FirstOrDefault(f => f.Id == flashcard.Id && f.Id != Guid.Empty);

            if (existingFlashcard is null)
                context.Entry(flashcard).State = EntityState.Added;
        }
    }
}
