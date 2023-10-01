import { TableProps, Tag } from 'antd';
import ColumnItemAdminBadge from 'feature/user/user.list/components/columnItem/ColumnItemAdminBadge';
import ColumnItemAdminToggle from 'feature/user/user.list/components/columnItem/ColumnItemAdminToggle';
import { KeyedMutator } from 'swr';
import { User } from 'types/api/user';

type TColumnUserList = {
  mutate: KeyedMutator<User[]>;
};

export const ColumnUserList = ({ mutate }: TColumnUserList) => {
  const columns: TableProps<User>['columns'] = [
    {
      key: 'name',
      title: '이름',
      width: 120,
      render: (value, record) => {
        return (
          <span>
            {record.lastName} {record.firstName}
          </span>
        );
      },
    },
    {
      key: 'email',
      title: '이메일',
      dataIndex: 'email',
      width: 120,
    },
    {
      key: 'isAdmin',
      title: '관리자 여부',
      dataIndex: 'isAdmin',
      width: 120,
      render: (value) => {
        return <ColumnItemAdminBadge isAdmin={value} />;
      },
    },
    {
      key: 'adminToggle',
      title: '관리자 전환',
      dataIndex: 'adminToggle',
      width: 120,
      render: (value, record) => {
        return (
          <ColumnItemAdminToggle
            mutate={mutate}
            userUuid={record.uuid}
            isAdminCurrent={record.isAdmin}
          />
        );
      },
    },
  ];

  return columns;
};
