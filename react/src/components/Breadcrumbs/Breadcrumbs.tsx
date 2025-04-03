import { type FC } from "react";

import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import MuiBreadcrumbs, { breadcrumbsClasses } from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

interface BreadcrumbsProps {
  items: string[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <MuiBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
      sx={{
        margin: "1 0",
        [`& .${breadcrumbsClasses.ol}`]: {
          alignItems: "center",
        },
        [`& .${breadcrumbsClasses.separator}`]: {
          color: (theme) => theme.palette.action.disabled,
          margin: 1,
        },
      }}
    >
      {items.map((item, index) => (
        <Typography
          key={index}
          variant="body1"
          sx={index === items.length - 1 ? { color: "text.primary", fontWeight: 600 } : {}}
        >
          {item}
        </Typography>
      ))}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
