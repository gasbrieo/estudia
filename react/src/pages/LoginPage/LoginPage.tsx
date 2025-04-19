import { FC } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "@tanstack/react-router";

import { useAuthStore } from "@/stores/authStore";

const mockedUser = {
  id: "1",
  name: "Gabriel",
  email: "gabriel@email.com",
  avatar: "https://api.dicebear.com/7.x/initials/svg?seed=G",
};

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

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
            login(mockedUser);
            navigate({ to: "/" });
          }}
        >
          Login
        </Button>
      </Box>
    </Stack>
  );
};

export default LoginPage;
