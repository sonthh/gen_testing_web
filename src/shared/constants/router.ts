import { GenTestingInput } from '../../modules/genTestingInput';
import { UserCreate } from '../../modules/usersCreate';
import { UserList } from '../../modules/usersList';

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
    path: '/admin/gen_testing/input',
    component: GenTestingInput,
    exact: true,
  }
];
