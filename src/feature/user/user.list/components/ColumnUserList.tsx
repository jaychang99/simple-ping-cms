import { TableProps, Tag } from 'antd';
import ColumnItemAdminToggle from 'feature/user/user.list/components/columnItem/ColumnItemAdminToggle';
import { KeyedMutator } from 'swr';
import { User } from 'types/api/user';

type TColumnUserList = {
  mutate: KeyedMutator<User[]>;
};

export const ColumnUserList = ({ mutate }: TColumnUserList) => {
  const columns: TableProps<User>['columns'] = [
    {
      key: 'uuid',
      title: 'UUID',
      dataIndex: 'uuid',
      width: 120,
    },
    {
      key: 'email',
      title: '이메일',
      dataIndex: 'email',
      width: 120,
    },
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
      key: 'isAdmin',
      title: '관리자 여부',
      dataIndex: 'isAdmin',
      width: 120,
      render: (value, record) => {
        if (value) {
          return <Tag color="red">관리자</Tag>;
        }
        return <Tag color="gray">비인가 유저</Tag>;
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
