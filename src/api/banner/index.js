import axiosClient from '../axios.config';

const bannerAPI = {
  getAll() {
    const url = `/banners`;
    return axiosClient.get(url);
  },
};

export default bannerAPI;
