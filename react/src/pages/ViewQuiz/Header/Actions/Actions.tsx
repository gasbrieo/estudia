import type { FC } from "react";

import QuizIcon from "@mui/icons-material/Quiz";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const QuizActions: FC = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
    >
      <Button
        variant="outlined"
        startIcon={<QuizIcon />}
        onClick={() => {}}
      >
        Answer
      </Button>
      <Button
        variant="outlined"
        startIcon={<ViewInArIcon />}
        onClick={() => {}}
      >
        Flashcards
      </Button>
    </Stack>
  );
};

export default QuizActions;
