import { MenuProps } from 'antd';
import Link from 'next/link';
import { HomeOutlined } from '@ant-design/icons';

export const MENU_ITEM_LIST: MenuProps['items'] = [
  {
    key: 'dashboard',
    icon: <HomeOutlined />,
    title: 'Dashboard',
    label: <Link href="/">대시보드</Link>,
  },
];
