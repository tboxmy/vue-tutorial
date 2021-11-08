import axios from "axios";
const API_URL = "https://randomuser.me/api";

class UserProfileService {
  getUserProfile() {
    return axios.get(API_URL + "/");
  }
}
export default new UserProfileService();
