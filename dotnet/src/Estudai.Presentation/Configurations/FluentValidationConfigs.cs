﻿using Estudai.Application;

namespace Estudai.Presentation.Configurations;

public static class FluentValidationConfigs
{
    public static IServiceCollection AddFluentValidationConfigs(this IServiceCollection services)
    {
        var assemblies = new[]
        {
            typeof(IApplicationMarker).Assembly,
        };

        return services.AddValidatorsFromAssemblies(assemblies);
    }
}
