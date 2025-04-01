import type { FC } from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer, { drawerClasses } from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useAuthStore } from "@/stores/authStore";

import CardAlert from "../CardAlert";
import MenuContent from "../MenuContent";
import SelectContent from "../SelectContent";
import OptionsMenu from "../UserMenu";

const drawerWidth = 240;

const SideMenu: FC = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <Drawer
      variant="permanent"
      sx={{
        boxSizing: "border-box",
        display: { xs: "none", md: "block" },
        flexShrink: 0,
        mt: 10,
        width: drawerWidth,
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          mt: "calc(var(--template-frame-height, 0px) + 4px)",
          p: 1.5,
        }}
      >
        <SelectContent />
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflow: "auto",
        }}
      >
        <MenuContent />
        <CardAlert />
      </Box>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
          gap: 1,
          p: 2,
        }}
      >
        <Avatar
          alt={user!.name}
          sizes="small"
          src={user!.avatar}
          sx={{ height: 36, width: 36 }}
        />
        <Box sx={{ mr: "auto" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, lineHeight: "16px" }}
          >
            {user!.name}
          </Typography>
        </Box>
        <OptionsMenu />
      </Stack>
    </Drawer>
  );
};

export default SideMenu;
