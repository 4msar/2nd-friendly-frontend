import { create } from "zustand";

export const useBusinessAmenitiesStore = create((set) => ({
  allAmenity: [],
  selectedAmenity: [],

  setBusinessAmenity: (allAmenity) => set({ allAmenity }),
  setBusinessSelectedAmenity: (selectedAmenity) => set({ selectedAmenity })
}));
