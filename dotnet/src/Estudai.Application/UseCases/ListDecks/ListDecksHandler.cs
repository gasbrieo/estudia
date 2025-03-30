namespace Estudai.Application.UseCases.ListDecks;

public class ListDecksHandler(IListDecksService service) : IQueryHandler<ListDecksQuery, Result<PagedList<BriefDeckDto>>>
{
    public async Task<Result<PagedList<BriefDeckDto>>> Handle(ListDecksQuery request, CancellationToken cancellationToken)
    {
        return await service.ListAsync(request, cancellationToken);
    }
}
