import { create } from "zustand";

export const useBusinessStore = create(
    (set) => ({
      
      dashboard: null,
      setDashboard: (dashboard) => set({dashboard}),

    })
);
