import { createFileRoute, redirect } from "@tanstack/react-router";

import Home from "@/pages/Home";

export const Route = createFileRoute("/")({
  component: Home,
  beforeLoad: () => {
    throw redirect({ to: "/profile/$username", params: { username: "gabrielabreu" } });
  },
});
