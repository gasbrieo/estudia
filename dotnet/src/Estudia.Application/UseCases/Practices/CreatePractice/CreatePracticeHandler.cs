using Estudia.Domain.Aggregates.Practices;
using Estudia.Domain.Aggregates.Practices.Repositories;

namespace Estudia.Application.UseCases.Practices.CreatePractice;

public class CreatePracticeHandler(IPracticeRepository repository) : ICommandHandler<CreatePracticeCommand, Result<PracticeDto>>
{
    public async Task<Result<PracticeDto>> Handle(CreatePracticeCommand request, CancellationToken cancellationToken)
    {
        var practice = new Practice();

        await repository.AddAsync(practice, cancellationToken);

        return Result.Created(new PracticeDto(practice.Id, practice.StartTime, practice.EndTime), $"/api/practices/{practice.Id}");
    }
}