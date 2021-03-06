import {
  FETCH_VISUAL_PERCEPTION_TASKS_FAIL,
  FETCH_VISUAL_PERCEPTION_TASKS_SUCCESS,
  FETCH_VISUAL_RECEPTION_TASKS_FAIL,
  FETCH_VISUAL_RECEPTION_TASKS_SUCCESS,
  FETCH_VISUAL_PRODUCTION_TASKS_FAIL,
  FETCH_VISUAL_PRODUCTION_TASKS_SUCCESS,
  FETCH_ALL_TESTS_SUCCESS,
  FETCH_ALL_TESTS_FAIL,
  CREATE_TEST_SUCCESS,
  CREATE_TEST_FAIL,
  SET_MESSAGE,
} from "./types";

import TestService from "../services/test.service";
import { FETCH_ALL_TESTS } from "../api/endpoints";

export const fetchVisualPerceptionTasks = () => (dispatch) => {
  return TestService.fetchVisualPerceptionTasks().then(
    (data) => {
      dispatch({
        type: FETCH_VISUAL_PERCEPTION_TASKS_SUCCESS,
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
        type: FETCH_VISUAL_PERCEPTION_TASKS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const fetchVisualReceptionTasks = () => (dispatch) => {
  return TestService.fetchVisualReceptionTasks().then(
    (data) => {
      dispatch({
        type: FETCH_VISUAL_RECEPTION_TASKS_SUCCESS,
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
        type: FETCH_VISUAL_RECEPTION_TASKS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
export const fetchVisualProductionTasks = () => (dispatch) => {
  return TestService.fetchVisualProductionTasks().then(
    (data) => {
      dispatch({
        type: FETCH_VISUAL_PRODUCTION_TASKS_SUCCESS,
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
        type: FETCH_VISUAL_PRODUCTION_TASKS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const fetchAllTests = () => (dispatch) => {
  return TestService.fetchAllTests().then(
    (data) => {
      dispatch({
        type: FETCH_ALL_TESTS_SUCCESS,
        payload: { tests: data },
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
        type: FETCH_ALL_TESTS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const createTest = (results) => (dispatch) => {
  return TestService.createTest(results).then(
    (data) => {
      dispatch({
        type: CREATE_TEST_SUCCESS,
        payload: { result: data.result },
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
        type: CREATE_TEST_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
