import type { FC } from "react";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Info: FC = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ alignItems: "center" }}
    >
      <Avatar
        src="https://api.dicebear.com/7.x/initials/svg?seed=G"
        sx={{ width: 100, height: 100 }}
      />

      <Stack spacing={3}>
        <Stack spacing={0}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700 }}
          >
            Gabriel Abreu
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            @gaberabreu
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={1}
        >
          <Chip
            icon={<MenuBookIcon fontSize="small" />}
            label="Professor"
            size="small"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Info;
