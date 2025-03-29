using Estudia.Domain;
using Estudia.Application;

namespace Estudia.Presentation.Configurations;

public static class MediatrConfigs
{
    public static IServiceCollection AddMediatrConfigs(this IServiceCollection services)
    {
        var assemblies = new[]
        {
            typeof(IUseCasesMarker).Assembly,
            typeof(ICoreMarker).Assembly
        };

        return services
            .AddMediatR(cfg =>
            {
                cfg.RegisterServicesFromAssemblies(assemblies!);
                cfg.AddOpenBehavior(typeof(ValidationAsExceptionBehavior<,>));
            });
    }
}
