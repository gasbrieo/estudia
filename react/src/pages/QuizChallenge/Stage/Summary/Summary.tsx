import type { FC } from "react";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ButtonLink from "@/components/Links/ButtonLink";

interface ChallengeSummaryProps {
  score: number;
  total: number;
  quizId: string;
  onRetry: () => void;
}

const Summary: FC<ChallengeSummaryProps> = ({ score, total, quizId, onRetry }) => {
  return (
    <Stack
      spacing={4}
      sx={{ height: "100vh", width: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <EmojiEventsIcon sx={{ fontSize: 64, color: "primary.main" }} />
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 600 }}
      >
        Quiz Completed!
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
      >
        You got {score} out of {total} correct.
      </Typography>
      <Stack
        direction="row"
        spacing={2}
      >
        <Button
          variant="outlined"
          onClick={onRetry}
        >
          Try Again
        </Button>

        <ButtonLink
          variant="contained"
          to="/quizzes/$quizId"
          params={{ quizId }}
        >
          Back to Quiz
        </ButtonLink>
      </Stack>
    </Stack>
  );
};

export default Summary;
