import { create } from "zustand";

export const useCareerStore = create((set) => ({
    allCareer: [],
    
    setCareer: (allCareer) => set({ allCareer }),
  
}));
