import type { FC } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Outlet } from "@tanstack/react-router";

import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const Layout: FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideMenu />
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: "center",
            mx: 3,
            mt: { xs: 8, md: 0 },
            pb: 5,
          }}
        >
          <Outlet />
        </Stack>
      </Box>
    </Box>
  );
};

export default Layout;
