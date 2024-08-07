import { create } from "zustand";

export const usePhotoAlbumStore = create((set) => ({
  allAlbum: [],
  albumId: "",
  allPhoto: [],
  singleAlbum: {},

  setSingleAlbum: (singleAlbum) => set({ singleAlbum }),
  setAlbumId: (albumId) => set({ albumId }),
  setPhotoAlbum: (allAlbum) => set({ allAlbum }),
  setAllPhoto: (allPhoto) => set({ allPhoto })
}));
