import { FindManyUsers } from '../types/users.interface';
import { FIND_MANY_USERS_FAILURE, FIND_MANY_USERS_REQUEST, FIND_MANY_USERS_SUCCESS } from './users.type';
import * as usersService from './users.service';

export const findManyUsers = (params: FindManyUsers) => {
  return async (dispatch: any) => {
    dispatch({
      type: FIND_MANY_USERS_REQUEST,
    });

    try {
      const data = await usersService.findManyUsers(params);

      dispatch({
        type: FIND_MANY_USERS_SUCCESS,
        payload: { data }
      })
    } catch (error) {
      dispatch({
        type: FIND_MANY_USERS_FAILURE,
        payload: { error }
      })
    }
  }
}