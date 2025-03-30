using Estudia.Application.UseCases.Decks.List;
using Estudia.Domain.Aggregates.Decks.Repositories;
using Estudia.Infrastructure.Persistence;
using Estudia.Infrastructure.Persistence.Repositories;
using Estudia.Infrastructure.Persistence.Services;

namespace Estudia.Infrastructure;

public static class InfrastructureServiceExtensions
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services)
    {
        services.AddDbContext<AppDbContext>(options => options.UseInMemoryDatabase("Estudia"));

        services.AddScoped<IDeckRepository, DeckRepository>();
        services.AddScoped<IListDecksService, ListDecksService>();

        return services;
    }
}
