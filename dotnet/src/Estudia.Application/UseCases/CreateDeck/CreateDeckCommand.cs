namespace Estudia.Application.UseCases.CreateDeck;

public record CreateDeckCommand(string Name, List<FlashcardInputDto> Flashcards) : ICommand<Result<DeckDto>>;

