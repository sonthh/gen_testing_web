import { Breadcrumb, Button, Col, Row, Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as usersAction from './action';

export const UserList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.userList.data);
  const isLoading = useSelector((state: any) => state.userList.isLoading);

  useEffect(() => {
    onInit();
  }, []);

  const onInit = () => {
    dispatch(usersAction.findManyUsers({}));
  }

  const columns = [
    {
      title: 'Tên bệnh nhân',
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
          <Link to={'/'}>Trang chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={'/'}>Người dùng</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col>
          <Link to='/admin/users/create'>
            <Button type='primary'>Thêm nguời dùng</Button>
          </Link>
        </Col>
      </Row>
      <Table loading={isLoading} columns={columns} dataSource={data} />
    </>
  );
};