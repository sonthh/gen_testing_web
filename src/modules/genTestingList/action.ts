import { FIND_MANY_GEN_TESTINGS_FAILURE, FIND_MANY_GEN_TESTINGS_REQUEST, FIND_MANY_GEN_TESTINGS_SUCCESS } from './actionTypes';
import axios from '../../shared/axios/axios.service';
import { apiUrl } from '../config/config.service';

export const findManyGenTestings = (params: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: FIND_MANY_GEN_TESTINGS_REQUEST,
    });
    try {
      const { data } = await axios
        .get(`${apiUrl}/test_results`, {
          params
        });
      console.log(data);
      
      dispatch({
        type: FIND_MANY_GEN_TESTINGS_SUCCESS,
        payload: { data: data.list }
      })
    } catch (error) {
      dispatch({
        type: FIND_MANY_GEN_TESTINGS_FAILURE,
        payload: { error }
      })
    }
  }
}
