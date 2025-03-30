using Estudai.Application.UseCases.Decks.Create;
using Estudai.Application.UseCases.Decks.Delete;
using Estudai.Application.UseCases.Decks.Get;
using Estudai.Application.UseCases.Decks.GetQuestion;
using Estudai.Application.UseCases.Decks.List;
using Estudai.Application.UseCases.Decks.Update;
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

    [HttpGet("{deckId:guid}")]
    public async Task<IActionResult> GetDeck(Guid deckId, CancellationToken cancellationToken)
    {
        var query = new GetDeckQuery(deckId);
        var result = await mediator.Send(query, cancellationToken);
        return result.ToActionResult(this);
    }

    [HttpPost]
    public async Task<IActionResult> CreateDeck([FromBody] CreateDeckRequest request, CancellationToken cancellationToken)
    {
        var command = new CreateDeckCommand(
            request.Name,
            [.. request.Flashcards.Select(f => new CreateFlashcardDto(f.Front, f.Back))]);
        var result = await mediator.Send(command, cancellationToken);
        return result.ToActionResult(this);
    }

    [HttpPut("{deckId:guid}")]
    public async Task<IActionResult> UpdateDeck(Guid deckId, [FromBody] UpdateDeckRequest request, CancellationToken cancellationToken)
    {
        var command = new UpdateDeckCommand(
            deckId,
            request.Name,
            [.. request.Flashcards.Select(f => new CreateFlashcardDto(f.Front, f.Back))]);
        var result = await mediator.Send(command, cancellationToken);
        return result.ToActionResult(this);
    }

    [HttpDelete("{deckId:guid}")]
    public async Task<IActionResult> DeleteDeck(Guid deckId, CancellationToken cancellationToken)
    {
        var command = new DeleteDeckCommand(deckId);
        var result = await mediator.Send(command, cancellationToken);
        return result.ToActionResult(this);
    }

    [HttpGet("{deckId:guid}/flashcards/{flashcardId:guid}:question-mode")]
    public async Task<IActionResult> GetQuestion(Guid deckId, Guid flashcardId, CancellationToken cancellationToken)
    {
        var query = new GetQuestionQuery(deckId, flashcardId);
        var result = await mediator.Send(query, cancellationToken);
        return result.ToActionResult(this);
    }
}
