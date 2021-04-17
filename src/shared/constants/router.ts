import { GenTestingInput } from '../../modules/genTestingInput';
import { GenTestingList } from '../../modules/genTestingList';
import { UserCreate } from '../../modules/usersCreate';
import { UserList } from '../../modules/usersList';
import { UserUpdate } from '../../modules/usersUpdate';

export const routes = [
  {
    path: '/admin/users',
    component: UserList,
    exact: true,
  },
  {
    path: '/admin/users/create',
    component: UserCreate,
    exact: true,
  },
  {
    path: '/admin/users/:id/update',
    component: UserUpdate,
    exact: true,
  },
  {
    path: '/admin/gen_testing/input',
    component: GenTestingInput,
    exact: true,
  },
  {
    path: '/admin/gen_testing',
    component: GenTestingList,
    exact: true,
  },
];
