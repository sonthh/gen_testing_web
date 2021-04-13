import { GEN_TESTING_INPUT_FAILURE, GEN_TESTING_INPUT_REQUEST, GEN_TESTING_INPUT_SUCCESS } from './actionTypes';
import axios from '../../shared/axios/axios.service';

export const genTestingInput = (input: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: GEN_TESTING_INPUT_REQUEST,
    });
    try {
      const { data } = await axios
        .post('https://jsonplaceholder.typicode.com/users', { input });
      dispatch({
        type: GEN_TESTING_INPUT_SUCCESS,
        payload: { data }
      });
    } catch (error) {
      dispatch({
        type: GEN_TESTING_INPUT_FAILURE,
        payload: { error }
      })
    }
  }
}