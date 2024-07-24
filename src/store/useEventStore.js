import { create } from "zustand";

export const useEventStore = create((set) => ({
    allEvent: [],
    

  setEvent: (allEvent) => set({ allEvent }),
  
}));
