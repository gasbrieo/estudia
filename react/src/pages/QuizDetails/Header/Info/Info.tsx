import type { FC } from "react";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const tags = ["quiz", "random"];

const Info: FC = () => {
  return (
    <Stack spacing={2}>
      <Typography
        variant="h5"
        sx={{ fontWeight: 700 }}
      >
        Quiz 1
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
      >
        That quiz is about some random things
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        sx={{ flexWrap: "wrap" }}
      >
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            size="small"
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Info;
