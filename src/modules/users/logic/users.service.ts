import axios from '../../../shared/services/axios/axios.service';
// import * as config from '../../config/config.service';
import { FindManyUsers, User } from './users.interface';

export const findManyUsers = async (params: FindManyUsers): Promise<User[]> => {
  try {
    const { data } = await axios
      .get('https://jsonplaceholder.typicode.com/users', {
        params,
      });

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}