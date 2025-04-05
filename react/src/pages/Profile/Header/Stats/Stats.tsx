import type { FC } from "react";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Stats: FC = () => {
  const stats = [{ label: "QUIZZES", value: 10 }];

  return (
    <Grid
      container
      spacing={2}
    >
      {stats.map((item) => (
        <Grid key={item.label}>
          <Stack spacing={0}>
            <Typography
              variant="h6"
              align="center"
            >
              {item.value}
            </Typography>
            <Typography
              variant="caption"
              align="center"
            >
              {item.label}
            </Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default Stats;
