import type { FC } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NotImplemented: FC = () => {
  return (
    <Box p={4}>
      <Typography variant="h6">🚧 Feature under construction</Typography>
      <Typography
        variant="body2"
        color="text.secondary"
      >
        This page or functionality hasn’t been implemented yet.
      </Typography>
    </Box>
  );
};

export default NotImplemented;
