using Estudai.Domain.Entities;

namespace Estudai.Domain.Repositories;

public interface IDeckRepository
{
    Task<Deck?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);

    Task AddAsync(Deck deck, CancellationToken cancellationToken = default);

    Task UpdateAsync(Deck deck, CancellationToken cancellationToken = default);

    Task DeleteAsync(Deck deck, CancellationToken cancellationToken = default);
}
