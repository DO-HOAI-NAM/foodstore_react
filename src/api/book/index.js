import axiosClient from "../axios.config";

const bookAPI = {
  getAll() {
    const url = `/products`;
    return axiosClient.get(url);
  },
  getTrending() {
    const url = `/products`;
    return axiosClient.get(url);
  },
  getBestSeller() {
    const url = `/products`;
    return axiosClient.get(url);
  },
  getNewest() {
    const url = `/products`;
    return axiosClient.get(url);
  },
  getOne(book_id) {
    const url = `/products/${book_id}`;
    return axiosClient.get(url);
  },
  addWatch(book) {
    const url = `/project/watch`;
    return axiosClient.post(url, book);
  },
  addFavorite(book) {
    const url = `/project/favorite`;
    return axiosClient.post(url, book);
  },
  checkBook(book_id) {
    const url = `/project/check/${book_id}`;
    return axiosClient.get(url);
  },
  commentBook(data) {
    const url = `/project/comment`;
    return axiosClient.post(url, data);
  },
  getAllCategory() {
    const url = `project/category`;
    return axiosClient.get(url);
  },
  checkFavorite() {
    const url = `/project/favorite`;
    return axiosClient.get(url);
  },
  checkWatch() {
    const url = `/project/watch`;
    return axiosClient.get(url);
  },
};

export default bookAPI;
