namespace Estudai.Application.UseCases.Decks.List;

public class ListDecksHandler(IListDecksService service) : IQueryHandler<ListDecksQuery, Result<PagedList<BriefDeckDto>>>
{
    public async Task<Result<PagedList<BriefDeckDto>>> Handle(ListDecksQuery request, CancellationToken cancellationToken)
    {
        return await service.ListAsync(request, cancellationToken);
    }
}
