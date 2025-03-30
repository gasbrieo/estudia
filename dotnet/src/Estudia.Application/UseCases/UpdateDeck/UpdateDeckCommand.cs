namespace Estudia.Application.UseCases.UpdateDeck;

public record UpdateDeckCommand(Guid Id, string Name, List<FlashcardInputDto> Flashcards) : ICommand<Result<DeckDto>>;
