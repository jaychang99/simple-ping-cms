import styled from '@emotion/styled';
import { Table } from 'antd';
import useGetUsers from 'feature/user/hooks/useGetUsers';
import { ColumnUserList } from 'feature/user/user.list/components/ColumnUserList';

interface Props {}

const ViewUserList = ({}: Props) => {
  const { data, mutate } = useGetUsers({
    shouldFetch: true,
  });

  return (
    <EmotionWrapper>
      <h3>유저 목록</h3>
      <Table columns={ColumnUserList({ mutate })} dataSource={data} />
    </EmotionWrapper>
  );
};

export default ViewUserList;

const EmotionWrapper = styled.div`
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;

    color: ${({ theme }) => theme.color.gray400};
  }
`;
