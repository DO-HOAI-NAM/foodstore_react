import axiosClient from "../axios.config";

const foodAPI = {
  getAll() {
    const url = `/products/product`;
    return axiosClient.get(url);
  },
  getSaleoff() {
    const url = `/products/expired`;
    return axiosClient.get(url);
  },
  getBestSeller() {
    const url = `/products/product`;
    return axiosClient.get(url);
  },
  getExpiredSoon() {
    const url = ` `;
    return axiosClient.get(url);
  },
  getNewest() {
    const url = `/products/product`;
    return axiosClient.get(url);
  },
  getOne(food_id) {
    const url = `/products/product/${food_id}`;
    return axiosClient.get(url);
  },
  addWatch(food) {
    const url = `/watchs`;
    return axiosClient.post(url, food);
  },
  addFavorite(food) {
    const url = `/favorites`;
    return axiosClient.post(url, food);
  },
  checkFood(food_id) {
    const url = `/project/check/${food_id}`;
    return axiosClient.get(url);
  },
  commentFood(data) {
    const url = `/products/comment`;
    return axiosClient.post(url, data);
  },
  getAllCategory() {
    const url = `/categories`;
    return axiosClient.get(url);
  },
  checkFavorite() {
    const url = `/favorites`;
    return axiosClient.get(url);
  },
  checkWatch() {
    const url = `/watchs`;
    return axiosClient.get(url);
  },
};

export default foodAPI;
