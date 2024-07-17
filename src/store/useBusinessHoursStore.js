import { create } from "zustand";

export const useBusinessHoursStore = create((set) => ({
    businessOperation: {},
    extendedClosure: {},

  setBusinessHours: (businessOperation) => set({ businessOperation }),
  setBusinessClosure: (extendedClosure) =>
    set({ extendedClosure })
}));
