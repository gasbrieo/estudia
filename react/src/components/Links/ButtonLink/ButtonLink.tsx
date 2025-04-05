import { forwardRef } from "react";

import Button, { type ButtonProps } from "@mui/material/Button";
import { createLink } from "@tanstack/react-router";

const MUIButtonAnchor = forwardRef<
  HTMLAnchorElement,
  ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
  return (
    <Button
      {...props}
      ref={ref}
      component="a"
    />
  );
});

MUIButtonAnchor.displayName = "MUIButtonAnchor";

const ButtonLink = createLink(MUIButtonAnchor);

export default ButtonLink;
