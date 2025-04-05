import type { FC } from "react";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface OptionCardProps {
  label: string;
  isSelected: boolean;
  isCorrect: boolean;
  isDisabled: boolean;
  onClick: () => void;
}

const OptionCard: FC<OptionCardProps> = ({ label, isSelected, isCorrect, isDisabled, onClick }) => {
  const showIcon = isDisabled && (isSelected || isCorrect);

  const icon =
    isSelected && !isCorrect ? (
      <CancelOutlinedIcon
        fontSize="small"
        color="error"
      />
    ) : isCorrect ? (
      <CheckCircleOutlineIcon
        fontSize="small"
        color="success"
      />
    ) : null;

  const getOpacity = () => {
    if (!isDisabled) return 1;
    if (isSelected || isCorrect) return 1;
    return 0.5;
  };

  const getBorderColor = () => {
    if (!isDisabled) return "divider";
    if (isSelected && isCorrect) return "success.main";
    if (isSelected && !isCorrect) return "error.main";
    if (isCorrect) return "success.main";
    return "divider";
  };

  return (
    <Card
      variant="outlined"
      onClick={onClick}
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: isDisabled ? "default" : "pointer",
        pointerEvents: isDisabled ? "none" : "auto",
        borderWidth: 2,
        transition: "0.2s",
        opacity: getOpacity(),
        borderColor: getBorderColor(),
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: "center" }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 500 }}
        >
          {label}
        </Typography>
        {showIcon && icon}
      </Stack>
    </Card>
  );
};

export default OptionCard;
