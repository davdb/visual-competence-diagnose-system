import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

import { REGISTER_URL, LOGIN_URL } from "../api/endpoints";

const register = (email, plainPassword) => {
  return axios.post(REGISTER_URL, {
    email,
    plainPassword,
  });
};

const login = (email, password) => {
  return axios
    .post(LOGIN_URL, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
