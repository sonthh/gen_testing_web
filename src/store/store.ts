import { combineReducers } from 'redux';
import { userListReducer } from '../modules/usersList/reducer';
import { genTestingInputReducer } from '../modules/genTestingInput/reducer';
import { loginReducer } from '../modules/login/reducer';
import { userCreateReducer } from '../modules/usersCreate/reducer';
import { userUpdateReducer } from '../modules/usersUpdate/reducer';
import { genTestingListReducer } from '../modules/genTestingList/reducer';
import { myTestingResultsReducer } from '../modules/myTestingResults/reducer';
import { testingListReducer } from '../modules/testingList/reducer';
import { testingCreateReducer } from '../modules/testingCreate/reducer';
import { genListReducer } from '../modules/gensList/reducer';
import { genCreateReducer } from '../modules/gensCreate/reducer';
import { genUpdateReducer } from '../modules/gensUpdate/reducer';

export const rootReducer = combineReducers({
  userList: userListReducer,
  genTestingInput: genTestingInputReducer,
  login: loginReducer,
  userCreate: userCreateReducer,
  userUpdate: userUpdateReducer,
  genTestingList: genTestingListReducer,
  myTestingResults: myTestingResultsReducer,
  gentTestingCreate: genTestingListReducer,
  testingList: testingListReducer,
  testingCreate: testingCreateReducer,
  genList: genListReducer,
  genCreate: genCreateReducer,
  genUpdate: genUpdateReducer,
});
