import type { FC } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

import IconButtonLink from "@/components/IconButtonLink";
import StudyModeSelect, { StudyModeEnum } from "@/components/StudyModeSelect";

const Header: FC = () => {
  const quizId = "1";
  const quizTitle = "Geography - Capitals";

  return (
    <Grid
      container
      alignItems="center"
      sx={{ px: 2, height: 48 }}
    >
      <Grid size={4}>
        <StudyModeSelect
          currentMode={StudyModeEnum.Challenge}
          quizId={quizId}
        />
      </Grid>

      <Grid
        size={4}
        sx={{ textAlign: "center" }}
      >
        <Typography
          variant="subtitle1"
          fontWeight={500}
          noWrap
        >
          {quizTitle}
        </Typography>
      </Grid>

      <Grid
        size={4}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <IconButtonLink
          aria-label="close"
          size="small"
          to="/quizzes/$quizId"
          params={{ quizId }}
        >
          <CloseIcon fontSize="small" />
        </IconButtonLink>
      </Grid>
    </Grid>
  );
};

export default Header;
