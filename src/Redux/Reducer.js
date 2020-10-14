import { combineReducers } from "redux";
import UserReducer from "./User/Reducer";
import TodoReducer from "./Todo/Reducer";

export default combineReducers({
  UserReducer,
  TodoReducer,
});
