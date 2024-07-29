import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePublicPageStore = create(
  persist(
    (set) => ({
      allCategory: [],
      recentAdvertisement: [],
      upcomingEvents: [],
      topMenu: [],
      moreMenu: [],
      setPublicPageData: (
        allCategory,
        recentAdvertisement,
        upcomingEvents,
        topMenu,
        moreMenu
      ) =>
        set((state) => ({
          allCategory,
          recentAdvertisement,
          upcomingEvents,
          topMenu,
          moreMenu
        }))
    }),
    {
      name: "public_store"
    }
  )
);
