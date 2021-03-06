import {
  FETCH_ALL_VISUAL_PERCEPTION_TASKS_SUCCESS,
  FETCH_ALL_VISUAL_PERCEPTION_TASKS_FAIL,
  FETCH_ALL_VISUAL_PRODUCTION_TASKS_SUCCESS,
  FETCH_ALL_VISUAL_PRODUCTION_TASKS_FAIL,
  FETCH_ALL_VISUAL_RECEPTION_TASKS_SUCCESS,
  FETCH_ALL_VISUAL_RECEPTION_TASKS_FAIL,
  DELETE_VISUAL_PERCEPTION_SUCCESS,
  DELETE_VISUAL_PERCEPTION_FAIL,
  DELETE_VISUAL_PRODUCTION_SUCCESS,
  DELETE_VISUAL_PRODUCTION_FAIL,
  DELETE_VISUAL_RECEPTION_SUCCESS,
  DELETE_VISUAL_RECEPTION_FAIL,
} from "../actions/types";

const initialState = { perception: [], production: [], reception: [] };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ALL_VISUAL_PERCEPTION_TASKS_SUCCESS:
      return {
        ...state,
        perception: JSON.parse(payload.tasks),
      };
    case FETCH_ALL_VISUAL_PERCEPTION_TASKS_FAIL:
      return state;
    case FETCH_ALL_VISUAL_PRODUCTION_TASKS_SUCCESS:
      return {
        ...state,
        production: JSON.parse(payload.tasks),
      };
    case FETCH_ALL_VISUAL_PRODUCTION_TASKS_FAIL:
      return state;
    case FETCH_ALL_VISUAL_RECEPTION_TASKS_SUCCESS:
      return {
        ...state,
        reception: JSON.parse(payload.tasks),
      };
    case FETCH_ALL_VISUAL_RECEPTION_TASKS_FAIL:
      return state;

    case DELETE_VISUAL_PERCEPTION_SUCCESS:
      return {
        ...state,
        perception: state.perception.filter(
          (item, index) => item.id !== action.payload.deleteTaskId
        ),
      };
    case DELETE_VISUAL_PERCEPTION_FAIL:
      return state;
    case DELETE_VISUAL_PRODUCTION_SUCCESS:
      return {
        ...state,
        production: state.production.filter(
          (item, index) => item.id !== action.payload.deleteTaskId
        ),
      };
    case DELETE_VISUAL_PRODUCTION_FAIL:
      return state;
    case DELETE_VISUAL_RECEPTION_SUCCESS:
      return {
        ...state,
        reception: state.reception.filter(
          (item, index) => item.id !== action.payload.deleteTaskId
        ),
      };
    case DELETE_VISUAL_RECEPTION_FAIL:
      return state;
    default:
      return state;
  }
}
