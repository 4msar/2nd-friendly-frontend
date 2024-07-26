import { create } from "zustand";

export const useEventStore = create((set) => ({
    allEvent: [],
    singleEvent: {},
    
  setSingleEvent: (singleEvent) => set({singleEvent}),
  setEvent: (allEvent) => set({ allEvent }),
  
}));
