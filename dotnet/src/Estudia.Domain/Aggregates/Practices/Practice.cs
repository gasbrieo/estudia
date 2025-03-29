namespace Estudia.Domain.Aggregates.Practices;

public class Practice : IAggregateRoot
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public DateTime StartTime { get; set; } = DateTime.UtcNow;
    public DateTime? EndTime { get; set; }
    public virtual List<PracticeQuestion> Questions { get; set; } = [];
}
