import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

import {
  VISUAL_PERCEPTION_TASKS_URL,
  VISUAL_RECEPTION_TASKS_URL,
  VISUAL_PRODUCTION_TASKS_URL,
  TEST_CREATE,
  FETCH_ALL_TESTS,
  FETCH_TEST_DETAILS,
  FETCH_TESTS_STATISTICS,
} from "../api/endpoints";
import authHeader from "./auth.header";

const fetchVisualPerceptionTasks = () => {
  return axios
    .get(VISUAL_PERCEPTION_TASKS_URL, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const fetchVisualReceptionTasks = () => {
  return axios
    .get(VISUAL_RECEPTION_TASKS_URL, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};
const fetchVisualProductionTasks = () => {
  return axios
    .get(VISUAL_PRODUCTION_TASKS_URL, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const fetchAllTests = () => {
  return axios
    .get(FETCH_ALL_TESTS, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const createTest = (results) => {
  var fd = new FormData();
  fd.append("results", JSON.stringify(results));

  return axios
    .post(TEST_CREATE, fd, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

export const fetchTestDetails = (id) => {
  return axios.get(FETCH_TEST_DETAILS + "/" + id, {
    headers: authHeader(),
  });
};

export const fetchTestsStatistics = () => {
  return axios
    .get(FETCH_TESTS_STATISTICS, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

export default {
  fetchVisualPerceptionTasks,
  fetchVisualReceptionTasks,
  fetchVisualProductionTasks,
  fetchAllTests,
  fetchTestDetails,
  fetchTestsStatistics,
  createTest,
};
