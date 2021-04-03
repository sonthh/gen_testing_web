import { combineReducers } from "redux";
import { usersReducer } from "../modules/users/logic/users.reducer";

export const rootReducer = combineReducers({
  users: usersReducer
});
