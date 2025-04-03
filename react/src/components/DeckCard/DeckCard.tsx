import { type FC } from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";

import IconButtonLink from "../IconButtonLink";

interface DeckCardProps {
  id: string;
  title: string;
  subheader: string;
  avatar: string;
}

const DeckCard: FC<DeckCardProps> = ({ id, title, subheader, avatar }) => {
  return (
    <Card
      variant="outlined"
      sx={{ height: "100%", flexGrow: 1 }}
    >
      <CardHeader
        avatar={
          <Avatar
            alt={subheader}
            sizes="small"
            src={avatar}
            sx={{
              height: 36,
              width: 36,
            }}
          />
        }
        subheader={subheader}
        title={title}
      />
      <CardActions disableSpacing>
        <IconButtonLink
          aria-label="view"
          to="/decks/$deckId/view"
          params={{ deckId: id }}
        >
          <ArrowForwardIcon />
        </IconButtonLink>
      </CardActions>
    </Card>
  );
};

export default DeckCard;
