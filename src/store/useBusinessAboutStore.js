import { create } from "zustand";

export const useBusinessAboutStore = create(
    (set) => ({
      allState: [],
      businessOwner: null,
      businessProfile: null,

      setBusinessProfile: (businessProfile) => set({businessProfile}),
      setBusinessOwner: (businessOwner) => set({businessOwner}),
      
      setAboutAllData: ({allState, businessOwner, businessProfile}) =>{
        set({ allState, businessOwner, businessProfile })
      },

      resetBusinessAboutData: () => set({
        allState: [],
        businessOwner: null,
        businessProfile: null,
        notificationSetting: null,
      })
    })
);
