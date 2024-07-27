import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      access_token: null,
      expires_in: null,
      user: {},
      setAccessToken: (access_token, expires_in) =>
        set((state) => ({ access_token, expires_in })),
      setUser: (user) => set((state) => ({ user })),
      resetAuth: () => set({
        access_token: undefined,
        expires_in: 0,
        user: {},
      })
    }),
    {
      name: "auth_store"
    }
  )
);

