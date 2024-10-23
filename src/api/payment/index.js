import axiosClient from "../axios.config";

const orderAPI = {
  getAll() {
    const url = `/orders`;
    return axiosClient.get(url);
  },
  getOne(order_id) {
    const url = `/orders/${order_id}`;
    return axiosClient.get(url);
  },
  getDetails(id) {
    const url = `/details/${id}`;
    return axiosClient.get(url);
  },
  getWatch() {
    const url = `/watchs`;
    return axiosClient.get(url);
  },
  getFavorite() {
    const url = `/favorites`;
    return axiosClient.get(url);
  },
  confirmPayment(payment) {
    const url = `/patient/detail/create_payment_url`;
    return axiosClient.post(url, payment);
  },
  // Book store
  addPayment() {
    const url = `/orders`;
    return axiosClient.post(url);
  },
  confirmPayment(payment) {
    const url = `/project/order/create_payment_url`;
    return axiosClient.post(url, payment);
  },
};

export default orderAPI;
