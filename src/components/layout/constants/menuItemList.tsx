import { MenuProps } from 'antd';
import Link from 'next/link';
import {
  ApartmentOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const MENU_ITEM_LIST: MenuProps['items'] = [
  {
    key: 'dashboard',
    icon: <HomeOutlined />,
    title: 'Dashboard',
    label: <Link href="/">대시보드</Link>,
  },
  {
    key: 'service',
    icon: <ApartmentOutlined />,
    title: 'Service',
    label: '서비스 관리',
    children: [
      {
        key: 'service-list',
        label: <Link href="/services">서비스 목록</Link>,
      },
      {
        key: 'service-create',
        label: <Link href="/services/create">서비스 생성</Link>,
      },
    ],
  },
  {
    key: 'user',
    icon: <UserOutlined />,
    title: 'User',
    label: <Link href="/users">유저 관리</Link>,
  },
];
