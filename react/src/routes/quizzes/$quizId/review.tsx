import { createFileRoute } from "@tanstack/react-router";

import ReviewMode from "@/pages/ReviewMode";

export const Route = createFileRoute("/quizzes/$quizId/review")({
  component: ReviewMode,
});
