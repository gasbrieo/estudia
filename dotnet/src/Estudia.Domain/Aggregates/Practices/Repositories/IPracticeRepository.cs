namespace Estudia.Domain.Aggregates.Practices.Repositories;

public interface IPracticeRepository
{
    Task<Practice?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);

    Task AddAsync(Practice practice, CancellationToken cancellationToken = default);

    Task UpdateAsync(Practice practice, CancellationToken cancellationToken = default);
}
