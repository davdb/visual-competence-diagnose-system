import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

import {
  VISUAL_PERCEPTION_CREATE,
  VISUAL_PERCEPTION_EDIT,
  VISUAL_PERCEPTION_DELETE,
  FETCH_ALL_VISUAL_PERCEPTION_TASKS,
  FETCH_ALL_VISUAL_PERCEPTION_TASK_DETAILS,
} from "../api/endpoints";
import authHeader from "./auth.header";

const createVisualPerception = (name, file, options) => {
  var fd = new FormData();
  fd.append("file", file);
  fd.append("name", name);
  fd.append("options", JSON.stringify(options));

  return axios
    .post(VISUAL_PERCEPTION_CREATE, fd, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};
const editVisualPerception = (id, name, file, options) => {
  var fd = new FormData();
  fd.append("file", file);
  fd.append("id", id);
  fd.append("name", name);
  fd.append("options", JSON.stringify(options));

  return axios
    .post(VISUAL_PERCEPTION_EDIT, fd, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const fetchAllVisualPerceptionTasks = () => {
  return axios
    .get(FETCH_ALL_VISUAL_PERCEPTION_TASKS, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

export const fetchVisualPerceptionTask = (id) => {
  return axios.get(FETCH_ALL_VISUAL_PERCEPTION_TASK_DETAILS + "/" + id, {
    headers: authHeader(),
  });
};

const deleteVisualPerceptionTask = (id) => {
  var fd = new FormData();
  fd.append("id", id);
  return axios
    .post(VISUAL_PERCEPTION_DELETE, fd, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

export default {
  createVisualPerception,
  editVisualPerception,
  deleteVisualPerceptionTask,
  fetchAllVisualPerceptionTasks,
};
