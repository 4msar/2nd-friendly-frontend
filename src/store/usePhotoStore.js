import { create } from "zustand";

export const usePhotoAlbumStore = create((set) => ({
  allAlbum: [],
  albumId: "",
  allPhoto: [],

  setAlbumId: (albumId) => set({ albumId }),
  setPhotoAlbum: (allAlbum) => set({ allAlbum }),
  setAllPhoto: (allPhoto) => set({ allPhoto })
}));
