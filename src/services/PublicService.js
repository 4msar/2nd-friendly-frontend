import { API_URL } from "@/helpers/apiUrl";
import axios from "axios";

axios.defaults.baseURL = API_URL;

const PublicService = {
  topMenu: () => axios.post("/common/top-menu"),
  moreMenu: () => axios.post("/common/view-more-upcoming-events"),
  homePageData: () => axios.post("/common/home-page")
};

export default PublicService;
