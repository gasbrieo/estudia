using Estudia.Application.UseCases.Practices.CreateAnswer;

namespace Estudia.Infrastructure.OpenAI.Services;

public class OpenAIAnswerValidatorService : IAnswerValidatorService
{
    public async Task<ValidatedAnswerDto> ValidateAnswerAsync(string statement, string givenAnswer)
    {
        throw new NotImplementedException();
    }
}

public class FakeAnswerValidatorService : IAnswerValidatorService
{
    public async Task<ValidatedAnswerDto> ValidateAnswerAsync(string statement, string givenAnswer)
    {
        return new ValidatedAnswerDto(true, null);
    }
}