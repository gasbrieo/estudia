import { createFileRoute } from "@tanstack/react-router";

import DeckEdit from "@/pages/Decks/DeckEdit";

export const Route = createFileRoute("/decks/$deckId/edit")({
  component: DeckEdit,
});
