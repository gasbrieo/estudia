using Estudia.Domain.Aggregates.Practices;
using Estudia.Domain.Aggregates.Practices.Repositories;

namespace Estudia.Infrastructure.Persistence.Repositories;

public class PracticeRepository(AppDbContext context) : IPracticeRepository
{
    public Task<Practice?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default)
    {
        return context.Practices
            .AsNoTracking()
            .Include(p => p.Questions)
            .ThenInclude(q => q.Answers)
            .FirstOrDefaultAsync(p => p.Id == id, cancellationToken);
    }

    public async Task AddAsync(Practice practice, CancellationToken cancellationToken = default)
    {
        await context.Practices.AddAsync(practice, cancellationToken);
        await context.SaveChangesAsync(cancellationToken);
    }

    public async Task UpdateAsync(Practice practice, CancellationToken cancellationToken = default)
    {
        var existingPractice = await context.Practices
            .Include(p => p.Questions)
            .ThenInclude(q => q.Answers)
            .FirstOrDefaultAsync(p => p.Id == practice.Id, cancellationToken);

        if (existingPractice is null)
        {
            return;
        }

        foreach (var question in practice.Questions)
        {
            var existingQuestion = existingPractice.Questions.FirstOrDefault(q => q.Id == question.Id);

            if (existingQuestion is null)
            {
                existingPractice.Questions.Add(question);
                context.Entry(question).State = EntityState.Added;
            }
            else
            {
                foreach (var answer in question.Answers)
                {
                    var existingAnswer = existingQuestion.Answers.FirstOrDefault(a => a.Id == answer.Id);

                    if (existingAnswer is null)
                    {
                        existingQuestion.Answers.Add(answer);
                        context.Entry(answer).State = EntityState.Added;
                    }
                }
            }
        }

        await context.SaveChangesAsync(cancellationToken);
    }
}
