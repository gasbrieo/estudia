using Estudia.Domain.Aggregates.Practices.Repositories;
using Estudia.Infrastructure.Persistence;
using Estudia.Infrastructure.Persistence.Repositories;

namespace Estudia.Infrastructure;

public static class InfrastructureServiceExtensions
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services)
    {
        services.AddDbContext<AppDbContext>(options => options.UseInMemoryDatabase("Estudia"));

        services.AddScoped<IPracticeRepository, PracticeRepository>();

        return services;
    }
}
