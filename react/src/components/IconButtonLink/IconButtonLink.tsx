import { forwardRef } from "react";

import IconButton, { type IconButtonProps } from "@mui/material/IconButton";
import { createLink } from "@tanstack/react-router";

const MUIIconButtonAnchor = forwardRef<
  HTMLAnchorElement,
  IconButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
  return (
    <IconButton
      {...props}
      ref={ref}
      component="a"
    />
  );
});

MUIIconButtonAnchor.displayName = "MUIIconButtonAnchor";

const IconButtonLink = createLink(MUIIconButtonAnchor);

export default IconButtonLink;
