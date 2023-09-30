import styled from '@emotion/styled';
import { Table } from 'antd';
import PageSubTitle from 'components/typography/PageSubTitle';
import useGetService from 'feature/service/hooks/useGetService';
import { ColumnServiceList } from 'feature/service/service.list/components/ColumnServiceList';

interface Props {}

const ViewServiceList = ({}: Props) => {
  const { data, mutate } = useGetService({});

  return (
    <EmotionWrapper>
      <PageSubTitle>관리 서비스 목록</PageSubTitle>
      <Table dataSource={data} columns={ColumnServiceList({ mutate })} />
    </EmotionWrapper>
  );
};

export default ViewServiceList;

const EmotionWrapper = styled.div``;
