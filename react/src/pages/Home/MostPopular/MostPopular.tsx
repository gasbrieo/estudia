import type { FC } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import DeckCard from "@/components/DeckCard";

const MostPopular: FC = () => {
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
      >
        {Array.from({ length: 4 }, (_, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <DeckCard
              title={`Deck ${index + 1}`}
              subheader="15 flashcards"
              avatar="https://api.dicebear.com/7.x/initials/svg?seed=G"
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MostPopular;
