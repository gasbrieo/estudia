using Estudia.Application;
using Estudia.Domain;

namespace Estudia.Presentation.Configurations;

public static class MediatrConfigs
{
    public static IServiceCollection AddMediatrConfigs(this IServiceCollection services)
    {
        var assemblies = new[]
        {
            typeof(IApplicationMarker).Assembly,
            typeof(IDomainMarker).Assembly
        };

        return services
            .AddMediatR(cfg =>
            {
                cfg.RegisterServicesFromAssemblies(assemblies!);
                cfg.AddOpenBehavior(typeof(ValidationAsExceptionBehavior<,>));
            });
    }
}
