using Estudia.Domain.Aggregates.Practices.Repositories;

namespace Estudia.Application.UseCases.Practices.CreateAnswer;

public class CreateAnswerHandler(IPracticeRepository repository, IAnswerValidatorService service) : ICommandHandler<CreateAnswerCommand, Result<AnswerDto>>
{
    public async Task<Result<AnswerDto>> Handle(CreateAnswerCommand request, CancellationToken cancellationToken)
    {
        var practice = await repository.GetByIdAsync(request.PracticeId, cancellationToken);

        if (practice is null)
            return Result.NotFound();

        var question = practice.Questions.SingleOrDefault(q => q.Id == request.QuestionId);

        if (question is null)
            return Result.NotFound();

        var validatedAnswer = await service.ValidateAnswerAsync(question.Statement, request.GivenAnswer);

        var answer = question.AddAnswer(request.GivenAnswer, validatedAnswer.IsCorrect, validatedAnswer.Feedback);

        await repository.UpdateAsync(practice, cancellationToken);

        return Result.Created(
            new AnswerDto(practice.Id, question.Id, answer.Id, answer.GivenAnswer, answer.IsCorrect, answer.Feedback),
            $"/api/practices/{practice.Id}/questions/{question.Id}/answers/{answer.Id}");
    }
}