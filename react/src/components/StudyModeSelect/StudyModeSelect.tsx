import type { FC } from "react";

import QuizIcon from "@mui/icons-material/Quiz";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import Select, { selectClasses, type SelectChangeEvent } from "@mui/material/Select";
import { useNavigate } from "@tanstack/react-router";

import { StudyModeEnum } from "./studyModeEnum";
import { studyModeLabels } from "./studyModeLabels";
import { studyModeRoutes } from "./studyModeRoutes";

interface StudyModeSelectProps {
  currentMode: StudyModeEnum;
  quizId: string;
}

const StudyModeSelect: FC<StudyModeSelectProps> = ({ currentMode, quizId }) => {
  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    const newMode = event.target.value as StudyModeEnum;

    if (newMode === currentMode) return;

    navigate({
      to: studyModeRoutes[newMode],
      params: { quizId },
    });
  };

  return (
    <Select
      value={currentMode}
      size="small"
      sx={{
        [`& .${selectClasses.select}`]: {
          alignItems: "center",
          display: "flex",
          pl: 1,
        },
        width: 300,
      }}
      onChange={handleChange}
    >
      <ListSubheader>Study</ListSubheader>

      <MenuItem value={StudyModeEnum.Review}>
        <ListItemAvatar sx={{ minWidth: 0, mr: 1 }}>
          <Avatar>
            <VisibilityIcon fontSize="small" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={studyModeLabels[StudyModeEnum.Review].primary}
          secondary={studyModeLabels[StudyModeEnum.Review].secondary}
        />
      </MenuItem>

      <ListSubheader>Practice</ListSubheader>

      <MenuItem value={StudyModeEnum.Challenge}>
        <ListItemAvatar sx={{ minWidth: 0, mr: 1 }}>
          <Avatar>
            <QuizIcon fontSize="small" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={studyModeLabels[StudyModeEnum.Challenge].primary}
          secondary={studyModeLabels[StudyModeEnum.Challenge].secondary}
        />
      </MenuItem>
    </Select>
  );
};

export default StudyModeSelect;
