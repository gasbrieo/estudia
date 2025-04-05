import type { FC, SyntheticEvent } from "react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary, { accordionSummaryClasses } from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface QuestionItemProps {
  id: string;
  index: number;
  statement: string;
  options: string[];
  correctOption: number;
  expanded: string | false;
  onExpand: (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => void;
}

const QuestionItem: FC<QuestionItemProps> = ({
  id,
  index,
  statement,
  options,
  correctOption,
  expanded,
  onExpand,
}) => {
  return (
    <Accordion
      disableGutters
      elevation={0}
      square
      expanded={expanded === id}
      onChange={onExpand(id)}
      slotProps={{ transition: { unmountOnExit: true } }}
      sx={{
        border: (theme) => `1px solid ${theme.palette.divider}`,

        "&:not(:last-of-type)": {
          borderBottom: 0,
        },
        "&::before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-${id}-content`}
        id={`panel-${id}-header`}
        sx={{
          backgroundColor: "action.hover",
          flexDirection: "row-reverse",
          [`& .${accordionSummaryClasses.content}`]: {
            ml: 1,
          },
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>
          {index + 1}. {statement}
        </Typography>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          p: 2,
        }}
      >
        <Grid
          container
          spacing={1}
        >
          {options.map((opt, i) => {
            const isCorrect = i === correctOption;

            return (
              <Grid
                key={i}
                size={{ xs: 12, md: 6 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {isCorrect ? (
                    <CheckCircleIcon fontSize="small" />
                  ) : (
                    <RadioButtonUncheckedIcon fontSize="small" />
                  )}
                  <Typography variant="body2">{opt}</Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default QuestionItem;
