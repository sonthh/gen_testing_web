import { combineReducers } from 'redux';
import { userListReducer } from '../modules/usersList/reducer';
import { genTestingInputReducer } from '../modules/genTestingInput/reducer';
import { loginReducer } from '../modules/login/reducer';
import { userCreateReducer } from '../modules/usersCreate/reducer';
import { userUpdateReducer } from '../modules/usersUpdate/reducer';
import { genTestingListReducer } from '../modules/genTestingList/reducer';

export const rootReducer = combineReducers({
  userList: userListReducer,
  genTestingInput: genTestingInputReducer,
  login: loginReducer,
  userCreate: userCreateReducer,
  userUpdate: userUpdateReducer,
  genTestingList: genTestingListReducer,
});
