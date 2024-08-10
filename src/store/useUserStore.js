import { create } from "zustand";

export const useUserStore = create(
    (set) => ({
      allState: [],
      userOwner: null,
      userProfile: null,

      setUserProfile: (userProfile) => set({userProfile}),
      setUserOwner: (userOwner) => set({userOwner}),

      setAboutAllData: ({allState, userOwner, userProfile}) =>{
        set({ allState, userOwner, userProfile })
      }
    })
);
