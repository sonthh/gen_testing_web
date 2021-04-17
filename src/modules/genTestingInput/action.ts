import { GEN_TESTING_INPUT_FAILURE, GEN_TESTING_INPUT_REQUEST, GEN_TESTING_INPUT_SUCCESS } from './actionTypes';
import axios from '../../shared/axios/axios.service';
import { apiUrl } from '../config/config.service';

export const genTestingInput = (payload: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: GEN_TESTING_INPUT_REQUEST,
    });
    try {
      const { data } = await axios
        .post(`${apiUrl}/test_results`, payload.model);
      dispatch({
        type: GEN_TESTING_INPUT_SUCCESS,
        payload: { data }
      });
      payload.history.push('/admin/users');
    } catch (error) {
      dispatch({
        type: GEN_TESTING_INPUT_FAILURE,
        payload: { error }
      })
    }
  }
}