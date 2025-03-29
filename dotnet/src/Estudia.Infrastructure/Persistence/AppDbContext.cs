using Estudia.Domain.Aggregates.Practices;

namespace Estudia.Infrastructure.Persistence;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options), IUnitOfWork
{
    public DbSet<Practice> Practices { get; set; } = null!;
    public DbSet<PracticeQuestion> PracticeQuestions { get; set; } = null!;
    public DbSet<PracticeQuestionAnswer> PracticeQuestionAnswers { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}
