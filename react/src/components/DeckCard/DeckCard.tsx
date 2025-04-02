import { type FC } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";

interface DeckCardProps {
  title: string;
  subheader: string;
  avatar: string;
}

const DeckCard: FC<DeckCardProps> = ({ title, subheader, avatar }) => {
  return (
    <Card
      variant="outlined"
      sx={{ height: "100%", flexGrow: 1 }}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default DeckCard;
