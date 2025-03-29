using Estudia.Application.UseCases.Practices.CreateQuestion;

namespace Estudia.Infrastructure.OpenAI.Services;

public class OpenAIQuestionGeneratorService : IQuestionGeneratorService
{
    public async Task<GeneratedQuestionDto> GenerateQuestionAsync()
    {
        throw new NotImplementedException();
    }
}

public class FakeQuestionGeneratorService : IQuestionGeneratorService
{
    public async Task<GeneratedQuestionDto> GenerateQuestionAsync()
    {
        return new GeneratedQuestionDto("Quanto é 10 + 10?");
    }
}