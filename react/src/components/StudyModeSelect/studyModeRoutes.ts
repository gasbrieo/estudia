import { StudyModeEnum } from "./studyModeEnum";

export const studyModeRoutes: Record<StudyModeEnum, string> = {
  [StudyModeEnum.Review]: "/quizzes/$quizId/review",
  [StudyModeEnum.Challenge]: "/quizzes/$quizId/challenge",
};
