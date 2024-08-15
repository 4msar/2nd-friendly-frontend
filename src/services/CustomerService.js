import { API_URL } from "@/helpers/apiUrl";
import axios from "axios";

axios.defaults.baseURL = API_URL;

const CustomerService = {
 
  aboutCustomer: () => axios.post("/customer/account-information-all", {  }),
  aboutCustomerSave: (data) => axios.post("/customer/account-information-save", { data }),
  changePassword: (data) => axios.post("/customer/change-password", { data }),
  notificationAll: () => axios.post("/customer/account-notification-all", {  }),
  notificationSave: (data) => axios.post("/customer/account-notification-save", { data }),
  settingsNotificationAll: () => axios.post("/customer/setting-notification-all", {  }),
  settingsNotificationUpdate: (data) => axios.post("/customer/setting-notification-update", { data }),
  reviewAll: () =>
    axios.post("/customer/post-review-all", {  }),
  reviewPostToBusiness: (data) =>
    axios.post("/customer/post-review-to-bussiness", { data }),
  reviewShow: (data) =>
    axios.post("/customer/post-review-show", { data }),

  messageAll: () =>
    axios.post("/customer/message-to-bussiness-all", {  }),
  sendMessageToBusiness: (data) =>
    axios.post("/customer/send-message-to-bussiness", { data }),
  recentMessage: (data) =>
    axios.post("/customer/message-to-bussiness-recent", { data }),
  messageShow: (data) =>
    axios.post("/customer/send-message-show", { data }),
 

  supportAll: () =>
    axios.post("/customer/support-all", {  }),
  supportCreate: (data) =>
    axios.post("/customer/support-create", { data }),
  supportView: (data) =>
    axios.post("/customer/support-view", { data }),

  careerAll: () =>
    axios.post("/customer/career-all", {  }),
  careerView: (data) =>
    axios.post("/customer/career-view", { data }),

};

export default CustomerService;
