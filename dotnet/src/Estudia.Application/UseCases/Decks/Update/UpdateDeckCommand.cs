namespace Estudia.Application.UseCases.Decks.Update;

public record UpdateDeckCommand(Guid Id, string Name, List<FlashcardInputDto> Flashcards) : ICommand<Result<DeckDto>>;
