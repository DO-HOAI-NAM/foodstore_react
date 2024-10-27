import axiosClient from "../axios.config";

const cartAPI = {
  fetchCart(userId) {
    const url = `/carts`;
    return axiosClient.get(url);
  },
  addItem(newItem) {
    const url = `/carts`;
    return axiosClient.post(url, newItem);
  },
  removeItem(cart_id) {
    const url = `/carts/${cart_id}`;
    return axiosClient.delete(url);
  },
  updateItem(data) {
    const url = `/carts`;
    return axiosClient.post(url, data);
  },
  deleteItem(cart_id) {
    const url = `/carts/${cart_id}`;
    return axiosClient.delete(url);
  },
};

export default cartAPI;
