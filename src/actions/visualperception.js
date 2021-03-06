import {
  CREATE_VISUAL_PERCEPTION_SUCCESS,
  CREATE_VISUAL_PERCEPTION_FAIL,
  EDIT_VISUAL_PERCEPTION_SUCCESS,
  EDIT_VISUAL_PERCEPTION_FAIL,
  DELETE_VISUAL_PERCEPTION_SUCCESS,
  DELETE_VISUAL_PERCEPTION_FAIL,
  FETCH_ALL_VISUAL_PERCEPTION_TASKS_SUCCESS,
  FETCH_ALL_VISUAL_PERCEPTION_TASKS_FAIL,
  SET_MESSAGE,
} from "./types";
import VisualPerceptionService from "../services/visualperception.service";

export const createVisualPerception = (name, file, options) => (dispatch) => {
  return VisualPerceptionService.createVisualPerception(
    name,
    file,
    options
  ).then(
    (response) => {
      dispatch({
        type: CREATE_VISUAL_PERCEPTION_SUCCESS,
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
        type: CREATE_VISUAL_PERCEPTION_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const editVisualPerception = (id, name, file, options) => (dispatch) => {
  return VisualPerceptionService.editVisualPerception(
    id,
    name,
    file,
    options
  ).then(
    (response) => {
      dispatch({
        type: EDIT_VISUAL_PERCEPTION_SUCCESS,
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
        type: EDIT_VISUAL_PERCEPTION_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const fetchAllVisualPerceptionTasks = () => (dispatch) => {
  return VisualPerceptionService.fetchAllVisualPerceptionTasks().then(
    (data) => {
      dispatch({
        type: FETCH_ALL_VISUAL_PERCEPTION_TASKS_SUCCESS,
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
        type: FETCH_ALL_VISUAL_PERCEPTION_TASKS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const deleteVisualPerceptionTask = (id) => (dispatch) => {
  return VisualPerceptionService.deleteVisualPerceptionTask(id).then(
    (data) => {
      dispatch({
        type: DELETE_VISUAL_PERCEPTION_SUCCESS,
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
        type: DELETE_VISUAL_PERCEPTION_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
