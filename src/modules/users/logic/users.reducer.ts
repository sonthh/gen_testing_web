import { ReduxAction } from "../../../shared/types/schared.interface";
import { FIND_MANY_USERS_SUCCESS } from "./users.type";

const initialState = {
  isLoading: false,
  users: []
}

export const usersReducer = (state = initialState, { type, payload }: ReduxAction) => {
  switch (type) {
    case FIND_MANY_USERS_SUCCESS: {
      return {
        ...state,
        users: payload.data
      }
    }
    default:
      return state;
  }
}
