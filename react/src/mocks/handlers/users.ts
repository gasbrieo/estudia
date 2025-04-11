import { http, HttpResponse } from "msw";

import { ApiErrorResponse } from "@/types/api";

import { mockProfiles } from "../data/users";

export const userHandlers = [
  http.get("/users/:username/profile", ({ params }) => {
    const { username } = params;

    const profile = mockProfiles.find((p) => p.username === username);

    if (!profile) {
      const errorResponse: ApiErrorResponse = {
        instance: `/users/${username}/profile`,
        traceId: crypto.randomUUID?.() || "mock-trace-id",
        errors: [
          {
            type: "NotFound",
            error: "UserNotFound",
            detail: `No user found with username "${username}".`,
          },
        ],
      };
      return HttpResponse.json(errorResponse, { status: 404 });
    }

    return HttpResponse.json(profile);
  }),
];
