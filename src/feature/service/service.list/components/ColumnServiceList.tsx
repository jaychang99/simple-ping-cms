import { TableProps, Tag } from 'antd';
import ColumnItemAdminToggle from 'feature/user/user.list/components/columnItem/ColumnItemAdminToggle';
import { KeyedMutator } from 'swr';
import { Service } from 'types/api/service';

type TColumnServiceList = {
  mutate: KeyedMutator<Service[]>;
};

export const ColumnServiceList = ({ mutate }: TColumnServiceList) => {
  const columns: TableProps<Service>['columns'] = [
    {
      key: 'name',
      title: '이름',
      dataIndex: 'name',
      width: 120,
    },
    {
      key: 'url',
      title: 'URL',
      dataIndex: 'url',
      width: 120,
      render: (url: string) => {
        return (
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        );
      },
    },
  ];

  return columns;
};
