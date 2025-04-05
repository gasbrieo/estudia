import type { FC } from "react";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import Actions from "./Actions";
import Stats from "./Stats";
import Info from "./Info";

const UserInfo: FC = () => {
  return (
    <Paper
      variant="outlined"
      sx={{ p: 2 }}
    >
      <Stack
        direction="row"
        sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
      >
        <Info />
        <Stack
          spacing={1}
          sx={{ alignItems: "flex-end" }}
        >
          <Actions />
          <Stats />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default UserInfo;
