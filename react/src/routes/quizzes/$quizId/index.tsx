import { createFileRoute } from "@tanstack/react-router";

import ViewQuiz from "@/pages/ViewQuiz";

export const Route = createFileRoute("/quizzes/$quizId/")({
  component: ViewQuiz,
});
