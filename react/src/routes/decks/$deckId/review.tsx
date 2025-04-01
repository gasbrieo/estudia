import { createFileRoute } from "@tanstack/react-router";

import DeckReview from "@/pages/Decks/DeckReview";

export const Route = createFileRoute("/decks/$deckId/review")({
  component: DeckReview,
});
