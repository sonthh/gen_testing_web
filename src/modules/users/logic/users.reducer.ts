import { ReduxAction } from "../../../shared/types/schared.interface";
import { UsersState } from "./users.interface";
import { FIND_MANY_USERS_FAILURE, FIND_MANY_USERS_REQUEST, FIND_MANY_USERS_SUCCESS } from "./users.type";

const initialState: UsersState = {
  isLoading: false,
  users: []
}

export const usersReducer = (state = initialState, { type, payload }: ReduxAction): UsersState => {
  switch (type) {
    case FIND_MANY_USERS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case FIND_MANY_USERS_SUCCESS: {
      return {
        ...state,
        users: payload.data,
        isLoading: false
      }
    }
    case FIND_MANY_USERS_FAILURE: {
      return {
        ...state,
        isLoading: false
      }
    }
    default:
      return state;
  }
}
