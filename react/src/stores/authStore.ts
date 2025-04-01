import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  name: string;
  avatar: string;
};

export type AuthState = {
  authenticated: boolean;
  user: User | null;
};

export type AuthAction = {
  initialize: () => void;
};

export const useAuthStore = create<AuthState & AuthAction>()(
  persist(
    (set) => ({
      authenticated: false,
      user: null,

      initialize: () => {
        set({
          authenticated: true,
          user: {
            name: "Gabriel",
            avatar: "https://api.dicebear.com/7.x/initials/svg?seed=G",
          },
        });
      },
    }),
    { name: "authStore" }
  )
);
