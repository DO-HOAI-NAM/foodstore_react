import axiosClient from "../axios.config";

const bookAPI = {
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
  getOne(book_id) {
    const url = `/products/product/${book_id}`;
    return axiosClient.get(url);
  },
  addWatch(book) {
    const url = `/watchs`;
    return axiosClient.post(url, book);
  },
  addFavorite(book) {
    const url = `/favorites`;
    return axiosClient.post(url, book);
  },
  checkBook(book_id) {
    const url = `/project/check/${book_id}`;
    return axiosClient.get(url);
  },
  commentBook(data) {
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

export default bookAPI;
