import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as usersAction from '../../logic/users.action';
import './index.scss';

export const UserList = (props: any) => {
  const dispatch = useDispatch();
  const users: any[] = useSelector((state: any) => state.users.users);

  useEffect(() => {    
    const findManyUsers = () => {
      dispatch(usersAction.findManyUsers({}));
    }
    findManyUsers();
  }, [dispatch]);

  return (
    <div>
      {users.map((e, index) => (<li key={index}>{e.username}</li>))}
    </div>
  );
};