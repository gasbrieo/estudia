import FlashcardMode from "@/pages/FlashcardMode/FlashcardMode";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quizzes/$quizId/flashcards")({
  component: FlashcardMode,
});
