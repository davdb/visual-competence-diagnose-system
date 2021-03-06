import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import user from "./user";
import test from "./test";
import testcases from "./testcases";

export default combineReducers({
  auth,
  user,
  message,
  test,
  testcases,
});
