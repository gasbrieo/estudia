import type { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Layout } from "./features/layout";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import FlashcardMode from "./features/decks/components/FlashcardMode/FlashcardMode";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <FlashcardMode />
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
