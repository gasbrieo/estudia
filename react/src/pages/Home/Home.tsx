import type { FC } from "react";

import Box from "@mui/material/Box";

import MostPopular from "./MostPopular";
import RecentlyViewed from "./RecentlyViewed";

const Home: FC = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <RecentlyViewed />
      <MostPopular />
    </Box>
  );
};

export default Home;
