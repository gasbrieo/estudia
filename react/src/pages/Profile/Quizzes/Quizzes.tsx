import type { FC } from "react";

import Filters from "./Filters";
import List from "./List";

const Quizzes: FC = () => {
  return (
    <>
      <Filters />
      <List />
    </>
  );
};

export default Quizzes;
