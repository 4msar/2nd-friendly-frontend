import { create } from "zustand";

export const useVideoStore = create((set) => ({
    allVideo: [],
    

  setVideo: (allVideo) => set({ allVideo }),
  
}));
