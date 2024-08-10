import { create } from "zustand";

export const useCustomerStore = create(
    (set) => ({
      allState: [],
      customerProfile: null,
      messageAll: [],
      careerAll: [],
      supportAll: [],

      setCustomerProfile: (customerProfile) => set({customerProfile}),
      setMessageAll: (messageAll) => set({messageAll}),
      setCareerAll: (careerAll) => set({careerAll}),
      setSupportAll: (supportAll) => set({supportAll}),

      setAboutAllData: ({allState, customerProfile}) =>{
        set({ allState, customerProfile })
      }
    })
);
