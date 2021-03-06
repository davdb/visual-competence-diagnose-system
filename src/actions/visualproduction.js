import {
  CREATE_VISUAL_PRODUCTION_SUCCESS,
  CREATE_VISUAL_PRODUCTION_FAIL,
  EDIT_VISUAL_PRODUCTION_SUCCESS,
  EDIT_VISUAL_PRODUCTION_FAIL,
  DELETE_VISUAL_PRODUCTION_SUCCESS,
  DELETE_VISUAL_PRODUCTION_FAIL,
  FETCH_ALL_VISUAL_PRODUCTION_TASKS_SUCCESS,
  FETCH_ALL_VISUAL_PRODUCTION_TASKS_FAIL,
  SET_MESSAGE,
} from "./types";
import VisualProductionService from "../services/visualproduction.service";

export const createVisualProduction = (name, shapes, colors) => (dispatch) => {
  return VisualProductionService.createVisualProduction(
    name,
    shapes,
    colors
  ).then(
    (response) => {
      dispatch({
        type: CREATE_VISUAL_PRODUCTION_SUCCESS,
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
        type: CREATE_VISUAL_PRODUCTION_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const editVisualProduction = (id, name, shapes, colors) => (
  dispatch
) => {
  return VisualProductionService.editVisualProduction(
    id,
    name,
    shapes,
    colors
  ).then(
    (response) => {
      dispatch({
        type: EDIT_VISUAL_PRODUCTION_SUCCESS,
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
        type: EDIT_VISUAL_PRODUCTION_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const fetchAllVisualProductionTasks = () => (dispatch) => {
  return VisualProductionService.fetchAllVisualProductionTasks().then(
    (data) => {
      dispatch({
        type: FETCH_ALL_VISUAL_PRODUCTION_TASKS_SUCCESS,
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
        type: FETCH_ALL_VISUAL_PRODUCTION_TASKS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const deleteVisualProductionTask = (id) => (dispatch) => {
  return VisualProductionService.deleteVisualProductionTask(id).then(
    (data) => {
      dispatch({
        type: DELETE_VISUAL_PRODUCTION_SUCCESS,
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
        type: DELETE_VISUAL_PRODUCTION_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
