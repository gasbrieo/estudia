import type { FC } from "react";

import Filters from "./Filters";
import List from "./List";

const UserQuizzes: FC = () => {
  return (
    <>
      <Filters />
      <List />
    </>
  );
};

export default UserQuizzes;
