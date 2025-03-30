using Estudai.Domain.Aggregates.Decks.Repositories;

namespace Estudai.Application.UseCases.Decks.GetQuestion;

public class GetQuestionHandler(IDeckRepository repository) : IQueryHandler<GetQuestionQuery, Result<QuestionDto>>
{
    public async Task<Result<QuestionDto>> Handle(GetQuestionQuery request, CancellationToken cancellationToken)
    {
        var deck = await repository.GetByIdAsync(request.DeckId, cancellationToken);

        if (deck is null)
            return Result.NotFound();

        var flashcard = deck.Flashcards.FirstOrDefault(f => f.Id == request.FlashcardId);

        if (flashcard is null)
            return Result.NotFound();

        var distractors = deck.Flashcards
            .Where(f => f.Id != flashcard.Id)
            .OrderBy(_ => Guid.NewGuid())
            .Take(3);

        var options = distractors.Select(f => new QuestionOptionDto(Guid.NewGuid(), f.Back)).ToList();
        options.Add(new QuestionOptionDto(Guid.NewGuid(), flashcard.Back, true));

        options = [.. options.OrderBy(_ => Guid.NewGuid())];

        return new QuestionDto(flashcard.Id, flashcard.Front, options);
    }
}
