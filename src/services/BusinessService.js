import { API_URL } from "@/helpers/apiUrl";
import { createApiRequest } from "@/helpers/axios";
import {
  APP_AUTHORIZE_USER,
  APP_AUTHORIZE_USER_KEY,
  APP_LOGIN_ACCESS_TOKEN_KEY,
  APP_USER_DETAILS
} from "@/helpers/config";
import { isEmpty } from "@/helpers/functions";
import { secureStorage } from "@/utils/storage";

const access_token = isEmpty(secureStorage.get(APP_AUTHORIZE_USER_KEY))
  ? "V345o52ghvdcgh765dZ"
  : JSON?.parse(secureStorage.get(APP_AUTHORIZE_USER_KEY));
const commandApi = createApiRequest(API_URL);

const BusinessService = {
    categorySubCategoryAll: () =>
        commandApi.post("/business/category-sub-category-all-and-selected"),

    addRemoveCategory: (data) => commandApi.post("/business/single-subcategory-add-remove", data),

    aboutBusiness: () => commandApi.post("/business/about-the-business-all"),
    aboutBusinessSave: (data) => commandApi.post("/business/about-the-business-save", data),
    amenityAllAndSelected: () => commandApi.post("/business/amenity-all-and-selected", ),
    amenityAddRemove: (data) => commandApi.post("/business/single-amenity-add-remove", data),
    operationHours: () => commandApi.post("/business/hours-of-operation-and-extended-closure",{}),
    operationHoursSave: (data) => commandApi.post("/business/hours-of-operation-save", data),
    operationClosureSave: (data) => commandApi.post("/business/hours-of-operation-extended-closure-save", data),

}

export default BusinessService;