import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

import {
  FETCH_USERS_URL,
  DELETE_USER_ACCOUNT,
  FETCH_USER_INFORMATION,
  CHANGE_ENABLED_USER_ACCOUNT,
  EDIT_USER_ACCOUNT,
} from "../api/endpoints";
import authHeader from "./auth.header";

const fetchAllUsers = () => {
  return axios
    .get(FETCH_USERS_URL, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const deleteUserAccount = (id) => {
  var fd = new FormData();
  fd.append("id", id);
  return axios
    .post(DELETE_USER_ACCOUNT, fd, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const changeEnabledUserAccount = (id) => {
  var fd = new FormData();
  fd.append("id", id);
  return axios
    .post(CHANGE_ENABLED_USER_ACCOUNT, fd, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const editUserAccount = (id, email, group) => {
  var fd = new FormData();
  fd.append("id", id);
  fd.append("email", email);
  fd.append("group", group);
  return axios
    .post(EDIT_USER_ACCOUNT, fd, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

export const fetchUserInfo = () => {
  return axios
    .get(FETCH_USER_INFORMATION, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

export const fetchUserInfoById = (id) => {
  return axios
    .get(FETCH_USER_INFORMATION + "/" + id, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

export default {
  fetchAllUsers,
  editUserAccount,
  fetchUserInfo,
  deleteUserAccount,
  changeEnabledUserAccount,
};
