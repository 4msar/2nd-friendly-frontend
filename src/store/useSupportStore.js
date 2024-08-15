import { create } from "zustand";

export const useSupportStore = create((set) => ({
    allSupport: [],
    allTicketType: [],
    
    setSupports: (allSupport) => set({ allSupport }),
    setSupportType: (allTicketType) => set({ allTicketType }),
  
}));
