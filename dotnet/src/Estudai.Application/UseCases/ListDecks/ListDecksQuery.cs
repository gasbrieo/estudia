namespace Estudai.Application.UseCases.ListDecks;

public record ListDecksQuery(int PageNumber, int PageSize) : IQuery<Result<PagedList<BriefDeckDto>>>;
