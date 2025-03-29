using Estudia.Domain.Aggregates.Practices.Repositories;

namespace Estudia.Application.UseCases.Practices.GetPractice;

public class GetPracticeHandler(IPracticeRepository repository) : IQueryHandler<GetPracticeQuery, Result<PracticeDto>>
{
    public async Task<Result<PracticeDto>> Handle(GetPracticeQuery request, CancellationToken cancellationToken)
    {
        var practice = await repository.GetByIdAsync(request.PracticeId, cancellationToken);

        if (practice is null)
            return Result.NotFound();

        return new PracticeDto(practice.Id, practice.StartTime, practice.EndTime);
    }
}