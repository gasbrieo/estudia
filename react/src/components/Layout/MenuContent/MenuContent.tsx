import type { FC } from "react";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TopicRoundedIcon from "@mui/icons-material/TopicRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";

import ListItemLink from "@/components/ListItemLink";

const MenuContent: FC = () => {
  return (
    <Stack sx={{ flexGrow: 1, justifyContent: "space-between", p: 1 }}>
      <List dense>
        <ListItem
          disablePadding
          sx={{ display: "block" }}
        >
          <ListItemLink to="/">
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemLink>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "block" }}
        >
          <ListItemLink to="/">
            <ListItemIcon>
              <TopicRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Library" />
          </ListItemLink>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "block" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <SearchRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  );
};

export default MenuContent;
