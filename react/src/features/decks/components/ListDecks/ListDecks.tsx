import type { FC } from "react";

import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { useQuery } from "@tanstack/react-query";
import { fetchDecks } from "@/services/deck.service";

const ListDecks: FC = () => {
  const { data: decks = [] } = useQuery({ queryKey: ["decks"], queryFn: fetchDecks });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          maxWidth: "800px",
          textAlign: "left",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
          }}
        >
          Meus decks
        </Typography>

        <Typography
          variant="subtitle2"
          sx={(theme) => ({
            marginTop: theme.spacing(1),
            color: theme.palette.grey[600],
          })}
        >
          Listagem dos seus decks
        </Typography>

        <TextField
          placeholder="Procurar decks"
          variant="outlined"
          size="small"
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
          sx={(theme) => ({
            marginTop: theme.spacing(2),
          })}
        />

        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "space-between",
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(3),
          })}
        >
          <Select
            value={1}
            size="small"
          >
            <MenuItem value={1}>Criados por mim</MenuItem>
            <MenuItem value={2}>Compartilhados comigo</MenuItem>
          </Select>

          <IconButton>
            <AddIcon />
          </IconButton>
        </Box>

        <List>
          <Divider />
          {decks.map((deck) => (
            <ListItem
              key={deck.id}
              secondaryAction={
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                sx={{
                  borderRadius: 2,
                }}
              >
                <ListItemText primary={deck.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ListDecks;
