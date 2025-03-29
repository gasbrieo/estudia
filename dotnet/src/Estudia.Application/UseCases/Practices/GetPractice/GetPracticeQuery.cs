namespace Estudia.Application.UseCases.Practices.GetPractice;

public record GetPracticeQuery(Guid PracticeId) : IQuery<Result<PracticeDto>>;
