namespace Estudai.Application.UseCases.ListDecks;

public interface IListDecksService
{
    Task<PagedList<BriefDeckDto>> ListAsync(ListDecksQuery query, CancellationToken cancellationToken = default);
}