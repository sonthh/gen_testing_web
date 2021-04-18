import { CREATE_GEN_TESTING_FAILURE, CREATE_GEN_TESTING_REQUEST, CREATE_GEN_TESTING_SUCCESS } from './actionTypes';
import axios from '../../shared/axios/axios.service';
import { apiUrl } from '../config/config.service';
import { notification } from 'antd';

export const createTestingAction = (payload: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: CREATE_GEN_TESTING_REQUEST,
    });
    try {
      const { data } = await axios
        .post(`${apiUrl}/testings`, payload.model);
      dispatch({
        type: CREATE_GEN_TESTING_SUCCESS,
        payload: { data }
      })
      payload.history.push('/gen_testing');
    } catch (error) {
      dispatch({
        type: CREATE_GEN_TESTING_FAILURE,
        payload: { error }
      });
      notification.open({
        message: 'Thông báo',
        description: 'Vui lòng nhập dữ liệu hợp lệ',
      });
    }
  }
}