namespace Estudia.Application.UseCases.Decks.Create;

public record CreateDeckCommand(string Name, List<FlashcardInputDto> Flashcards) : ICommand<Result<DeckDto>>;
