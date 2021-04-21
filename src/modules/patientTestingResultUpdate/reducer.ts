import { PATIENT_TESTING_RESULT_UPDATE_FAILURE, PATIENT_TESTING_RESULT_UPDATE_REQUEST, PATIENT_TESTING_RESULT_UPDATE_SUCCESS} from './actionTypes';

const initialState = {
  isLoading: false,
  data: {},
}

export const patientTestingResultUpdate = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case PATIENT_TESTING_RESULT_UPDATE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case PATIENT_TESTING_RESULT_UPDATE_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        isLoading: false
      }
    }
    case PATIENT_TESTING_RESULT_UPDATE_FAILURE: {
      return {
        ...state,
        isLoading: false
      }
    }
    default:
      return state;
  }
}
