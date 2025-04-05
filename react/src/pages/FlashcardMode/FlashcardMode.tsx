import { FC, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const FlashcardMode: FC = () => {
  const flashcards = [
    {
      statement: "Qual a capital da França?",
      answer: "Paris",
    },
    {
      statement: "Quanto é 2 + 2?",
      answer: "4",
    },
  ];

  const [page, setPage] = useState(1);
  const [flipped, setFlipped] = useState(false);

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      setFlipped(false);
    }
  };

  const handleNext = () => {
    if (page < flashcards.length) {
      setPage((prev) => prev + 1);
      setFlipped(false);
    }
  };

  return (
    <Stack
      spacing={4}
      alignItems="center"
    >
      <Typography
        variant="subtitle2"
        color="text.secondary"
      >
        {page} de {flashcards.length}
      </Typography>

      <Paper
        onClick={() => setFlipped(!flipped)}
        variant="outlined"
        sx={{
          width: 320,
          height: 200,
          position: "relative",
          transition: "transform 0.8s",
          transformStyle: "preserve-3d",
          transformOrigin: "center",
          transform: flipped ? "rotateX(180deg)" : "rotateX(0deg)",
          cursor: "pointer",
          overflow: "unset",
        }}
      >
        {/* Frente */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            zIndex: 2,
            p: 3,
          }}
        >
          <Typography
            variant="h6"
            align="center"
          >
            {flashcards[page - 1].statement}
          </Typography>
        </Box>

        {/* Verso */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
            zIndex: 1,
            p: 3,
          }}
        >
          <Typography
            variant="h6"
            align="center"
          >
            {flashcards[page - 1].answer}
          </Typography>
        </Box>
      </Paper>

      <Stack
        direction="row"
        spacing={2}
      >
        <Button
          onClick={handlePrev}
          disabled={page === 1}
        >
          Anterior
        </Button>
        <Button
          onClick={handleNext}
          disabled={page === flashcards.length}
        >
          Próximo
        </Button>
      </Stack>
    </Stack>
  );
};

export default FlashcardMode;
