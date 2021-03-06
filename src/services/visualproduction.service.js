import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

import {
  VISUAL_PRODUCTION_CREATE,
  VISUAL_PRODUCTION_EDIT,
  VISUAL_PRODUCTION_DELETE,
  FETCH_ALL_VISUAL_PRODUCTION_TASKS,
  FETCH_VISUAL_PRODUCTION_TASK_DETAILS,
} from "../api/endpoints";
import authHeader from "./auth.header";

const createVisualProduction = (name, shapes, colors) => {
  var fd = new FormData();
  fd.append("name", name);
  fd.append("shapes", JSON.stringify(shapes));
  fd.append("colors", JSON.stringify(colors));

  return axios
    .post(VISUAL_PRODUCTION_CREATE, fd, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const editVisualProduction = (id, name, shapes, colors) => {
  var fd = new FormData();
  fd.append("name", name);
  fd.append("id", id);
  fd.append("shapes", JSON.stringify(shapes));
  fd.append("colors", JSON.stringify(colors));

  return axios
    .post(VISUAL_PRODUCTION_EDIT, fd, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const fetchAllVisualProductionTasks = () => {
  return axios
    .get(FETCH_ALL_VISUAL_PRODUCTION_TASKS, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

export const fetchVisualProductionTask = (id) => {
  return axios.get(FETCH_VISUAL_PRODUCTION_TASK_DETAILS + "/" + id, {
    headers: authHeader(),
  });
};

const deleteVisualProductionTask = (id) => {
  var fd = new FormData();
  fd.append("id", id);
  return axios
    .post(VISUAL_PRODUCTION_DELETE, fd, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

export default {
  createVisualProduction,
  editVisualProduction,
  deleteVisualProductionTask,
  fetchAllVisualProductionTasks,
  fetchVisualProductionTask,
};
