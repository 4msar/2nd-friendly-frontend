import { create } from "zustand";

export const useCustomerAboutStore = create(
    (set) => ({
      allState: [],
      customerOwner: null,
      customerProfile: null,

      setCustomerProfile: (customerProfile) => set({customerProfile}),
      setCustomerOwner: (customerOwner) => set({customerOwner}),

      setAboutAllData: ({allState, customerOwner, customerProfile}) =>{
        set({ allState, customerOwner, customerProfile })
      }
    })
);
