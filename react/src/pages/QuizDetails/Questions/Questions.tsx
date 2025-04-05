import { type FC, type SyntheticEvent, useState } from "react";

import QuestionItem from "./QuestionItem";

const Questions: FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleExpand = (panel: string) => (_: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {Array.from({ length: 4 }).map((_, i) => (
        <QuestionItem
          key={String(i)}
          id={String(i)}
          index={i}
          statement={`Question ${i + 1}`}
          options={["Option A", "Option B", "Option C", "Option D"]}
          correctOption={1}
          expanded={expanded}
          onExpand={handleExpand}
        />
      ))}
    </div>
  );
};

export default Questions;
