import { API_URL } from "@/helpers/apiUrl";
import axios from "axios";

axios.defaults.baseURL = API_URL;

const PublicService = {
  topMenu: () => axios.post("/common/top-menu"),
  moreMenu: () => axios.post("/common/view-more-upcoming-events"),
  homePageData: () => axios.post("/common/home-page"),
  eventDetails: (data) => axios.post("/common/event-details", {data}),
  blogDetails: (data) => axios.post("/common/blog-details", {data}),
  subCategoryDetails: (data) => axios.post("/common/sub-category-details", {data}),
  advertisementDetails: (data) => axios.post("/common/advertisement-details", {data}),
  siteFaqList: () => axios.post("/common/site-faq", {}),
  allEvents: () => axios.post("/common/site-events", {}),
  allCareers: () => axios.post("/common/career-all", {}),
  allBlogs: () => axios.post("/common/blog-all", {}),
  allPress: () => axios.post("/common/press-all", {}),
};

export default PublicService;
