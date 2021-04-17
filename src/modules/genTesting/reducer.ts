import { CREATE_GEN_TESING_FAILURE, CREATE_GEN_TESING_REQUEST, CREATE_GEN_TESING_SUCCESS } from './actionTypes';

const initialState = {
  isLoading: false,
  data: {}
}

export const genTestingCreateReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case CREATE_GEN_TESING_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case CREATE_GEN_TESING_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        isLoading: false
      }
    }
    case CREATE_GEN_TESING_FAILURE: {
      return {
        ...state,
        isLoading: false
      }
    }
    default:
      return state;
  }
}
