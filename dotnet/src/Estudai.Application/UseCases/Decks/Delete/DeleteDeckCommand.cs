namespace Estudai.Application.UseCases.Decks.Delete;

public record DeleteDeckCommand(Guid DeckId) : ICommand<Result>;
