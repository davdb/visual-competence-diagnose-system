const SERVER = "http://127.0.0.1:8000";

// user
export const REGISTER_URL = SERVER + "/api/v2/user/new-account";
export const LOGIN_URL = SERVER + "/v2/auth";
export const DELETE_USER_ACCOUNT = SERVER + "/api/v1/user/delete";
export const EDIT_USER_ACCOUNT = SERVER + "/api/v1/user/edit";
export const CHANGE_ENABLED_USER_ACCOUNT =
  SERVER + "/api/v1/user/change-enabled";
export const FETCH_USERS_URL = SERVER + "/api/v1/users";
export const FETCH_USER_INFORMATION = SERVER + "/api/v1/user/info";

// perception
export const VISUAL_PERCEPTION_CREATE =
  SERVER + "/api/v2/visual-perception/new";
export const VISUAL_PERCEPTION_EDIT = SERVER + "/api/v1/visual-perception/edit";
export const VISUAL_PERCEPTION_DELETE =
  SERVER + "/api/v1/visual-perception/delete";

// random tasks for test endpoint
export const VISUAL_PERCEPTION_TASKS_URL =
  SERVER + "/api/v1/visual-perception/tasks";

export const FETCH_ALL_VISUAL_PERCEPTION_TASK_DETAILS =
  SERVER + "/api/v1/visual-perception/task/details";

export const FETCH_VISUAL_PRODUCTION_TASK_DETAILS =
  SERVER + "/api/v1/visual-production/task/details";

export const FETCH_VISUAL_RECEPTION_TASK_DETAILS =
  SERVER + "/api/v1/visual-reception/task/details";

export const FETCH_ALL_VISUAL_PERCEPTION_TASKS =
  SERVER + "/api/v1/visual-perception/list";

// reception
export const VISUAL_RECEPTION_CREATE = SERVER + "/api/v1/visual-reception/new";
export const VISUAL_RECEPTION_EDIT = SERVER + "/api/v1/visual-reception/edit";
export const VISUAL_RECEPTION_DELETE =
  SERVER + "/api/v1/visual-reception/delete";
export const VISUAL_RECEPTION_TASKS_URL =
  SERVER + "/api/v1/visual-reception/tasks";
export const FETCH_ALL_VISUAL_RECEPTION_TASKS =
  SERVER + "/api/v1/visual-reception/list";

// production
export const VISUAL_PRODUCTION_CREATE =
  SERVER + "/api/v1/visual-production/new";
export const VISUAL_PRODUCTION_EDIT = SERVER + "/api/v1/visual-production/edit";
export const VISUAL_PRODUCTION_DELETE =
  SERVER + "/api/v1/visual-production/delete";
export const VISUAL_PRODUCTION_TASKS_URL =
  SERVER + "/api/v1/visual-production/tasks";

export const FETCH_ALL_VISUAL_PRODUCTION_TASKS =
  SERVER + "/api/v1/visual-production/list";

// test
export const TEST_CREATE = SERVER + "/api/v1/test/create";
export const FETCH_ALL_TESTS = SERVER + "/api/v1/test/list";
export const FETCH_TEST_DETAILS = SERVER + "/api/v1/test/details";
export const FETCH_TESTS_STATISTICS = SERVER + "/api/v1/test/statistics";
