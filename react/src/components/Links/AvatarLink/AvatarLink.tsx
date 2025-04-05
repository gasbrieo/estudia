import { forwardRef } from "react";

import Avatar, { type AvatarProps } from "@mui/material/Avatar";
import { createLink } from "@tanstack/react-router";

const MUIAvatarAnchor = forwardRef<
  HTMLAnchorElement,
  AvatarProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
  return (
    <Avatar
      {...props}
      ref={ref}
      component="a"
    />
  );
});

MUIAvatarAnchor.displayName = "MUIAvatarAnchor";

const AvatarLink = createLink(MUIAvatarAnchor);

export default AvatarLink;
