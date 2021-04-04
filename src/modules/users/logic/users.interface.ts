
export interface UsersState {
  isLoading: boolean;
  users: any[];
}

export interface FindManyUsers {
  username?: string;
  name?: string;
}

export interface User {
  id: number;
  username: string;
  name: string;
}
