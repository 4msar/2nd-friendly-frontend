import { create } from "zustand";

export const useCustomerAboutStore = create(
    (set) => ({
      allState: [],
      customer: null,
      customerProfile: null,

      setCustomerProfile: (customerProfile) => set({customerProfile}),
      setCustomerOwner: (customer) => set({customer}),

      setAboutAllData: ({allState, customer, customerProfile}) =>{
        set({ allState, customer, customerProfile })
      }
    })
);
