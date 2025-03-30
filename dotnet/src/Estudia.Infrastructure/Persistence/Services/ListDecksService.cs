using Estudia.Application.UseCases;
using Estudia.Application.UseCases.ListDecks;
using Estudia.Infrastructure.Persistence.Extensions;

namespace Estudia.Infrastructure.Persistence.Services;

public class ListDecksService(AppDbContext context) : IListDecksService
{
    public Task<PagedList<BriefDeckDto>> ListAsync(ListDecksQuery query, CancellationToken cancellationToken = default)
    {
        return context.Decks
            .Select(e => new BriefDeckDto(e.Id, e.Name))
            .ToPagedListAsync(query.PageNumber, query.PageSize, cancellationToken);
    }
}
