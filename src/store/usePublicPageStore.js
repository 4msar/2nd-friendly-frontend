import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePublicPageStore = create(
  persist(
    (set) => ({
      allCategory: [],
      recentAdvertisement: [],
      upcomingEvents: [],
      recentBlog: [],
      topMenu: [],
      moreMenu: [],
      setPublicPageData: (
        allCategory,
        recentAdvertisement,
        upcomingEvents,
        recentBlog,
        topMenu,
        moreMenu
      ) =>
        set((state) => ({
          allCategory,
          recentAdvertisement,
          upcomingEvents,
          recentBlog,
          topMenu,
          moreMenu
        }))
    }),
    {
      name: "public_store"
    }
  )
);
