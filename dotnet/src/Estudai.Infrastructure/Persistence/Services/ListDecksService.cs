using Estudai.Application.UseCases.Decks.List;
using Estudai.Infrastructure.Persistence.Extensions;

namespace Estudai.Infrastructure.Persistence.Services;

public class ListDecksService(AppDbContext context) : IListDecksService
{
    public Task<PagedList<BriefDeckDto>> ListAsync(ListDecksQuery query, CancellationToken cancellationToken = default)
    {
        return context.Decks
            .Select(e => new BriefDeckDto(e.Id, e.Name))
            .ToPagedListAsync(query.PageNumber, query.PageSize, cancellationToken);
    }
}
