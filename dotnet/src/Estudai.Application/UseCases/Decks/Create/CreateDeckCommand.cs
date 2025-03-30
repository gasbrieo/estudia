namespace Estudai.Application.UseCases.Decks.Create;

public record CreateDeckCommand(string Name, List<CreateFlashcardDto> Flashcards) : ICommand<Result<DeckDto>>;

