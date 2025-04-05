import { forwardRef } from "react";

import Typography, { type TypographyProps } from "@mui/material/Typography";
import { createLink } from "@tanstack/react-router";

const MUITypographyAnchor = forwardRef<
  HTMLAnchorElement,
  TypographyProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
  return (
    <Typography
      {...props}
      ref={ref}
      component="a"
    />
  );
});

MUITypographyAnchor.displayName = "MUITypographyAnchor";

const TypographyLink = createLink(MUITypographyAnchor);

export default TypographyLink;
