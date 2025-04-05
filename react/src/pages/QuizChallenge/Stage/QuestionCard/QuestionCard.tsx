import type { FC } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface QuestionCardProps {
  statement: string;
}

const QuestionCard: FC<QuestionCardProps> = ({ statement }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "40%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 600 }}
        >
          {statement}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
