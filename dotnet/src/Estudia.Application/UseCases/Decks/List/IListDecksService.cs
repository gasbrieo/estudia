namespace Estudia.Application.UseCases.Decks.List;

public interface IListDecksService
{
    Task<PagedList<BriefDeckDto>> ListAsync(ListDecksQuery query, CancellationToken cancellationToken = default);
}