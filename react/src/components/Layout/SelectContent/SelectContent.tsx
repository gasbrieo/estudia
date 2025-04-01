import { type FC, useState } from "react";

import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import MuiAvatar from "@mui/material/Avatar";
import MuiListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent, selectClasses } from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const Avatar = styled(MuiAvatar)(({ theme }) => ({
  width: 28,
  height: 28,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.secondary,
  border: `1px solid ${theme.palette.divider}`,
}));

const ListItemAvatar = styled(MuiListItemAvatar)({
  minWidth: 0,
  marginRight: 12,
});

const SelectContent: FC = () => {
  const [environment, setEnvironment] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setEnvironment(event.target.value as string);
  };

  return (
    <Select
      displayEmpty
      fullWidth
      id="environment-simple-select"
      inputProps={{ "aria-label": "Select environment" }}
      labelId="environment-select"
      onChange={handleChange}
      sx={{
        [`& .${selectClasses.select}`]: {
          alignItems: "center",
          display: "flex",
          gap: "2px",
          pl: 1,
        },
        "&.MuiList-root": {
          p: "8px",
        },
        maxHeight: 56,
        width: 215,
      }}
      value={environment}
    >
      <ListSubheader sx={{ pt: 0 }}>Production</ListSubheader>
      <MenuItem value="">
        <ListItemAvatar>
          <Avatar alt="Production">
            <DevicesRoundedIcon sx={{ fontSize: "1rem" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Estuda Aí"
          secondary="Web app"
        />
      </MenuItem>
      <ListSubheader>Development</ListSubheader>
      <MenuItem value={30}>
        <ListItemAvatar>
          <Avatar alt="Development">
            <ConstructionRoundedIcon sx={{ fontSize: "1rem" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Estuda Aí"
          secondary="Web app"
        />
      </MenuItem>
    </Select>
  );
};

export default SelectContent;
