import { type FC, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const Filters: FC = () => {
  const [dunno, setDunno] = useState(1);

  return (
    <Stack
      direction="row"
      sx={{ gap: 1 }}
    >
      <TextField
        placeholder="Procurar..."
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
      />
      <Select
        value={dunno}
        size="small"
        onChange={(e) => setDunno(e.target.value as number)}
      >
        <MenuItem value={1}>Criados por mim</MenuItem>
        <MenuItem value={2}>Compartilhados comigo</MenuItem>
      </Select>
    </Stack>
  );
};

export default Filters;
