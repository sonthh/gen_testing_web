import { UsersState } from "../../modules/users/logic/users.interface";

export interface ReduxAction {
  type: string;
  payload: any;
}

export interface AppState {
  users: UsersState
}
