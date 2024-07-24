import { create } from "zustand";

export const useMessageStore = create((set) => ({
    allMessage: [],
    

  setMessage: (allMessage) => set({ allMessage }),
  
}));
