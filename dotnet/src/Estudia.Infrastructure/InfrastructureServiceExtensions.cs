using Estudia.Application.UseCases.Practices.CreateAnswer;
using Estudia.Application.UseCases.Practices.CreateQuestion;
using Estudia.Domain.Aggregates.Practices.Repositories;
using Estudia.Infrastructure.OpenAI.Services;
using Estudia.Infrastructure.Persistence;
using Estudia.Infrastructure.Persistence.Repositories;

namespace Estudia.Infrastructure;

public static class InfrastructureServiceExtensions
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services)
    {
        services.AddDbContext<AppDbContext>(options => options.UseInMemoryDatabase("Estudia"));

        services.AddScoped<IPracticeRepository, PracticeRepository>();

        services.AddScoped<IQuestionGeneratorService, FakeQuestionGeneratorService>();
        services.AddScoped<IAnswerValidatorService, FakeAnswerValidatorService>();

        return services;
    }
}
