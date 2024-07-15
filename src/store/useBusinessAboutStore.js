import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBusinessAboutStore = create(
  persist(
    (set) => ({
      aboutAll: null,
      
      
      aboutAllData: (aboutAll) => set((state) => ({ aboutAll }))
    }),
    {
      name: "about_store"
    }
  )
);

