import { create } from "zustand";

export const usePhotoAlbumStore = create((set) => ({
  allAlbum: [],

  setPhotoAlbum: (allAlbum) => set({ allAlbum })
}));
