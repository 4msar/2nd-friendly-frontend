import { create } from "zustand";

export const useBusinessCategoryStore = create((set) => ({
  allCategory: [],
  selectedSubCategory: [],

  setBusinessCategory: (allCategory) => set({ allCategory }),
  setBusinessSelectedCategory: (selectedSubCategory) =>
    set({ selectedSubCategory })
}));
