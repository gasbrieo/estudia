namespace Estudai.Application.UseCases.DeleteDeck;

public record DeleteDeckCommand(Guid Id) : ICommand<Result>;
