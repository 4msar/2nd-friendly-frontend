import { create } from "zustand";

export const useReviewStore = create((set) => ({
    allReview: [],
    

  setReview: (allReview) => set({ allReview }),
  
}));
