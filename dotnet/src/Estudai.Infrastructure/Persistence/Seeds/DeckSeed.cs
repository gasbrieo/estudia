using Estudai.Domain.Aggregates.Decks;

namespace Estudai.Infrastructure.Persistence.Seeds;

public static class DeckSeed
{
    public static async Task SeedAsync(AppDbContext context)
    {
        var deck1 = new Deck("Continente, Oceanos e Localização Global");
        deck1.AddFlashcard(new Flashcard(deck1.Id, "Em qual continente o Brasil está localizado?", "América do Sul"));
        deck1.AddFlashcard(new Flashcard(deck1.Id, "Por qual oceano o Brasil é banhado?", "Oceano Atlântico"));
        deck1.AddFlashcard(new Flashcard(deck1.Id, "Quais são os três subcontinentes que formam o continente americano?", "América do Sul, América Central e América do Norte"));
        deck1.AddFlashcard(new Flashcard(deck1.Id, "Qual continente está ao sul da África?", "Antártida"));
        deck1.AddFlashcard(new Flashcard(deck1.Id, "Qual continente está ao norte da África?", "Europa"));
        deck1.AddFlashcard(new Flashcard(deck1.Id, "Quais continentes estão a leste da América?", "África, Europa, Oceania e Ásia"));
        deck1.AddFlashcard(new Flashcard(deck1.Id, "Quais são os oceanos que aparecem no mapa?", "Atlântico, Pacífico e Índico"));
        deck1.AddFlashcard(new Flashcard(deck1.Id, "Quais são os nomes das linhas imaginárias que cortam o Brasil?", "Trópico de Capricórnio e Linha do Equador"));
        await context.Decks.AddAsync(deck1);

        var deck2 = new Deck("Fronteiras e Países da América do Sul");
        deck2.AddFlashcard(new Flashcard(deck2.Id, "Cite cinco países que compõem a América do Sul.", "Brasil, Bolívia, Argentina, Uruguai, Paraguai"));
        deck2.AddFlashcard(new Flashcard(deck2.Id, "Quais países fazem fronteira ao norte com o Brasil?", "Guiana Francesa, Guiana, Venezuela, Colômbia, Suriname"));
        deck2.AddFlashcard(new Flashcard(deck2.Id, "Quais países fazem fronteira ao sul com o Brasil?", "Argentina e Uruguai"));
        deck2.AddFlashcard(new Flashcard(deck2.Id, "Quais países fazem fronteira a oeste com o Brasil?", "Bolívia e Peru"));
        deck2.AddFlashcard(new Flashcard(deck2.Id, "Quais países não fazem fronteira com o Brasil?", "Equador e Chile"));
        await context.Decks.AddAsync(deck2);

        var deck3 = new Deck("Fundamentos da Geografia");
        deck3.AddFlashcard(new Flashcard(deck3.Id, "O que é Geografia?", "É a ciência que estuda a Terra, o universo e como as pessoas transformam os lugares em que vivem."));
        deck3.AddFlashcard(new Flashcard(deck3.Id, "Qual a importância da Geografia?", "Nos ajuda a compreender as ações humanas e transformar a realidade."));
        deck3.AddFlashcard(new Flashcard(deck3.Id, "O que são registros do espaço?", "Representações de lugares e paisagens ao longo do tempo."));
        deck3.AddFlashcard(new Flashcard(deck3.Id, "Como eram feitos os primeiros registros do espaço?", "Com materiais como madeira, argila, tecidos e pele de animais."));
        deck3.AddFlashcard(new Flashcard(deck3.Id, "O que são mapas?", "Instrumentos que representam uma área do espaço para localização e estudo."));
        await context.Decks.AddAsync(deck3);

        var deck4 = new Deck("Divisão Política do Brasil");
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Acre?", "AC"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla AC?", "Acre"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Alagoas?", "AL"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla AL?", "Alagoas"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Amapá?", "AP"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla AP?", "Amapá"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Amazonas?", "AM"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla AM?", "Amazonas"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Bahia?", "BA"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla BA?", "Bahia"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Ceará?", "CE"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla CE?", "Ceará"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Distrito Federal?", "DF"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla DF?", "Distrito Federal"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Espírito Santo?", "ES"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla ES?", "Espírito Santo"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Goiás?", "GO"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla GO?", "Goiás"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Maranhão?", "MA"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla MA?", "Maranhão"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Mato Grosso?", "MT"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla MT?", "Mato Grosso"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Mato Grosso do Sul?", "MS"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla MS?", "Mato Grosso do Sul"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Minas Gerais?", "MG"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla MG?", "Minas Gerais"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Pará?", "PA"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla PA?", "Pará"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Paraíba?", "PB"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla PB?", "Paraíba"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Paraná?", "PR"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla PR?", "Paraná"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Pernambuco?", "PE"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla PE?", "Pernambuco"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Piauí?", "PI"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla PI?", "Piauí"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Rio de Janeiro?", "RJ"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla RJ?", "Rio de Janeiro"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Rio Grande do Norte?", "RN"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla RN?", "Rio Grande do Norte"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Rio Grande do Sul?", "RS"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla RS?", "Rio Grande do Sul"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Rondônia?", "RO"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla RO?", "Rondônia"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Roraima?", "RR"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla RR?", "Roraima"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Santa Catarina?", "SC"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla SC?", "Santa Catarina"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado São Paulo?", "SP"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla SP?", "São Paulo"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Sergipe?", "SE"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla SE?", "Sergipe"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual é a sigla do estado Tocantins?", "TO"));
        deck4.AddFlashcard(new Flashcard(deck4.Id, "Qual estado brasileiro tem a sigla TO?", "Tocantins"));
        await context.Decks.AddAsync(deck4);

        await context.SaveChangesAsync();
    }
}