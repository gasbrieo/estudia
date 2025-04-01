import { createFileRoute } from "@tanstack/react-router";

import DeckCreate from "@/pages/Decks/DeckCreate";

export const Route = createFileRoute("/decks/create")({
  component: DeckCreate,
});
