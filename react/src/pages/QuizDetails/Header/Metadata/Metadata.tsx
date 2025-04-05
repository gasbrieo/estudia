import type { FC } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import AvatarLink from "@/components/Links/AvatarLink";
import TypographyLink from "@/components/Links/TypographyLink";

const Metadata: FC = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ alignItems: "center" }}
    >
      <AvatarLink
        src="https://api.dicebear.com/7.x/initials/svg?seed=G"
        to="/profile/$username"
        params={{ username: "gaberabreu" }}
        sx={{ width: 32, height: 32 }}
      />
      <Stack spacing={0}>
        <TypographyLink
          variant="body2"
          to="/profile/$username"
          params={{ username: "gaberabreu" }}
          sx={{
            fontWeight: 600,
            textDecoration: "none",
            color: "inherit",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          @gaberabreu
        </TypographyLink>
        <Typography
          variant="caption"
          color="text.secondary"
        >
          Criado há 6 dias
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Metadata;
