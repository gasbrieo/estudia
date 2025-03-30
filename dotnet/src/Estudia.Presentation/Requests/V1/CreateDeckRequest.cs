namespace Estudia.Presentation.Requests.V1;

public class CreateDeckRequest
{
    public string Name { get; set; } = string.Empty;
    public List<FlashcardRequest> Flashcards { get; set; } = [];
}
