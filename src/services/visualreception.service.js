import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

import {
  VISUAL_RECEPTION_CREATE,
  VISUAL_RECEPTION_EDIT,
  VISUAL_RECEPTION_DELETE,
  FETCH_ALL_VISUAL_RECEPTION_TASKS,
  FETCH_VISUAL_RECEPTION_TASK_DETAILS,
} from "../api/endpoints";
import authHeader from "./auth.header";

const createVisualReception = (name, file, options) => {
  //var file = file.name;

  var fd = new FormData();
  fd.append("file", file);
  fd.append("name", name);
  fd.append("options", JSON.stringify(options));

  return axios
    .post(VISUAL_RECEPTION_CREATE, fd, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};
const editVisualReception = (id, name, file, options) => {
  //var file = file.name;

  var fd = new FormData();
  fd.append("file", file);
  fd.append("id", id);
  fd.append("name", name);
  fd.append("options", JSON.stringify(options));

  return axios
    .post(VISUAL_RECEPTION_EDIT, fd, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const fetchAllVisualReceptionTasks = () => {
  return axios
    .get(FETCH_ALL_VISUAL_RECEPTION_TASKS, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

export const fetchVisualReceptionTask = (id) => {
  return axios.get(FETCH_VISUAL_RECEPTION_TASK_DETAILS + "/" + id, {
    headers: authHeader(),
  });
};

const deleteVisualReceptionTask = (id) => {
  var fd = new FormData();
  fd.append("id", id);
  return axios
    .post(VISUAL_RECEPTION_DELETE, fd, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

export default {
  createVisualReception,
  editVisualReception,
  deleteVisualReceptionTask,
  fetchVisualReceptionTask,
  fetchAllVisualReceptionTasks,
};
