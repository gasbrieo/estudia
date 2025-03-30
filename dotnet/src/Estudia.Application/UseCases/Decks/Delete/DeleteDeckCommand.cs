namespace Estudia.Application.UseCases.Decks.Delete;

public record DeleteDeckCommand(Guid Id) : ICommand<Result>;
