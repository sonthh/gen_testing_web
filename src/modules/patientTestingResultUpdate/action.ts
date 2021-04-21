import { PATIENT_TESTING_RESULT_UPDATE_FAILURE, PATIENT_TESTING_RESULT_UPDATE_REQUEST, PATIENT_TESTING_RESULT_UPDATE_SUCCESS} from './actionTypes';
import axios from '../../shared/axios/axios.service';
import { apiUrl } from '../config/config.service';
import { checkError } from '../../shared/helpers/checkError';
import { notification } from 'antd';

export const patientTestingResultUpdateAction = (payload: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: PATIENT_TESTING_RESULT_UPDATE_REQUEST,
    });
    try {
      const { data } = await axios
        .post(`${apiUrl}/testing_results/update`, payload.model);
      dispatch({
        type: PATIENT_TESTING_RESULT_UPDATE_SUCCESS,
        payload: { data }
      });
      payload.history.push(`/patients/${payload.model.patient}/detail`);
    } catch (error) {
      dispatch({
        type: PATIENT_TESTING_RESULT_UPDATE_FAILURE,
        payload: { error }
      })

      const description = checkError(error);

      notification.open({
        message: 'Thông báo',
        description,
      });
    }
  }
}