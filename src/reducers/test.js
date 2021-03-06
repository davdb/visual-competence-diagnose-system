import {
  FETCH_VISUAL_PERCEPTION_TASKS_SUCCESS,
  FETCH_VISUAL_PERCEPTION_TASKS_FAIL,
  FETCH_VISUAL_RECEPTION_TASKS_SUCCESS,
  FETCH_VISUAL_RECEPTION_TASKS_FAIL,
  FETCH_VISUAL_PRODUCTION_TASKS_SUCCESS,
  FETCH_VISUAL_PRODUCTION_TASKS_FAIL,
  FETCH_ALL_TESTS_SUCCESS,
  FETCH_ALL_TESTS_FAIL,
  CREATE_TEST_SUCCESS,
  CREATE_TEST_FAIL,
} from "../actions/types";

const initialState = { tasks: [], result: 0, tests: [] };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_VISUAL_PERCEPTION_TASKS_SUCCESS:
      return { ...state, tasks: state.tasks.concat(JSON.parse(payload.tasks)) };
    case FETCH_VISUAL_PERCEPTION_TASKS_FAIL:
      return state;
    case FETCH_VISUAL_RECEPTION_TASKS_SUCCESS:
      return { ...state, tasks: state.tasks.concat(JSON.parse(payload.tasks)) };
    case FETCH_VISUAL_RECEPTION_TASKS_FAIL:
      return state;
    case FETCH_VISUAL_PRODUCTION_TASKS_SUCCESS:
      return { ...state, tasks: state.tasks.concat(JSON.parse(payload.tasks)) };
    case FETCH_VISUAL_PRODUCTION_TASKS_FAIL:
      return state;
    case CREATE_TEST_SUCCESS:
      return { ...state, result: payload.result };
    case CREATE_TEST_FAIL:
      return state;
    case FETCH_ALL_TESTS_SUCCESS:
      return { ...state, tests: JSON.parse(payload.tests) };
    case FETCH_ALL_TESTS_FAIL:
      return state;
    default:
      return state;
  }
}
