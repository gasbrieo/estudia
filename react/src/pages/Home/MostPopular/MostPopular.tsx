import type { FC } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";

import DeckCard from "@/components/DeckCard";
import DeckCardSkeleton from "@/components/DeckCardSkeleton";
import { DeckData } from "@/types/deck";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";

const fetchMostPopular = async (): Promise<DeckData[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetchMostPopular");
      const ok = Math.random() > 0.5;
      if (ok) {
        resolve(
          Array.from({ length: 4 }, (_, index) => ({
            id: `${index + 1}`,
            title: `Popular ${index + 1}`,
            description: `${index + 1} flashcards`,
            avatar: "https://api.dicebear.com/7.x/initials/svg?seed=G",
          }))
        );
      } else {
        reject(new Error("API is down"));
      }
    }, 1000);
  });
};

const MostPopular: FC = () => {
  const { data, error, isLoading, refetch } = useQuery<DeckData[]>({
    queryKey: ["mostPopular"],
    queryFn: fetchMostPopular,
  });

  const renderContent = () => {
    if (isLoading) {
      return Array.from({ length: 4 }, (_, index) => (
        <Grid
          key={index}
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
        >
          <DeckCardSkeleton />
        </Grid>
      ));
    }

    if (error || !data) {
      return (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Alert
            severity="error"
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => refetch()}
              >
                Retry
              </Button>
            }
          >
            <AlertTitle>Error</AlertTitle>
            An error occurred while fetching data.
          </Alert>
        </Grid>
      );
    }

    return data.map((card) => (
      <Grid
        key={card.id}
        size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
      >
        <DeckCard
          id={card.id}
          title={card.title}
          subheader={card.description}
          avatar={card.avatar}
        />
      </Grid>
    ));
  };

  return (
    <>
      <Typography
        component="h2"
        variant="h6"
        sx={{ mb: 2 }}
      >
        Most Popular
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: 2 }}
      >
        {renderContent()}
      </Grid>
    </>
  );
};

export default MostPopular;
