import type { FC } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Stage from "./Stage";

const QuizChallenge: FC = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: "center",
        mx: 3,
        mt: 3,
        pb: 5,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1280px" } }}>
        <Stage />
      </Box>
    </Stack>
  );
};

export default QuizChallenge;
