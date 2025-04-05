import type { FC } from "react";

import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";

import IconButtonLink from "@/components/IconButtonLink";

const Header: FC = () => {
  const quizId = "1";

  return (
    <Stack
      direction="row"
      sx={{
        px: 2,
        height: 48,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <IconButtonLink
        aria-label="close"
        size="small"
        to="/quizzes/$quizId"
        params={{ quizId }}
      >
        <CloseIcon fontSize="small" />
      </IconButtonLink>
    </Stack>
  );
};

export default Header;
