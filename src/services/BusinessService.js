import { API_URL } from "@/helpers/apiUrl";
import axios from "axios";

axios.defaults.baseURL = API_URL;

const BusinessService = {
  categorySubCategoryAll: () =>
    axios.post("/business/category-sub-category-all-and-selected"),

  addRemoveCategory: (data) =>
    axios.post("/business/single-subcategory-add-remove", { data }),

  businessDashboard: () => axios.post("/business/dashboard"),
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
  albumPhotoAll: (data) => axios.post("/business/album-photo-all", { data }),
  albumPhotoSave: (data) => axios.post("/business/album-photo-save", { data }),
  albumPhotoUpdate: (data) =>
    axios.post("/business/album-photo-update", { data }),
  albumPhotoDelete: (data) =>
    axios.post("/business/album-photo-delet", { data }),
  embeddedVideoAll: () => axios.post("/business/embedded-video-all", {}),
  embeddedVideoSave: (data) =>
    axios.post("/business/embedded-video-save", { data }),
  embeddedVideoUpdate: (data) =>
    axios.post("/business/embedded-video-update", { data }),
  embeddedVideoDelete: (data) =>
    axios.post("/business/embedded-video-delet", { data }),
  
  reviewAll: () => axios.post("/business/review-all", {}),
  reviewUpdate: (data) => axios.post("/business/review-update", { data }),

  messageAll: () => axios.post("/business/message-all", {}),
  messageUpdate: (data) => axios.post("/business/message-update", { data }),
  messageEdit: (data) => axios.post("/business/message-edit", { data }),

  eventAll: () => axios.post("/business/event-all", {}),
  eventNew: (data) => axios.post("/business/event-create", { data }),
  eventEdit: (data) => axios.post("/business/event-edit", { data }),
  eventUpdate: (data) => axios.post("/business/event-update", { data }),
  eventView: (data) => axios.post("/business/event-view", { data }),
  eventDelete: (data) => axios.post("/business/event-delet", { data }),

  careerAll: () => axios.post("/business/career-all", {}),
  careerCreate: (data) => axios.post("/business/career-create", { data }),
  careerUpdate: (data) => axios.post("/business/career-update", { data }),
  careerView: (data) => axios.post("/business/career-view", { data }),

  supportAll: () => axios.post("/business/support-all", {}),
  supportType: () => axios.post("/business/support-new", {}),
  supportCreate: (data) => axios.post("/business/support-create", { data }),
  supportView: (data) => axios.post("/business/support-view", { data }),
  supportUpdate: (data) => axios.post("/business/support-update", { data }),

  passwordChange: (data) => axios.post("/business/change-password", { data }),
  phoneChange: (data) => axios.post("/business/change-phone-no", { data }),

  settingsBusinessNotificationAll: () =>
    axios.post("/business/setting-notification-all", {}),
  settingsBusinessNotificationUpdate: (data) =>
    axios.post("/business/setting-notification-update", { data }),
  privacySettingAll: () => axios.post("/business/privacy-setting-all", {}),
  privacySettingUpdate: (data) =>
    axios.post("/business/privacy-setting-update", { data })
};

export default BusinessService;
