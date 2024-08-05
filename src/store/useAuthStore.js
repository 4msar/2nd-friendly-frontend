"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      access_token: "loading",
      expires_in: 0,
      user: null,
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
      name: "auth_store",
      partialize: ({access_token, ...state}) =>{
        return {
          access_token: access_token ==="loading"?"":access_token,
          ...state
        }
      }
    }
  )
);

