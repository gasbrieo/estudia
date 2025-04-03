import type { FC } from "react";

import IconButton, { type IconButtonProps } from "@mui/material/IconButton";
import { Link, type LinkProps } from "@tanstack/react-router";

interface IconButtonLinkProps extends IconButtonProps {
  to: LinkProps["to"];
  params: LinkProps["params"];
}

const IconButtonLink: FC<IconButtonLinkProps> = ({ children, ...props }) => {
  return (
    <IconButton
      component={Link}
      {...props}
    >
      {children}
    </IconButton>
  );
};

export default IconButtonLink;
