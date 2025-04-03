import type { FC } from "react";

import Alert from "@mui/material/Alert";
import { useQuery } from "@tanstack/react-query";

const fetchHealth = async (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetchHealth");
      const ok = Math.random() > 0.5;
      if (ok) {
        resolve(true);
      } else {
        reject(new Error("API is down"));
      }
    }, 1000);
  });
};

const CardAlert: FC = () => {
  const { error, isLoading } = useQuery<boolean>({
    queryKey: ["health"],
    queryFn: fetchHealth,
  });

  if (isLoading) {
    return (
      <Alert
        severity="info"
        sx={{ flexShrink: 0, m: 1.5 }}
      >
        Checking service...
      </Alert>
    );
  }

  if (error) {
    return (
      <Alert
        severity="error"
        sx={{ flexShrink: 0, m: 1.5 }}
      >
        Service is down
      </Alert>
    );
  }

  return (
    <Alert
      severity="success"
      sx={{ flexShrink: 0, m: 1.5 }}
    >
      Service is healthy
    </Alert>
  );
};

export default CardAlert;
