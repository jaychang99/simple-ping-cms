import React, { ReactNode } from 'react';
import { Layout, Space } from 'antd';
import UserProfile from 'components/layout/components/UserProfile';
import MenuList from 'components/layout/components/MenuList';

const { Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
  minHeight: '100vh',
  padding: 40,
  backgroundColor: '#eee',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  backgroundColor: '#fff',
};

type Props = {
  children: ReactNode;
};

export const AppLayout: React.FC<Props> = ({ children }) => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout hasSider>
      <div style={{ padding: 32 }}>
        <UserProfile />
        <MenuList />
      </div>
      <Content style={contentStyle}>{children}</Content>
    </Layout>
  </Space>
);
