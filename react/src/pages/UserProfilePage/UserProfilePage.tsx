import { FC } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useLoaderData } from "@tanstack/react-router";

const UserProfilePage: FC = () => {
  const { userProfileData } = useLoaderData({ from: "/_protected/user/$username/" });

  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: "center",
        mx: 3,
        mt: 3,
        pb: 5,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1280px" } }}>
        <Stack spacing={2}>{userProfileData.name}</Stack>
      </Box>
    </Stack>
  );
};

export default UserProfilePage;
