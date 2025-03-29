namespace Estudia.Application.UseCases.Practices.CreateQuestion;

public interface IQuestionGeneratorService
{
    Task<GeneratedQuestionDto> GenerateQuestionAsync();
}
