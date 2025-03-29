namespace Estudia.Domain.Aggregates.Practices;

public class Question(Guid practiceId, string statement)
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid PracticeId { get; set; } = practiceId;
    public string Statement { get; set; } = statement;
    public virtual List<Answer> Answers { get; set; } = [];

    public Answer AddAnswer(string givenAnswer, bool isCorrect, string? feedback)
    {
        var answer = new Answer(Id, givenAnswer, isCorrect, feedback);
        Answers.Add(answer);
        return answer;
    }
}
