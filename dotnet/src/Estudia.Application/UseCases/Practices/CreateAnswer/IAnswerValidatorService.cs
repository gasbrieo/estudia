namespace Estudia.Application.UseCases.Practices.CreateAnswer;

public interface IAnswerValidatorService
{
    Task<ValidatedAnswerDto> ValidateAnswerAsync(string statement, string givenAnswer);
}