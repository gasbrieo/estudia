import type { FC } from "react";

import MenuItem, { type MenuItemProps } from "@mui/material/MenuItem";
import { Link, type LinkProps } from "@tanstack/react-router";

interface MenuItemLinkProps extends MenuItemProps {
  to: LinkProps["to"];
}

const MenuItemLink: FC<MenuItemLinkProps> = ({ children, ...props }) => {
  return (
    <MenuItem
      component={Link}
      {...props}
    >
      {children}
    </MenuItem>
  );
};

export default MenuItemLink;
