import { type FC } from "react";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

import OptionsMenu from "./OptionsMenu";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import DeckCard from "@/components/DeckCard";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

const Profile: FC = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          gap: 1,
          ml: 1.5,
        }}
      >
        <Avatar
          sizes="small"
          alt="Riley Carter"
          src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ mr: "auto" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, lineHeight: "16px" }}
          >
            Riley Carter
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary" }}
          >
            riley@email.com
          </Typography>
        </Box>
        <OptionsMenu />
      </Stack>

      <Box sx={{ mt: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={0}
            aria-label="basic tabs example"
          >
            <Tab
              label="Lista de Cartões"
              id="simple-tab-1"
              aria-controls="simple-tabpanel-1"
            />
          </Tabs>
        </Box>
        <Box
          role="tabpanel"
          id="simple-tabpanel-1"
          aria-labelledby="simple-tab-1"
          sx={{
            ml: 1.5,
          }}
        >
          <Stack
            sx={{
              gap: 1,
            }}
          >
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
            </Box>
          </Stack>
          <Box>
            <Grid
              container
              spacing={2}
              columns={12}
              sx={{ mb: 2 }}
            >
              {Array.from({ length: 4 }, (_, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <DeckCard
                    title={`Deck ${index + 1}`}
                    subheader="15 flashcards"
                    avatar="https://api.dicebear.com/7.x/initials/svg?seed=G"
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
