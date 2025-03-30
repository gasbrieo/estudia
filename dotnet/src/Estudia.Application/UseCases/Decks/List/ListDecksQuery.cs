namespace Estudia.Application.UseCases.Decks.List;

public record ListDecksQuery(int PageNumber, int PageSize) : IQuery<Result<PagedList<BriefDeckDto>>>;
