import type { FC } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Home: FC = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography
        component="h2"
        variant="h6"
        sx={{ mb: 2 }}
      >
        Home
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
      >
        <Grid size={{ xs: 6, md: 4 }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", flexGrow: 1 }}
          >
            <CardContent>Teste</CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", flexGrow: 1 }}
          >
            <CardContent>Teste</CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", flexGrow: 1 }}
          >
            <CardContent>Teste</CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", flexGrow: 1 }}
          >
            <CardContent>Teste</CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
