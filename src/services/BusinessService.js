import { API_URL } from "@/helpers/apiUrl";
import axios from "axios";

axios.defaults.baseURL = API_URL;

const BusinessService = {
  categorySubCategoryAll: () =>
    axios.post("/business/category-sub-category-all-and-selected"),

  addRemoveCategory: (data) =>
    axios.post("/business/single-subcategory-add-remove", data),

  aboutBusiness: () => axios.post("/business/about-the-business-all"),
  aboutBusinessSave: (data) =>
    axios.post("/business/about-the-business-save", data),
  amenityAllAndSelected: () => axios.post("/business/amenity-all-and-selected"),
  amenityAddRemove: (data) =>
    axios.post("/business/single-amenity-add-remove", data),
  operationHours: () =>
    axios.post("/business/hours-of-operation-and-extended-closure", {}),
  operationHoursSave: (data) =>
    axios.post("/business/hours-of-operation-save", data),
  operationClosureSave: (data) =>
    axios.post("/business/hours-of-operation-extended-closure-save", data)
};

export default BusinessService;
