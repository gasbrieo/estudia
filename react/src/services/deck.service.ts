interface Flashcard {
  id: string;
  statement: string;
  answer: string;
}

interface Deck {
  id: string;
  name: string;
  flashcards: Flashcard[];
}

const decks: Deck[] = [
  {
    id: "1",
    name: "Continente, Oceanos e Localização Global",
    flashcards: [
      {
        id: "1",
        statement: "Em qual continente o Brasil está localizado?",
        answer: "América do Sul",
      },
      { id: "2", statement: "Por qual oceano o Brasil é banhado?", answer: "Oceano Atlântico" },
      {
        id: "3",
        statement: "Quais são os três subcontinentes que formam o continente americano?",
        answer: "América do Sul, América Central e América do Norte",
      },
      { id: "4", statement: "Qual continente está ao sul da África?", answer: "Antártida" },
      { id: "5", statement: "Qual continente está ao norte da África?", answer: "Europa" },
      {
        id: "6",
        statement: "Quais continentes estão a leste da América?",
        answer: "África, Europa, Oceania e Ásia",
      },
      {
        id: "7",
        statement: "Quais são os oceanos que aparecem no mapa?",
        answer: "Atlântico, Pacífico e Índico",
      },
      {
        id: "8",
        statement: "Quais são os nomes das linhas imaginárias que cortam o Brasil?",
        answer: "Trópico de Capricórnio e Linha do Equador",
      },
    ],
  },
  {
    id: "2",
    name: "Fronteiras e Países da América do Sul",
    flashcards: [
      {
        id: "1",
        statement: "Cite cinco países que compõem a América do Sul.",
        answer: "Brasil, Bolívia, Argentina, Uruguai, Paraguai",
      },
      {
        id: "2",
        statement: "Quais países fazem fronteira ao norte com o Brasil?",
        answer: "Guiana Francesa, Guiana, Venezuela, Colômbia, Suriname",
      },
      {
        id: "3",
        statement: "Quais países fazem fronteira ao sul com o Brasil?",
        answer: "Argentina e Uruguai",
      },
      {
        id: "4",
        statement: "Quais países fazem fronteira a oeste com o Brasil?",
        answer: "Bolívia e Peru",
      },
      {
        id: "5",
        statement: "Quais países não fazem fronteira com o Brasil?",
        answer: "Equador e Chile",
      },
    ],
  },
  {
    id: "3",
    name: "Fundamentos da Geografia",
    flashcards: [
      {
        id: "1",
        statement: "O que é Geografia?",
        answer:
          "É a ciência que estuda a Terra, o universo e como as pessoas transformam os lugares em que vivem.",
      },
      {
        id: "2",
        statement: "Qual a importância da Geografia?",
        answer: "Nos ajuda a compreender as ações humanas e transformar a realidade.",
      },
      {
        id: "3",
        statement: "O que são registros do espaço?",
        answer: "Representações de lugares e paisagens ao longo do tempo.",
      },
      {
        id: "4",
        statement: "Como eram feitos os primeiros registros do espaço?",
        answer: "Com materiais como madeira, argila, tecidos e pele de animais.",
      },
      {
        id: "5",
        statement: "O que são mapas?",
        answer: "Instrumentos que representam uma área do espaço para localização e estudo.",
      },
    ],
  },
  {
    id: "4",
    name: "Divisão Política do Brasil",
    flashcards: [
      { id: "1", statement: "Qual é a sigla do estado Acre?", answer: "AC" },
      { id: "2", statement: "Qual estado brasileiro tem a sigla AC?", answer: "Acre" },
      { id: "3", statement: "Qual é a sigla do estado Alagoas?", answer: "AL" },
      { id: "4", statement: "Qual estado brasileiro tem a sigla AL?", answer: "Alagoas" },
      { id: "5", statement: "Qual é a sigla do estado Amapá?", answer: "AP" },
      { id: "6", statement: "Qual estado brasileiro tem a sigla AP?", answer: "Amapá" },
      { id: "7", statement: "Qual é a sigla do estado Amazonas?", answer: "AM" },
      { id: "8", statement: "Qual estado brasileiro tem a sigla AM?", answer: "Amazonas" },
      { id: "9", statement: "Qual é a sigla do estado Bahia?", answer: "BA" },
      { id: "10", statement: "Qual estado brasileiro tem a sigla BA?", answer: "Bahia" },
      { id: "11", statement: "Qual é a sigla do estado Ceará?", answer: "CE" },
      { id: "12", statement: "Qual estado brasileiro tem a sigla CE?", answer: "Ceará" },
      { id: "13", statement: "Qual é a sigla do estado Distrito Federal?", answer: "DF" },
      { id: "14", statement: "Qual estado brasileiro tem a sigla DF?", answer: "Distrito Federal" },
      { id: "15", statement: "Qual é a sigla do estado Espírito Santo?", answer: "ES" },
      { id: "16", statement: "Qual estado brasileiro tem a sigla ES?", answer: "Espírito Santo" },
      { id: "17", statement: "Qual é a sigla do estado Goiás?", answer: "GO" },
      { id: "18", statement: "Qual estado brasileiro tem a sigla GO?", answer: "Goiás" },
      { id: "19", statement: "Qual é a sigla do estado Maranhão?", answer: "MA" },
      { id: "20", statement: "Qual estado brasileiro tem a sigla MA?", answer: "Maranhão" },
      { id: "21", statement: "Qual é a sigla do estado Mato Grosso?", answer: "MT" },
      { id: "22", statement: "Qual estado brasileiro tem a sigla MT?", answer: "Mato Grosso" },
      { id: "23", statement: "Qual é a sigla do estado Mato Grosso do Sul?", answer: "MS" },
      {
        id: "24",
        statement: "Qual estado brasileiro tem a sigla MS?",
        answer: "Mato Grosso do Sul",
      },
      { id: "25", statement: "Qual é a sigla do estado Minas Gerais?", answer: "MG" },
      { id: "26", statement: "Qual estado brasileiro tem a sigla MG?", answer: "Minas Gerais" },
      { id: "27", statement: "Qual é a sigla do estado Pará?", answer: "PA" },
      { id: "28", statement: "Qual estado brasileiro tem a sigla PA?", answer: "Pará" },
      { id: "29", statement: "Qual é a sigla do estado Paraíba?", answer: "PB" },
      { id: "30", statement: "Qual estado brasileiro tem a sigla PB?", answer: "Paraíba" },
      { id: "31", statement: "Qual é a sigla do estado Paraná?", answer: "PR" },
      { id: "32", statement: "Qual estado brasileiro tem a sigla PR?", answer: "Paraná" },
      { id: "33", statement: "Qual é a sigla do estado Pernambuco?", answer: "PE" },
      { id: "34", statement: "Qual estado brasileiro tem a sigla PE?", answer: "Pernambuco" },
      { id: "35", statement: "Qual é a sigla do estado Piauí?", answer: "PI" },
      { id: "36", statement: "Qual estado brasileiro tem a sigla PI?", answer: "Piauí" },
      { id: "37", statement: "Qual é a sigla do estado Rio de Janeiro?", answer: "RJ" },
      { id: "38", statement: "Qual estado brasileiro tem a sigla RJ?", answer: "Rio de Janeiro" },
      { id: "39", statement: "Qual é a sigla do estado Rio Grande do Norte?", answer: "RN" },
      {
        id: "40",
        statement: "Qual estado brasileiro tem a sigla RN?",
        answer: "Rio Grande do Norte",
      },
      { id: "41", statement: "Qual é a sigla do estado Rio Grande do Sul?", answer: "RS" },
      {
        id: "42",
        statement: "Qual estado brasileiro tem a sigla RS?",
        answer: "Rio Grande do Sul",
      },
      { id: "43", statement: "Qual é a sigla do estado Rondônia?", answer: "RO" },
      { id: "44", statement: "Qual estado brasileiro tem a sigla RO?", answer: "Rondônia" },
      { id: "45", statement: "Qual é a sigla do estado Roraima?", answer: "RR" },
      { id: "46", statement: "Qual estado brasileiro tem a sigla RR?", answer: "Roraima" },
      { id: "47", statement: "Qual é a sigla do estado Santa Catarina?", answer: "SC" },
      { id: "48", statement: "Qual estado brasileiro tem a sigla SC?", answer: "Santa Catarina" },
      { id: "49", statement: "Qual é a sigla do estado São Paulo?", answer: "SP" },
      { id: "50", statement: "Qual estado brasileiro tem a sigla SP?", answer: "São Paulo" },
      { id: "51", statement: "Qual é a sigla do estado Sergipe?", answer: "SE" },
      { id: "52", statement: "Qual estado brasileiro tem a sigla SE?", answer: "Sergipe" },
      { id: "53", statement: "Qual é a sigla do estado Tocantins?", answer: "TO" },
      { id: "54", statement: "Qual estado brasileiro tem a sigla TO?", answer: "Tocantins" },
    ],
  },
];

export const fetchDecks = async (): Promise<Deck[]> => {
  return new Promise<Deck[]>((resolve) => {
    setTimeout(() => {
      resolve(decks);
    }, 1000);
  });
};

export const fetchFlashcards = async (id: string): Promise<Flashcard[] | undefined> => {
  return new Promise<Flashcard[] | undefined>((resolve) => {
    setTimeout(() => {
      resolve(decks.find((d) => d.id === id)?.flashcards ?? []);
    }, 1000);
  });
};
