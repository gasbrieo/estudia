import type { FC } from "react";

import Grid from "@mui/material/Grid";

import ListItem from "./ListItem";

const List: FC = () => {
  return (
    <Grid
      container
      spacing={2}
      columns={12}
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <Grid
          key={index}
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
        >
          <ListItem
            id={String(index)}
            avatarUrl="https://api.dicebear.com/7.x/initials/svg?seed=G"
            name={`Quiz ${index}`}
            description="That quiz is about some random things"
            tags={["quiz", "random"]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
