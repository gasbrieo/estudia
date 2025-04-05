import { StudyModeEnum } from "./studyModeEnum";

export const studyModeLabels: Record<StudyModeEnum, { primary: string; secondary: string }> = {
  [StudyModeEnum.Review]: {
    primary: "Review",
    secondary: "Flip cards to study",
  },
  [StudyModeEnum.Challenge]: {
    primary: "Challenge",
    secondary: "Answer multiple choice solo",
  },
};
