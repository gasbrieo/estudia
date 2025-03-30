using Estudai.Application.UseCases.ListDecks;
using Estudai.Domain.Repositories;
using Estudai.Infrastructure.Persistence;
using Estudai.Infrastructure.Persistence.Repositories;
using Estudai.Infrastructure.Persistence.Services;

namespace Estudai.Infrastructure;

public static class InfrastructureServiceExtensions
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services)
    {
        services.AddDbContext<AppDbContext>(options => options.UseInMemoryDatabase("Estudai"));

        services.AddScoped<IDeckRepository, DeckRepository>();
        services.AddScoped<IListDecksService, ListDecksService>();

        return services;
    }
}
