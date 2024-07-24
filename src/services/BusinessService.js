import { API_URL } from "@/helpers/apiUrl";
import axios from "axios";

axios.defaults.baseURL = API_URL;

const BusinessService = {
  categorySubCategoryAll: () =>
    axios.post("/business/category-sub-category-all-and-selected"),

  addRemoveCategory: (data) =>
    axios.post("/business/single-subcategory-add-remove", { data }),

  aboutBusiness: () => axios.post("/business/about-the-business-all"),
  aboutBusinessSave: (data) =>
    axios.post("/business/about-the-business-save", { data }),
  amenityAllAndSelected: () => axios.post("/business/amenity-all-and-selected"),
  amenityAddRemove: (data) =>
    axios.post("/business/single-amenity-add-remove", { data }),
  operationHours: () =>
    axios.post("/business/hours-of-operation-and-extended-closure", {}),
  operationHoursSave: (data) =>
    axios.post("/business/hours-of-operation-save", { data }),
  operationClosureSave: (data) =>
    axios.post("/business/hours-of-operation-extended-closure-save", { data }),
  photoAlbumAll: () => axios.post("/business/photo-album-all"),
  photoAlbumSave: (data) => axios.post("/business/photo-album-save", { data }),
  photoAlbumUpdate: (data) =>
    axios.post("/business/photo-album-Update", { data }),
  photoAlbumDelete: (data) =>
    axios.post("/business/photo-album-delet", { data }),
  albumPhotoAll: () => axios.post("/business/album-photo-all", {}),
  albumPhotoSave: (data) => axios.post("/business/album-photo-save", { data }),
  albumPhotoUpdate: (data) =>
    axios.post("/business/album-photo-update", { data }),
  albumPhotoDelete: (data) =>
    axios.post("/business/album-photo-delet", { data })
};

export default BusinessService;
