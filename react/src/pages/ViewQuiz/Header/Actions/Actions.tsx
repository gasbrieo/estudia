import type { FC } from "react";

import QuizIcon from "@mui/icons-material/Quiz";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
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
        startIcon={<QuizIcon />}
        to="/quizzes/$quizId/flashcards"
        params={{
          quizId: "quizId",
        }}
      >
        Answer
      </ButtonLink>
      <ButtonLink
        variant="outlined"
        startIcon={<ViewInArIcon />}
        to="/quizzes/$quizId/flashcards"
        params={{
          quizId: "quizId",
        }}
      >
        Flashcards
      </ButtonLink>
    </Stack>
  );
};

export default QuizActions;
