import { create } from "zustand";

export const usePhotoAlbumStore = create((set) => ({
  allAlbum: [],
  albumId: "",

  setAlbumId: (albumId) => set({ albumId }),
  setPhotoAlbum: (allAlbum) => set({ allAlbum })
}));
