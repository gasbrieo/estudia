import type { FC } from "react";
import { useState } from "react";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import QuestionCard from "./QuestionCard/QuestionCard";
import OptionCard from "./OptionCard/OptionCard";
import Summary from "./Summary/Summary";

const QUESTIONS = [
  {
    statement: "Qual é a sigla do estado de Minas Gerais?",
    options: ["MG", "MS", "MT", "MA"],
    correct: "MG",
  },
  {
    statement: "Qual é a sigla do estado do Amazonas?",
    options: ["AM", "AS", "AZ", "AN"],
    correct: "AM",
  },
  {
    statement: "A sigla 'BA' corresponde a qual estado?",
    options: ["Bahia", "Brasília", "Belém", "Boa Vista"],
    correct: "Bahia",
  },
  {
    statement: "A sigla 'SC' corresponde a qual estado?",
    options: ["Santa Catarina", "São Carlos", "Sergipe", "São Cristóvão"],
    correct: "Santa Catarina",
  },
  {
    statement: "Qual é a sigla do estado do Pará?",
    options: ["PR", "PA", "PB", "PE"],
    correct: "PA",
  },
  {
    statement: "A sigla 'CE' representa qual estado?",
    options: ["Ceará", "Cuiabá", "Curitiba", "Campinas"],
    correct: "Ceará",
  },
];

const Stage: FC = () => {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const question = QUESTIONS[step];
  const isAnswered = !!selected;
  const isFinished = step >= QUESTIONS.length;

  const handleSelect = (option: string) => {
    if (!isAnswered) {
      setSelected(option);
      if (option === question.correct) {
        setScore((prev) => prev + 1);
      }
    }
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
    setSelected(null);
  };

  const handleRetry = () => {
    setStep(0);
    setScore(0);
    setSelected(null);
  };

  if (isFinished) {
    return (
      <Summary
        score={score}
        total={QUESTIONS.length}
        quizId="1"
        onRetry={handleRetry}
      />
    );
  }

  return (
    <Stack
      spacing={4}
      sx={{
        height: "calc(100vh - 60px)",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <QuestionCard statement={question.statement} />
      <Grid
        container
        spacing={2}
        sx={{ height: "40%", width: "100%", m: 0 }}
      >
        {question.options.map((option) => (
          <Grid
            key={option}
            size={6}
          >
            <OptionCard
              label={option}
              isSelected={selected === option}
              isCorrect={option === question.correct}
              isDisabled={isAnswered}
              onClick={() => handleSelect(option)}
            />
          </Grid>
        ))}
      </Grid>
      {isAnswered && (
        <Button
          onClick={handleNext}
          variant="contained"
          size="large"
          sx={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            minWidth: 200,
          }}
        >
          Next
        </Button>
      )}
    </Stack>
  );
};

export default Stage;
