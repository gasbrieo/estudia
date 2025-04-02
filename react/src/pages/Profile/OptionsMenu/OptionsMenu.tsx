import { type FC, type MouseEvent, useState } from "react";

import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { dividerClasses } from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { listClasses } from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MuiMenuItem from "@mui/material/MenuItem";
import { paperClasses } from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const MenuItem = styled(MuiMenuItem)({
  margin: "2px 0",
});

const OptionsMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="Open menu"
        onClick={handleClick}
        sx={{ borderColor: "transparent" }}
      >
        <MoreVertRoundedIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={{
          [`& .${dividerClasses.root}`]: {
            margin: "4px -4px",
          },
          [`& .${listClasses.root}`]: {
            minWidth: "180px",
            padding: "4px",
          },
          [`& .${paperClasses.root}`]: {
            padding: 0,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FlagRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Denunciar</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default OptionsMenu;
