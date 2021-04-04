import { Breadcrumb, Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../../../shared/types/schared.interface';
import * as usersAction from '../../logic/users.action';
import './index.scss';

export const UserList = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state: AppState) => ({
    users: state.users.users,
    isLoading: state.users.isLoading
  }));

  useEffect(() => {
    const findManyUsers = () => {
      dispatch(usersAction.findManyUsers({}));
    }
    findManyUsers();
  }, [dispatch]);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
  ];

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <Link to={'/'}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={'/'}>Users</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Table loading={isLoading} columns={columns} dataSource={users} />
    </>
  );
};