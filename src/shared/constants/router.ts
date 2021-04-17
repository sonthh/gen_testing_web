import { GenTestingCreate } from '../../modules/genTesting';
import { GenTestingInput } from '../../modules/genTestingInput';
import { GenTestingList } from '../../modules/genTestingList';
import { MyTestingResults } from '../../modules/myTestingResults';
import { UserCreate } from '../../modules/usersCreate';
import { UserList } from '../../modules/usersList';
import { UserUpdate } from '../../modules/usersUpdate';

export const routes = [
  {
    path: '/users',
    component: UserList,
    exact: true,
  },
  {
    path: '/users/create',
    component: UserCreate,
    exact: true,
  },
  {
    path: '/users/:id/update',
    component: UserUpdate,
    exact: true,
  },
  {
    path: '/gen_testing/input',
    component: GenTestingInput,
    exact: true,
  },
  {
    path: '/gen_testing_results',
    component: GenTestingList,
    exact: true,
  },
  {
    path: '/my_testing_results',
    component: MyTestingResults,
    exact: true,
  },
  {
    path: '/gen_testing/create',
    component: GenTestingCreate,
    exact: true,
  },
];
