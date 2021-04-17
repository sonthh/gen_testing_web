import { Breadcrumb, Button, Col, Row, Table, Space, Tag, Input } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { findManyGenTestings } from './action';
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment';

const summaryGenTestingRecord = (record: any) => {
  const gens = record?.gens;
  const recommends = record?.recommends;
  const results = record?.results;
  const summary = `Có ${gens?.length || 0} gens, ${recommends?.length || 0} khuyến nghị và ${results.length} kết quả`;
  return (
    <div>{summary}</div>
  );
};

export const GenTestingList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.genTestingList.data);
  const isLoading = useSelector((state: any) => state.genTestingList.isLoading);

  useEffect(() => {
    onInit();
  }, []);

  const onInit = () => {
    dispatch(findManyGenTestings({}));
  }

  const columns = [
    {
      title: 'Tổng quan',
      dataIndex: 'summary',
      key: 'summary',
      render: (text: string, record: any, index: any): any => {
        return summaryGenTestingRecord(record);
      }
    },
    {
      title: 'Người tạo',
      dataIndex: ['createdBy', 'fullname'],
      key: 'createdBy.fullName',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text: string, record: any, index: any): any => {
        return moment(text).format('DD/MM/YYYY');
      }
    },
    {
      title: 'Hành động',
      dataIndex: 'action',
      key: 'action',
      render: (text: string, record: any, index: any): any => {
        return (
          <Link to={`/admin/users/${record._id}/update`}>
            Sửa
          </Link>
        );
      }
    },
  ];

  // const handleFilterRole = (role: string) => {
  //   dispatch(findManyGenTestings({ role }));
  // }

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <Link to={'/'}>Trang chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={'/admin/gen_testing'}>Thử nghiệm gen</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row style={{ marginBottom: 20 }} justify='space-between'>
        <Col span={8}>
          <Link to='/admin/gen_testing/input'>
            <Button icon={<PlusOutlined />} type='primary'>Thêm mới</Button>
          </Link>
        </Col>
      </Row>
      <Table loading={isLoading} columns={columns} dataSource={data} />
    </>
  );
};
