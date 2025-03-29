namespace Estudia.Application.UseCases.Practices.CreatePractice;

public record CreatePracticeCommand() : ICommand<Result<PracticeDto>>;
