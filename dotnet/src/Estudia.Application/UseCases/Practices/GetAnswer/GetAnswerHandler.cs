using Estudia.Domain.Aggregates.Practices.Repositories;

namespace Estudia.Application.UseCases.Practices.GetAnswer;

public class GetAnswerHandler(IPracticeRepository repository) : IQueryHandler<GetAnswerQuery, Result<AnswerDto>>
{
    public async Task<Result<AnswerDto>> Handle(GetAnswerQuery request, CancellationToken cancellationToken)
    {
        var practice = await repository.GetByIdAsync(request.PracticeId, cancellationToken);

        if (practice is null)
            return Result.NotFound();

        var question = practice.Questions.SingleOrDefault(q => q.Id == request.QuestionId);

        if (question is null)
            return Result.NotFound();

        var answer = question.Answers.SingleOrDefault(a => a.Id == request.AnswerId);

        if (answer is null)
            return Result.NotFound();

        return new AnswerDto(practice.Id, question.Id, answer.Id, answer.GivenAnswer, answer.IsCorrect, answer.Feedback);
    }
}