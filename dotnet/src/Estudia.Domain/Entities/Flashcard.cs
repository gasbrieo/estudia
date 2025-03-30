namespace Estudia.Domain.Entities;

public class Flashcard(Guid deckId, string front, string back)
{
    public Guid Id { get; private set; } = Guid.NewGuid();
    public Guid DeckId { get; private set; } = deckId;
    public string Front { get; private set; } = front;
    public string Back { get; private set; } = back;
}
