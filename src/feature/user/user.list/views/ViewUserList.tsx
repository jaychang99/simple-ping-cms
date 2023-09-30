import styled from '@emotion/styled';
import { Table } from 'antd';
import PageSubTitle from 'components/typography/PageSubTitle';
import useGetUsers from 'feature/user/hooks/useGetUsers';
import { ColumnUserList } from 'feature/user/user.list/components/ColumnUserList';

interface Props {}

const ViewUserList = ({}: Props) => {
  const { data, mutate } = useGetUsers({
    shouldFetch: true,
  });

  return (
    <>
      <PageSubTitle>유저 목록</PageSubTitle>
      <Table columns={ColumnUserList({ mutate })} dataSource={data} />
    </>
  );
};

export default ViewUserList;
