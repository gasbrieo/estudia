namespace Estudia.Application.UseCases.DeleteDeck;

public record DeleteDeckCommand(Guid Id) : ICommand<Result>;
