import type { FC } from "react";

import QuizIcon from "@mui/icons-material/Quiz";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Stack from "@mui/material/Stack";

import ButtonLink from "@/components/ButtonLink";

const QuizActions: FC = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
    >
      <ButtonLink
        variant="outlined"
        startIcon={<VisibilityIcon />}
        to="/quizzes/$quizId/review"
        params={{
          quizId: "1",
        }}
      >
        Review
      </ButtonLink>
      <ButtonLink
        variant="outlined"
        startIcon={<QuizIcon />}
        to="/quizzes/$quizId/challenge"
        params={{
          quizId: "1",
        }}
      >
        Challenge
      </ButtonLink>
    </Stack>
  );
};

export default QuizActions;
