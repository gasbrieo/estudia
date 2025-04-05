import { createFileRoute } from "@tanstack/react-router";

import QuizDetails from "@/pages/QuizDetails";

export const Route = createFileRoute("/quizzes/$quizId/")({
  component: QuizDetails,
});
