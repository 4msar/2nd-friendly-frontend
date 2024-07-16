import { create } from "zustand";

export const useBusinessAboutStore = create(
    (set) => ({
      allState: [],
      businessOwner: null,
      businessProfile: null,

      setBusinessProfile: (businessProfile) => set({businessProfile}),

      setAboutAllData: ({allState, businessOwner, businessProfile}) =>{
        set({ allState, businessOwner, businessProfile })
      }
    })
);
