import { type FC } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Skeleton from "@mui/material/Skeleton";

const DeckCardSkeleton: FC = () => {
  return (
    <Card
      variant="outlined"
      sx={{ height: "100%", flexGrow: 1 }}
    >
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={36}
            height={36}
          />
        }
        subheader={
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="40%"
          />
        }
      />
    </Card>
  );
};

export default DeckCardSkeleton;
