using Estudia.Domain.Aggregates.Practices.Repositories;

namespace Estudia.Application.UseCases.Practices.CreateQuestion;

public class CreateQuestionHandler(IPracticeRepository repository, IQuestionGeneratorService service) : ICommandHandler<CreateQuestionCommand, Result<QuestionDto>>
{
    public async Task<Result<QuestionDto>> Handle(CreateQuestionCommand request, CancellationToken cancellationToken)
    {
        var practice = await repository.GetByIdAsync(request.PracticeId, cancellationToken);

        if (practice is null)
            return Result.NotFound();

        var generatedQuestion = await service.GenerateQuestionAsync();

        var question = practice.AddQuestion(generatedQuestion.Statement);

        await repository.UpdateAsync(practice, cancellationToken);
        
        return Result.Created(
            new QuestionDto(practice.Id, question.Id, question.Statement),
            $"/api/practices/{practice.Id}/questions/{question.Id}");
    }
}

