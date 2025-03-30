using Estudai.Infrastructure.Persistence;
using Estudai.Infrastructure.Persistence.Seeds;
using Estudai.Presentation.Configurations;
using Estudai.Presentation.Middlewares;

var builder = WebApplication.CreateBuilder(args);

builder.Host.AddLoggerConfigs();

builder.Services.AddControllersConfigs();
builder.Services.AddServiceConfigs();
builder.Services.AddSwaggerConfigs();
builder.Services.AddExceptionHandler<GlobalExceptionHandler>();

var app = builder.Build();

app.UseLoggerConfigs();
app.MapControllers();

if (app.Environment.IsDevelopment())
{
    app.UseSwaggerConfigs();
}

app.UseExceptionHandler(_ => { });

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    await DeckSeed.SeedAsync(context);
}

await app.RunAsync();