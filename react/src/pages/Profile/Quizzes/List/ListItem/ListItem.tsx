import type { FC } from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Link from "@/components/Link";

interface ListItemProps {
  id: string;
  avatarUrl: string;
  name: string;
  description: string;
  tags: string[];
}

const ListItem: FC<ListItemProps> = ({ id, avatarUrl, name, description, tags }) => {
  return (
    <Card variant="outlined">
      <CardHeader
        action={
          <IconButton
            aria-label="settings"
            size="small"
          >
            <MoreVertIcon fontSize="small" />
          </IconButton>
        }
        avatar={
          <Avatar
            src={avatarUrl}
            sx={{ width: 30, height: 30 }}
          />
        }
        title={name}
        slotProps={{
          avatar: {
            sx: { mr: 1 },
          },
          title: {
            component: Link,
            variant: "subtitle2",
            underline: "hover",
            to: "/quizzes/$quizId",
            params: { quizId: id },
          },
        }}
        sx={{ pb: 0 }}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>

        <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{ height: 20 }}
            />
          ))}
        </Box>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ p: 0 }}
      />
    </Card>
  );
};

export default ListItem;
