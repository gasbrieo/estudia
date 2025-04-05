import type { FC } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const Audity: FC = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ alignItems: "center" }}
    >
      <Avatar
        src="https://api.dicebear.com/7.x/initials/svg?seed=G"
        sx={{ width: 32, height: 32 }}
      />
      <Box>
        <Typography
          variant="body2"
          sx={{ fontWeight: 600 }}
        >
          @gaberabreu
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
        >
          Criado há 6 dias
        </Typography>
      </Box>
    </Stack>
  );
};

export default Audity;
