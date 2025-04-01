import { type FC, useState } from "react";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { tabsClasses } from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";

import SideMenuMobile from "../SideMenuMobile";

const Navbar: FC = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "background.paper",
        backgroundImage: "none",
        borderBottom: "1px solid",
        borderColor: "divider",
        boxShadow: 0,
        display: { xs: "auto", md: "none" },
        top: "var(--template-frame-height, 0px)",
      }}
    >
      <Toolbar
        variant="regular"
        sx={{
          alignItems: "start",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          gap: "12px",
          justifyContent: "center",
          padding: "12px",
          width: "100%",
          [`& ${tabsClasses.list}`]: {
            gap: "8px",
            p: "8px",
            pb: 0,
          },
        }}
      >
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            flexGrow: 1,
            gap: 1,
            width: "100%",
          }}
        >
          <IconButton
            aria-label="menu"
            onClick={toggle}
            size="small"
          >
            <MenuRoundedIcon />
          </IconButton>
          <SideMenuMobile
            open={open}
            toggle={toggle}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
