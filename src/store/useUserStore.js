import { create } from "zustand";

export const useUserStore = create(
    (set) => ({
      allState: [],
      userOwner: null,
      userProfile: null,
      allReview: [],
      allMessage: [],
      allWishlist: [],
      allCareer: [],
      allSupport: [],

      setUserProfile: (userProfile) => set({userProfile}),
      setUserOwner: (userOwner) => set({userOwner}),
      setReview: (allReview) => set({allReview}),
      setMessage: (allMessage) => set({allMessage}),
      setWishlist: (allWishlist) => set({allWishlist}),
      setAllCareer: (allCareer) => set({allCareer}),
      setAllSupport: (allSupport) => set({allSupport}),

      setAboutAllData: ({allState, userOwner, userProfile}) =>{
        set({ allState, userOwner, userProfile })
      }
    })
);
