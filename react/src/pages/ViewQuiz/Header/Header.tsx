import type { FC } from "react";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import Actions from "./Actions";
import Info from "./Info";
import Metadata from "./Metadata";

const Header: FC = () => {
  return (
    <Paper
      variant="outlined"
      sx={{ p: 2 }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Info />
        <Stack
          spacing={2}
          sx={{
            alignItems: { xs: "flex-start", md: "flex-end" },
            justifyContent: "space-between",
          }}
        >
          <Actions />
          <Metadata />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Header;
