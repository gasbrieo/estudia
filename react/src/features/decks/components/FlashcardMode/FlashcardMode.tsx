import { useState, FC } from "react";
import { Box, Typography, Card, CardContent, Pagination, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchFlashcards } from "@/services/deck.service";

const deckId = "4";

const FlashcardMode: FC = () => {
  const { data: flashcards = [], isLoading } = useQuery({
    queryKey: ["flashcards", deckId],
    queryFn: ({ queryKey }) => fetchFlashcards(queryKey[1]),
  });

  const [flipped, setFlipped] = useState(false);
  const [page, setPage] = useState(1);

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  const handleChange = (value: number) => {
    setFlipped(false);
    setPage(value);
  };

  if (isLoading) return null;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "80%",
          maxWidth: "800px",
          height: "80%",
          maxHeight: "800px",
          perspective: "1000px",
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
            transformOrigin: "center",
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
              zIndex: 2,
            }}
          >
            <Typography variant="h5">{flashcards[page - 1].statement}</Typography>
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
              zIndex: 1,
            }}
          >
            <Typography variant="h5">{flashcards[page - 1].answer}</Typography>
          </CardContent>
        </Card>
      </Box>
      <Stack
        spacing={2}
        sx={(theme) => ({
          mt: theme.spacing(4),
        })}
      >
        <Pagination
          count={flashcards.length}
          page={page}
          siblingCount={0}
          shape="rounded"
          onChange={(_, page) => {
            handleChange(page);
          }}
        />
      </Stack>
    </Box>
  );
};

export default FlashcardMode;
