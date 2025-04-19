import { FC } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "@tanstack/react-router";

import { useAuthStore } from "@/stores/authStore";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

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
        <Button
          variant="outlined"
          onClick={() => {
            logout();
            navigate({ to: "/login" });
          }}
        >
          Logout
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            navigate({ to: "/user/$username", params: { username: "gabrielabreu" } });
          }}
        >
          Profile
        </Button>
      </Box>
    </Stack>
  );
};

export default HomePage;
