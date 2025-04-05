import type { FC } from "react";

import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Actions: FC = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
    >
      <Button
        variant="outlined"
        startIcon={<EditIcon />}
        onClick={() => {}}
      >
        Editar
      </Button>
    </Stack>
  );
};

export default Actions;
