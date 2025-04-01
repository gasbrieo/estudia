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
import UserMenu from "../UserMenu";

interface SideMenuMobileProps {
  open: boolean;
  toggle: () => void;
}

const SideMenuMobile: FC<SideMenuMobileProps> = ({ open, toggle }) => {
  const user = useAuthStore((state) => state.user);

  return (
    <Drawer
      open={open}
      onClose={toggle}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
          backgroundImage: "none",
        },
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Stack
        sx={{
          height: "100%",
          maxWidth: "70dvw",
        }}
      >
        <Stack
          direction="row"
          sx={{
            gap: 1,
            p: 1,
            pb: 0,
          }}
        >
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              flexGrow: 1,
              gap: 1,
              p: 1,
            }}
          >
            <Avatar
              alt={user!.name}
              sizes="small"
              src={user!.avatar}
              sx={{
                height: 36,
                width: 36,
              }}
            />
            <Box
              sx={{
                mr: "auto",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  lineHeight: "16px",
                }}
              >
                {user!.name}
              </Typography>
            </Box>
            <UserMenu />
          </Stack>
        </Stack>
        <Divider />
        <Stack
          sx={{
            flexGrow: 1,
          }}
        >
          <MenuContent />
          <Divider />
        </Stack>
        <CardAlert />
      </Stack>
    </Drawer>
  );
};

export default SideMenuMobile;
