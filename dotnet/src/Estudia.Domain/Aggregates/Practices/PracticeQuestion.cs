namespace Estudia.Domain.Aggregates.Practices;

public class PracticeQuestion(Guid practiceId, string statement)
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid PracticeId { get; set; } = practiceId;
    public string Statement { get; set; } = statement;
    public virtual List<PracticeQuestionAnswer> Answers { get; set; } = [];
}
