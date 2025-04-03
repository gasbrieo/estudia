import { type FC } from "react";

import Stack from "@mui/material/Stack";

const Header: FC = () => {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: { xs: "flex-start", md: "center" },
        display: { xs: "none", md: "flex" },
        justifyContent: "space-between",
        maxWidth: { sm: "100%", md: "1700px" },
        pt: 1.5,
        width: "100%",
      }}
      spacing={2}
    ></Stack>
  );
};

export default Header;
