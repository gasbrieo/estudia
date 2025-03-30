using Estudia.Infrastructure.Persistence;

namespace Estudia.Infrastructure;

public static class InfrastructureServiceExtensions
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services)
    {
        services.AddDbContext<AppDbContext>(options => options.UseInMemoryDatabase("Estudia"));

        return services;
    }
}
