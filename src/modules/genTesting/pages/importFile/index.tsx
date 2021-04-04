import { Breadcrumb, Button, Form, Upload } from 'antd';
import { Link } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';
import './index.scss';

export const ImportFile = () => {
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <Link to={'/'}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={'/'}>Import file</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Form>
        <Form.Item
          name='upload'
          label='Upload'
          valuePropName='fileList'
        >
          <Upload
            onChange={() => {}}
            beforeUpload={() => false}
            name='file'
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>,
        </Form.Item>
      </Form>
    </>
  );
};
