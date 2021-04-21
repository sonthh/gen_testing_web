import { Breadcrumb, Form, Input, Button, Row, Col } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { findMyTestingResults } from './action';
import { Descriptions }  from 'antd';

export const MyTestingResults = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const data = useSelector((state: any) => state.myTestingResults.data);
  // const isLoading = useSelector((state: any) => state.myTestingResults.isLoading);
  const params: any = useParams();

  useEffect(() => {
    onInit();
  }, []);

  const onInit = () => {
    dispatch(findMyTestingResults(params.id));
  }

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <Link to={'/gen_testing'}>Trang chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Kết quả thử xét nghiêm</Breadcrumb.Item>
      </Breadcrumb>
      <Row className='myTestingResults'>
          <Row>
          <Descriptions title={`Kết quả chi tiết: ${data?.testingId?.name}`} bordered>
            <Descriptions.Item label="Tên xét nghiệm">{data.name}</Descriptions.Item>
            <Descriptions.Item label="Tên bệnh nhân" >{data?.testingId?.patient?.fullname}</Descriptions.Item>
            <Descriptions.Item label="Bác sĩ xét tạo nghiệm">{data?.createdBy?.fullname}</Descriptions.Item>
            <Descriptions.Item label="Mô tả" span={3}>{data.description}</Descriptions.Item>
          </Descriptions>
          </Row>

          <Row className="result_detail">
            <Descriptions title="Các gen phân tích" >
            {
              data?.testResult?.gens?.map((result: any) => {
                return (
                  <>
                    <Descriptions.Item label="Tên gen" >{result.name}</Descriptions.Item>
                    <Descriptions.Item label="Kiểu gen">{result.type}</Descriptions.Item>
                    <Descriptions.Item label="Tính chất gen" >{result.property}</Descriptions.Item>
                    <Descriptions.Item label="Ảnh hưởng">{result.affect}</Descriptions.Item>
                    <Descriptions.Item label="Nội dung" >{result.content}</Descriptions.Item>
                  </>
                )
              })
            }
            </Descriptions>
          </Row>

          <Row  className="result_detail" >
            <Descriptions title="Kết quả và ý nghĩa">
            {
              data?.testResult?.results?.map((result: any) => {
                return (
                  <>
                    <Descriptions.Item label="Kết quả" span={3}>{result.result}</Descriptions.Item>
                    <Descriptions.Item label="Ý nghĩa" span={3}>{result.content}</Descriptions.Item>
                  </>
                )
              })
            }
            </Descriptions>
          </Row>

          <Row className="result_detail">
          <Descriptions title="Khuyến nghị cho bạn">
          {
            data?.testResult?.recommends?.map((result: any) => {
              return (
               <>
                <Descriptions.Item label="Tiêu đề" span={3}>{result.recommend}</Descriptions.Item>
                <Descriptions.Item label="Nội dung" span={3}>{result.content}</Descriptions.Item>
               </>
              )
            })
          }
          </Descriptions>
          </Row>
      </Row>
    </>
  );
}
