using Estudai.Domain.Aggregates.Decks;

namespace Estudai.Infrastructure.Persistence;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options), IUnitOfWork
{
    public DbSet<Deck> Decks { get; set; } = null!;
    public DbSet<Flashcard> Flashcards { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}
