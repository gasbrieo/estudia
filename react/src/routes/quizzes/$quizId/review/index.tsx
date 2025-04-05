import { createFileRoute } from "@tanstack/react-router";

import QuizReview from "@/pages/QuizReview";

export const Route = createFileRoute("/quizzes/$quizId/review/")({
  component: QuizReview,
});
