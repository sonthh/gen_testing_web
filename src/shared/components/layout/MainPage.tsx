import './index.scss';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { menu } from '../../constants/menu';
import { routes } from '../../constants/router';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { Redirect, Switch } from 'react-router';

const { Header, Content, Footer, Sider } = Layout;

const routesComponent = routes.map((e, index) => {
  return (
    <PrivateRoute
      path={e.path}
      component={e.component}
      key={index}
      exact={e.exact}
    />
  );
});

export const MainPage = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  const menuComponent = menu.map((e, index) => (
    <Menu.Item key={index}>{e.text}</Menu.Item>
  ));

  return (
    <Layout className='main-page' style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>{menuComponent}</Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div className='site-layout-background' style={{ padding: 24, marginTop: 16, minHeight: 700 }}>
            <Switch>
              {routesComponent}
              <Redirect from='*' to='/error/404' />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Gen testing ©2021</Footer>
      </Layout>
    </Layout>
  );
}
