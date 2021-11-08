import axios from "axios";
const API_URL = "https://dog.ceo/api/breeds";

class ProductService {
  getRandomImage() {
    return axios.get(API_URL + "/image/random");
  }
}
export default new ProductService();
