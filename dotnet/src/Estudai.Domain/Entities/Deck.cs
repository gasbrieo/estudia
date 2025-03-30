namespace Estudai.Domain.Entities;

public class Deck(string name) : IAggregateRoot
{
    public Guid Id { get; private set; } = Guid.NewGuid();
    public string Name { get; private set; } = name;

    private readonly List<Flashcard> _flashcards = [];
    public IReadOnlyCollection<Flashcard> Flashcards => _flashcards.AsReadOnly();

    public void AddFlashcard(Flashcard flashcard)
    {
        _flashcards.Add(flashcard);
    }

    public void ClearFlashcards()
    {
        _flashcards.Clear();
    }
}
