import type { FC } from "react";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";

const fetchHealth = async (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetch health");
      const isHealthy = Math.random() > 0.5;
      if (isHealthy) {
        resolve(true);
      } else {
        reject(new Error("API is down"));
      }
    }, 1000);
  });
};

const CardAlert: FC = () => {
  const { error, isLoading, refetch } = useQuery<boolean>({
    queryKey: ["health"],
    queryFn: fetchHealth,
  });

  const renderContent = () => {
    if (isLoading) {
      return (
        <Typography
          sx={{ mb: 2 }}
          variant="body2"
        >
          Checking API status...
        </Typography>
      );
    }

    if (error) {
      return (
        <>
          <ErrorOutlineRoundedIcon
            fontSize="small"
            sx={{ color: "error.main" }}
          />
          <Typography
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Service is down
          </Typography>
          <Typography
            sx={{ color: "text.secondary", mb: 2 }}
            variant="body2"
          >
            Unable to reach API.
          </Typography>
          <Button
            fullWidth
            onClick={() => refetch()}
            size="small"
            variant="contained"
          >
            Retry
          </Button>
        </>
      );
    }

    return (
      <>
        <CheckCircleRoundedIcon
          fontSize="small"
          sx={{ color: "success.main" }}
        />
        <Typography
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          Service is healthy
        </Typography>
        <Typography
          sx={{ color: "text.secondary", mb: 2 }}
          variant="body2"
        >
          API responded successfully.
        </Typography>
      </>
    );
  };

  return (
    <Card
      sx={{ flexShrink: 0, m: 1.5 }}
      variant="outlined"
    >
      <CardContent>{renderContent()}</CardContent>
    </Card>
  );
};

export default CardAlert;
