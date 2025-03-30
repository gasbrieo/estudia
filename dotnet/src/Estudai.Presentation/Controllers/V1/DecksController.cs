using Estudai.Application.UseCases;
using Estudai.Application.UseCases.CreateDeck;
using Estudai.Application.UseCases.DeleteDeck;
using Estudai.Application.UseCases.GetDeck;
using Estudai.Application.UseCases.ListDecks;
using Estudai.Application.UseCases.UpdateDeck;
using Estudai.Presentation.Requests.V1;

namespace Estudai.Presentation.Controllers.V1;

public class DecksController(IMediator mediator) : BaseController
{
    [HttpGet]
    public async Task<IActionResult> ListDecks([FromQuery] ListDecksRequest request, CancellationToken cancellationToken)
    {
        var query = new ListDecksQuery(request.PageNumber, request.PageSize);
        var result = await mediator.Send(query, cancellationToken);
        return result.ToActionResult(this);
    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetDeck(Guid id, CancellationToken cancellationToken)
    {
        var query = new GetDeckQuery(id);
        var result = await mediator.Send(query, cancellationToken);
        return result.ToActionResult(this);
    }

    [HttpPost]
    public async Task<IActionResult> CreateDeck([FromBody] CreateDeckRequest request, CancellationToken cancellationToken)
    {
        var command = new CreateDeckCommand(
            request.Name,
            [.. request.Flashcards.Select(f => new FlashcardInputDto(f.Front, f.Back))]);
        var result = await mediator.Send(command, cancellationToken);
        return result.ToActionResult(this);
    }

    [HttpPut("{id:guid}")]
    public async Task<IActionResult> UpdateDeck(Guid id, [FromBody] UpdateDeckRequest request, CancellationToken cancellationToken)
    {
        var command = new UpdateDeckCommand(
            id,
            request.Name,
            [.. request.Flashcards.Select(f => new FlashcardInputDto(f.Front, f.Back))]);
        var result = await mediator.Send(command, cancellationToken);
        return result.ToActionResult(this);
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> DeleteDeck(Guid id, CancellationToken cancellationToken)
    {
        var command = new DeleteDeckCommand(id);
        var result = await mediator.Send(command, cancellationToken);
        return result.ToActionResult(this);
    }
}
