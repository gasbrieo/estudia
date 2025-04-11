import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import NotFoundPage from "@/pages/NotFound";

export const Route = createFileRoute("/_protected")({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: Outlet,
  notFoundComponent: NotFoundPage,
});
