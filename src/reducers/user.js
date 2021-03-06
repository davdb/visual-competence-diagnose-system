import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  DELETE_USER_ACCOUNT_SUCCESS,
  DELETE_USER_ACCOUNT_FAIL,
} from "../actions/types";

const initialState = { users: [] };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USERS_SUCCESS:
      return { ...state, users: JSON.parse(payload.users) };
    case FETCH_USERS_FAIL:
      return [];
    case DELETE_USER_ACCOUNT_SUCCESS:
      return {
        ...state,
        users: state.users.filter(
          (item, index) => item.id !== action.payload.deleteUserId
        ),
      };
    case DELETE_USER_ACCOUNT_FAIL:
      return state;
    default:
      return state;
  }
}
