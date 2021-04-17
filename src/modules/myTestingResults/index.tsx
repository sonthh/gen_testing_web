import { Breadcrumb, Form, Input, Button, Row, Col } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { findMyTestingResults } from './action';

export const MyTestingResults = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector((state: any) => state.myTestingResults.data);
  const isLoading = useSelector((state: any) => state.myTestingResults.isLoading);

  useEffect(() => {
    onInit();
  }, []);

  const onInit = () => {
    dispatch(findMyTestingResults({}));
  }

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Xem kết quả của tôi</Breadcrumb.Item>
      </Breadcrumb>
      <Row justify='center' className='myTestingResults'>
        <Col span={18}>
          <Row>
            <Col span={4}>Tên xét nghiệm</Col>
            <Col span={20}>Xét nghiệm 1</Col>
          </Row>
          <Row>
            <Col span={4}>Kết quả</Col>
            <Col span={20}>Giá trị</Col>
          </Row>
          <Row>
            <Col span={4}>Tên</Col>
            <Col span={20}>Giá trị</Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
