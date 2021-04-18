import { TestingList } from '../../modules/testingList';
import { GenTestingInput } from '../../modules/genTestingInput';
import { GenTestingList } from '../../modules/genTestingList';
import { MyTestingResults } from '../../modules/myTestingResults';
import { UserCreate } from '../../modules/usersCreate';
import { UserList } from '../../modules/usersList';
import { UserUpdate } from '../../modules/usersUpdate';
import { GenTestingCreate } from '../../modules/testingCreate'

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
    path: '/gen_testing/:id/results/input',
    component: GenTestingInput,
    exact: true,
  },
  {
    path: '/gen_testing/:id/results',
    component: GenTestingList,
    exact: true,
  },
  {
    path: '/gen_testing/:testingId/results/:id',
    component: MyTestingResults,
    exact: true,
  },
  {
    path: '/gen_testing/create',
    component: GenTestingCreate,
    exact: true,
  },
  {
    path: '/gen_testing',
    component: TestingList,
    exact: true,
  }
];
