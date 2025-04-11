import { FC } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "@tanstack/react-router";

const ErrorPage: FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        spacing={2}
        sx={{
          textAlign: "center",
          maxWidth: "sm",
          width: "100%",
        }}
      >
        <Typography
          color="primary.main"
          variant="h4"
          sx={{ fontWeight: "bold" }}
        >
          500!
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: 500 }}
        >
          Something went wrong.
        </Typography>
        <Typography
          color="text.secondary"
          variant="body1"
        >
          We're having trouble loading this page right now.
        </Typography>
        <Link
          component={RouterLink}
          color="primary.main"
          to="."
          underline="hover"
          sx={{ fontWeight: 500 }}
        >
          Try again
        </Link>
      </Stack>
    </Box>
  );
};

export default ErrorPage;
