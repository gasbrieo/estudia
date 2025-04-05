import { createFileRoute } from "@tanstack/react-router";

import QuizChallenge from "@/pages/QuizChallenge";

export const Route = createFileRoute("/quizzes/$quizId/challenge/")({
  component: QuizChallenge,
});
