import { createFileRoute } from "@tanstack/react-router";

import DeckView from "@/pages/Decks/DeckView";

export const Route = createFileRoute("/decks/$deckId/view")({
  component: DeckView,
});
