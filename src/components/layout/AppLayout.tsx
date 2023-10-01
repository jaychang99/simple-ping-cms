import React, { ReactNode } from 'react';
import { Layout, Space } from 'antd';
import UserProfile from 'components/layout/components/UserProfile';
import MenuList from 'components/layout/components/MenuList';
import styled from '@emotion/styled';

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  minHeight: '100vh',
  padding: 40,
  backgroundColor: '#eee',
};

type Props = {
  children: ReactNode;
};

export const AppLayout: React.FC<Props> = ({ children }) => (
  <EmotionWrapper>
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout hasSider>
        <div style={{ padding: 32 }} className="sidebar">
          <UserProfile />
          <MenuList />
        </div>
        <Content style={contentStyle}>{children}</Content>
      </Layout>
    </Space>
  </EmotionWrapper>
);

const EmotionWrapper = styled.div`
  .sidebar {
    ${({ theme }) => theme.device.mobile} {
      display: none;
    }
    padding: 32px;
  }
`;
