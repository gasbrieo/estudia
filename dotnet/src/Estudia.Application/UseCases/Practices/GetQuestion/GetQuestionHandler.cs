using Estudia.Domain.Aggregates.Practices.Repositories;

namespace Estudia.Application.UseCases.Practices.GetQuestion;

public class GetQuestionHandler(IPracticeRepository repository) : IQueryHandler<GetQuestionQuery, Result<QuestionDto>>
{
    public async Task<Result<QuestionDto>> Handle(GetQuestionQuery request, CancellationToken cancellationToken)
    {
        var practice = await repository.GetByIdAsync(request.PracticeId, cancellationToken);

        if (practice is null)
            return Result.NotFound();

        var question = practice.Questions.SingleOrDefault(q => q.Id == request.QuestionId);

        if (question is null)
            return Result.NotFound();

        return new QuestionDto(practice.Id, question.Id, question.Statement);
    }
}