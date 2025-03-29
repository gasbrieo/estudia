namespace Estudia.Domain.Aggregates.Practices;

public class Answer(Guid questionId, string givenAnswer, bool isCorrect, string? feedback)
{
    public Guid Id { get; set; }
    public Guid QuestionId { get; set; } = questionId;
    public string GivenAnswer { get; set; } = givenAnswer;
    public bool IsCorrect { get; set; } = isCorrect;
    public string? Feedback { get; set; } = feedback;
}