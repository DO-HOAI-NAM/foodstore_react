import axiosClient from "../axios.config";

const userAPI = {
  signIn(email, password) {
    const url = `/auth/login`;
    return axiosClient.post(url, {
      email,
      password,
    });
  },
  signUp(newPatient) {
    const url = `/users`;
    return axiosClient.post(url, newPatient);
  },
  getOne(id) {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },
  verify(code) {
    const url = `/patient/verify`;
    return axiosClient.post(url, code);
  },
  resendCode() {
    const url = `/patient/resend`;
    return axiosClient.get(url);
  },
  update(newInformation) {
    const url = `/users`;
    return axiosClient.put(url, newInformation, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  changePassword(password) {
    const url = `/users/password`;
    return axiosClient.put(url, password);
  },
};

export default userAPI;
