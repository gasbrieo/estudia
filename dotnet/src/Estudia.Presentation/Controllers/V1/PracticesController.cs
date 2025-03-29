using Estudia.Domain.Aggregates.Practices;
using Estudia.Domain.Aggregates.Practices.Repositories;

namespace Estudia.Presentation.Controllers.V1;

public class PracticesController(IPracticeRepository repository) : BaseController
{
    [HttpGet("{practiceId:guid}")]
    public async Task<IActionResult> GetPractice(Guid practiceId, CancellationToken cancellationToken)
    {
        var practice = await repository.GetByIdAsync(practiceId, cancellationToken);

        if (practice is null)
            return NotFound();

        return Ok(practice);
    }

    [HttpPost]
    public async Task<IActionResult> CreatePractice(CancellationToken cancellationToken)
    {
        var practice = new Practice();
        
        await repository.AddAsync(practice, cancellationToken);
        
        return Ok(practice);
    }

    [HttpPost("{practiceId:guid}/questions")]
    public async Task<IActionResult> CreatePracticeQuestion(Guid practiceId, CancellationToken cancellationToken)
    {
        var practice = await repository.GetByIdAsync(practiceId, cancellationToken);

        if (practice is null)
            return NotFound();

        practice.Questions.Add(new PracticeQuestion(practice.Id, "Quanto é 10 + 10?"));

        await repository.UpdateAsync(practice, cancellationToken);

        return Ok(practice);
    }

    [HttpPost("{practiceId:guid}/questions/{questionId:guid}/answers")]
    public async Task<IActionResult> CreatePracticeQuestionAnswer(Guid practiceId, Guid questionId, CancellationToken cancellationToken)
    {
        var practice = await repository.GetByIdAsync(practiceId, cancellationToken);

        if (practice is null)
            return NotFound();

        var question = practice.Questions.SingleOrDefault(q => q.Id == questionId);

        if (question is null)
            return NotFound();

        question.Answers.Add(new PracticeQuestionAnswer(questionId, "20", true, "Você está correto!"));

        await repository.UpdateAsync(practice, cancellationToken);

        return Ok(practice);
    }
}
