/* eslint-disable */

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
const Authorization = {
  login: (data) =>
    commandApi.post("/login", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }),

  updateDetails: (data) =>
    commandApi.post("/customer-account-details-update", data),

  updateBillingAddress: (data) =>
    commandApi.post("/customer-billing-details-update", data),

  updateShippingAddress: (data) =>
    commandApi.post("/customer-shipping-details-update", data),

  forget: (data) =>
    commandApi.post("/api/v1/auth/password/reset-request", data, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }),

  reset: (data) => commandApi.post("/api/v1/auth/password/reset", data),

  change: (payload) => commandApi.post(`/api/v1/auth/change/password`, payload),

  logout: () => {
    localStorage.removeItem(APP_LOGIN_ACCESS_TOKEN_KEY);
    localStorage.removeItem(APP_AUTHORIZE_USER_KEY);
    localStorage.removeItem(APP_AUTHORIZE_USER);
    localStorage.removeItem(APP_USER_DETAILS);
  },

  getUserDetails: () => commandApi.get("/customer-account-details")
};

export default Authorization;
