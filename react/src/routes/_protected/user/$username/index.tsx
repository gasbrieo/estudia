import { createFileRoute, notFound } from "@tanstack/react-router";

import UserProfilePage from "@/pages/UserProfilePage";
import { getUserProfile } from "@/services/user";
import { HttpApiError } from "@/types/api";

export const Route = createFileRoute("/_protected/user/$username/")({
  component: UserProfilePage,
  loader: async ({ params }) => {
    return await getUserProfile(params.username)
      .then((userProfileData) => {
        return { userProfileData };
      })
      .catch((error: HttpApiError) => {
        if (error.status === 404) {
          throw notFound();
        }
        throw error;
      });
  },
});
