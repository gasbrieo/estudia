import type { FC } from "react";

import ListItemButton, { type ListItemButtonProps } from "@mui/material/ListItemButton";
import { Link, type LinkProps } from "@tanstack/react-router";

interface ListItemLinkProps extends ListItemButtonProps {
  to: LinkProps["to"];
}

const ListItemLink: FC<ListItemLinkProps> = ({ children, to, ...props }) => {
  return (
    <ListItemButton
      component={Link}
      to={to}
      {...props}
    >
      {children}
    </ListItemButton>
  );
};

export default ListItemLink;
