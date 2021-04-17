import { FIND_MANY_GEN_TESTINGS_FAILURE, FIND_MANY_GEN_TESTINGS_REQUEST, FIND_MANY_GEN_TESTINGS_SUCCESS } from './actionTypes';

const initialState = {
  isLoading: false,
  data: []
}

export const genTestingReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case FIND_MANY_GEN_TESTINGS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case FIND_MANY_GEN_TESTINGS_SUCCESS: {      
      return {
        ...state,
        data: payload.data,
        isLoading: false
      }
    }
    case FIND_MANY_GEN_TESTINGS_FAILURE: {
      return {
        ...state,
        isLoading: false
      }
    }
    default:
      return state;
  }
}
