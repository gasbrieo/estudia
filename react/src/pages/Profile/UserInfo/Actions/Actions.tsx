import type { FC } from "react";

import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

const Actions: FC = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
    >
      <IconButton
        aria-label="edit"
        size="small"
      >
        <EditIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default Actions;
