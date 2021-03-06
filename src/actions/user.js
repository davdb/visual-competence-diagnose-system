import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  SET_MESSAGE,
  DELETE_USER_ACCOUNT_FAIL,
  DELETE_USER_ACCOUNT_SUCCESS,
  CHANGE_ENABLED_USER_ACCOUNT_FAIL,
  CHANGE_ENABLED_USER_ACCOUNT_SUCCESS,
  EDIT_USER_ACCOUNT_SUCCESS,
} from "./types";
import UserService from "../services/user.service";

export const fetchAllUsers = () => (dispatch) => {
  return UserService.fetchAllUsers().then(
    (data) => {
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: { users: data },
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: FETCH_USERS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const deleteUserAccount = (id) => (dispatch) => {
  return UserService.deleteUserAccount(id).then(
    (data) => {
      dispatch({
        type: DELETE_USER_ACCOUNT_SUCCESS,
        payload: { deleteUserId: id },
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: DELETE_USER_ACCOUNT_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const changeEnabledUserAccount = (id) => (dispatch) => {
  return UserService.changeEnabledUserAccount(id).then(
    (data) => {
      dispatch({
        type: CHANGE_ENABLED_USER_ACCOUNT_SUCCESS,
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: CHANGE_ENABLED_USER_ACCOUNT_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
export const editUserAccount = (id, email, group) => (dispatch) => {
  return UserService.editUserAccount(id, email, group).then(
    (data) => {
      dispatch({
        type: EDIT_USER_ACCOUNT_SUCCESS,
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: EDIT_USER_ACCOUNT_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
