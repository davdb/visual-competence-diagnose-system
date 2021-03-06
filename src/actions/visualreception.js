import {
  CREATE_VISUAL_RECEPTION_SUCCESS,
  CREATE_VISUAL_RECEPTION_FAIL,
  FETCH_ALL_VISUAL_RECEPTION_TASKS_SUCCESS,
  FETCH_ALL_VISUAL_RECEPTION_TASKS_FAIL,
  SET_MESSAGE,
} from "./types";

import VisualReceptionService from "../services/visualreception.service";

export const createVisualReception = (name, file, options) => (dispatch) => {
  return VisualReceptionService.createVisualReception(name, file, options).then(
    (response) => {
      dispatch({
        type: CREATE_VISUAL_RECEPTION_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
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
        type: CREATE_VISUAL_RECEPTION_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
export const editVisualReception = (id, name, file, options) => (dispatch) => {
  return VisualReceptionService.editVisualReception(
    id,
    name,
    file,
    options
  ).then(
    (response) => {
      dispatch({
        type: EDIT_VISUAL_RECEPTION_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
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
        type: EDIT_VISUAL_RECEPTION_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const fetchAllVisualReceptionTasks = () => (dispatch) => {
  return VisualReceptionService.fetchAllVisualReceptionTasks().then(
    (data) => {
      dispatch({
        type: FETCH_ALL_VISUAL_RECEPTION_TASKS_SUCCESS,
        payload: { tasks: data },
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
        type: FETCH_ALL_VISUAL_RECEPTION_TASKS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const deleteVisualReceptionTask = (id) => (dispatch) => {
  return VisualReceptionService.deleteVisualReceptionTask(id).then(
    (data) => {
      dispatch({
        type: DELETE_VISUAL_RECEPTION_SUCCESS,
        payload: { deleteTaskId: id },
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
        type: DELETE_VISUAL_RECEPTION_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
