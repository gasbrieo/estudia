using Estudai.Application.UseCases.Decks.Create;

namespace Estudai.Application.UseCases.Decks.Update;

public record UpdateDeckCommand(Guid DeckId, string Name, List<CreateFlashcardDto> Flashcards) : ICommand<Result<DeckDto>>;
