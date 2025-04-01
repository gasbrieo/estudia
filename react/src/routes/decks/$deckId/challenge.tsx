import { createFileRoute } from "@tanstack/react-router";

import DeckChallenge from "@/pages/Decks/DeckChallenge";

export const Route = createFileRoute("/decks/$deckId/challenge")({
  component: DeckChallenge,
});
