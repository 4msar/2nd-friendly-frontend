import { create } from "zustand";

export const useBusinessAboutStore = create(
    (set) => ({
      allState: [],
      businessOwner: null,
      businessProfile: null,
      notificationSetting: null,

      setBusinessProfile: (businessProfile) => set({businessProfile}),
      setBusinessOwner: (businessOwner) => set({businessOwner}),
      setNotificationSetting: (notificationSetting) => set({notificationSetting}),
      
      setAboutAllData: ({allState, businessOwner, businessProfile}) =>{
        set({ allState, businessOwner, businessProfile })
      }
    })
);
