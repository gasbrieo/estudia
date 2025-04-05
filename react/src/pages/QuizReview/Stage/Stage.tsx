import { type ChangeEvent, type FC, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const flashcards = Array.from({ length: 15 }, (_, i) => ({
  statement: `Pergunta ${i + 1}: Qual a capital da França?`,
  answer: "Paris",
}));

const Stage: FC = () => {
  const [page, setPage] = useState(1);
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped((prev) => !prev);

  const handleChange = (_: ChangeEvent<unknown>, page: number) => {
    setFlipped(false);
    setPage(page);
  };

  return (
    <Stack
      spacing={4}
      sx={{
        height: "calc(100vh - 60px)",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "60vh",
          cursor: "pointer",
        }}
        onClick={handleFlip}
      >
        <Card
          variant="outlined"
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            transition: "transform 0.8s",
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateX(180deg)" : "rotateX(0deg)",
            overflow: "unset",
          }}
        >
          <CardContent
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontWeight: 600,
              }}
            >
              {flashcards[page - 1].statement}
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateX(180deg)",
            }}
          >
            <Typography
              variant="h5"
              align="center"
            >
              {flashcards[page - 1].answer}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Pagination
        count={flashcards.length}
        page={page}
        siblingCount={0}
        shape="rounded"
        onChange={handleChange}
      />
    </Stack>
  );
};

export default Stage;
