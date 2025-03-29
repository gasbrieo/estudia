using Estudia.Application.UseCases.Practices.CreateAnswer;
using Estudia.Application.UseCases.Practices.CreatePractice;
using Estudia.Application.UseCases.Practices.CreateQuestion;
using Estudia.Application.UseCases.Practices.GetAnswer;
using Estudia.Application.UseCases.Practices.GetPractice;
using Estudia.Application.UseCases.Practices.GetQuestion;
using Estudia.Presentation.Requests.V1;

namespace Estudia.Presentation.Controllers.V1;

public class PracticesController(IMediator mediator) : BaseController
{
    [HttpGet("{practiceId:guid}")]
    public async Task<IActionResult> GetPractice(Guid practiceId, CancellationToken cancellationToken)
    {
        var query = new GetPracticeQuery(practiceId);
        var result = await mediator.Send(query, cancellationToken);
        return result.ToActionResult(this);
    }

    [HttpPost]
    public async Task<IActionResult> CreatePractice(CancellationToken cancellationToken)
    {
        var command = new CreatePracticeCommand();
        var result = await mediator.Send(command, cancellationToken);
        return result.ToActionResult(this);
    }

    [HttpGet("{practiceId:guid}/questions/{questionId:guid}")]
    public async Task<IActionResult> GetQuestion(Guid practiceId, Guid questionId, CancellationToken cancellationToken)
    {
        var query = new GetQuestionQuery(practiceId, questionId);
        var result = await mediator.Send(query, cancellationToken);
        return result.ToActionResult(this);
    }

    [HttpPost("{practiceId:guid}/questions")]
    public async Task<IActionResult> CreateQuestion(Guid practiceId, CancellationToken cancellationToken)
    {
        var command = new CreateQuestionCommand(practiceId);
        var result = await mediator.Send(command, cancellationToken);
        return result.ToActionResult(this);
    }

    [HttpGet("{practiceId:guid}/questions/{questionId:guid}/answers/{answerId:guid}")]
    public async Task<IActionResult> GetAnswer(Guid practiceId, Guid questionId, Guid answerId, CancellationToken cancellationToken)
    {
        var query = new GetAnswerQuery(practiceId, questionId, answerId);
        var result = await mediator.Send(query, cancellationToken);
        return result.ToActionResult(this);
    }

    [HttpPost("{practiceId:guid}/questions/{questionId:guid}/answers")]
    public async Task<IActionResult> CreateAnswer(Guid practiceId, Guid questionId, [FromBody] CreateAnswerRequest request, CancellationToken cancellationToken)
    {
        var command = new CreateAnswerCommand(practiceId, questionId, request.GivenAnswer);
        var result = await mediator.Send(command, cancellationToken);
        return result.ToActionResult(this);
    }
}
