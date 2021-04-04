import { ImportFile } from "../../modules/genTesting/pages/importFile";
import { UserList } from "../../modules/users/pages/userList";

export const routes = [
  {
    path: '/users',
    component: UserList,
    exact: true,
  },
  {
    path: '/import_file',
    component: ImportFile,
    exact: true,
  }
];
