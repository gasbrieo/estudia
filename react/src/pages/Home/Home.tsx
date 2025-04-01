import type { FC } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import DeckCard from "./DeckCard";

const Home: FC = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography
        component="h2"
        variant="h6"
        sx={{ mb: 2 }}
      >
        Recently Viewed
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: 2 }}
      >
        {Array.from({ length: 2 }, (_, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <DeckCard
              title={`Deck ${index + 1}`}
              subheader="Gabriel Abreu"
              avatar="https://api.dicebear.com/7.x/initials/svg?seed=G"
            />
          </Grid>
        ))}
      </Grid>
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
        {Array.from({ length: 6 }, (_, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <DeckCard
              title={`Deck ${index + 1}`}
              subheader="Gabriel Abreu"
              avatar="https://api.dicebear.com/7.x/initials/svg?seed=G"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
