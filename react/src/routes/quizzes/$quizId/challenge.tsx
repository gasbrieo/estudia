import { createFileRoute } from "@tanstack/react-router";

import ChallengeMode from "@/pages/ChallengeMode";

export const Route = createFileRoute("/quizzes/$quizId/challenge")({
  component: ChallengeMode,
});
