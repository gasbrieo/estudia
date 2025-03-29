using Estudia.Application;

namespace Estudia.Presentation.Configurations;

public static class FluentValidationConfigs
{
    public static IServiceCollection AddFluentValidationConfigs(this IServiceCollection services)
    {
        var assemblies = new[]
        {
            typeof(IUseCasesMarker).Assembly,
        };

        return services.AddValidatorsFromAssemblies(assemblies);
    }
}
