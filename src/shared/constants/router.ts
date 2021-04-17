import { GenTestingInput } from '../../modules/genTestingInput';
import { GenTestingList } from '../../modules/genTestingList';
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
    path: '/gen_testing',
    component: GenTestingList,
    exact: true,
  },
];
