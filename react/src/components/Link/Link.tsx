import type { FC } from "react";

import MuiLink, { type LinkProps as MuiLinkProps } from "@mui/material/Link";
import { Link as TanstackLink, type LinkProps as TanstackLinkProps } from "@tanstack/react-router";

interface LinkProps extends MuiLinkProps {
  to: TanstackLinkProps["to"];
  params: TanstackLinkProps["params"];
}

const Link: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <MuiLink
      component={TanstackLink}
      {...props}
    >
      {children}
    </MuiLink>
  );
};

export default Link;
