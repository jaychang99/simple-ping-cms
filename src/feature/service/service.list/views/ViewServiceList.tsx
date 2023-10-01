import styled from '@emotion/styled';
import { Table } from 'antd';
import PageSubTitle from 'components/typography/PageSubTitle';
import useGetService from 'feature/service/hooks/useGetService';
import { ColumnServiceList } from 'feature/service/service.list/components/ColumnServiceList';
import ServiceItemMobile from 'feature/service/service.list/components/ServiceItemMobile';

interface Props {}

const ViewServiceList = ({}: Props) => {
  const { data, mutate } = useGetService({});

  return (
    <EmotionWrapper>
      <PageSubTitle>관리 서비스 목록</PageSubTitle>
      <div className="pc-screen">
        <Table dataSource={data} columns={ColumnServiceList({ mutate })} />
      </div>
      <div className="mobile-screen">
        {data?.map((service) => {
          return (
            <ServiceItemMobile
              key={service.uuid}
              name={service.name}
              url={service.url}
            />
          );
        })}
      </div>
    </EmotionWrapper>
  );
};

export default ViewServiceList;

const EmotionWrapper = styled.div`
  ${({ theme }) => theme.device.mobile} {
    .pc-screen {
      display: none;
    }
  }

  .mobile-screen {
    display: none;
    ${({ theme }) => theme.device.mobile} {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
`;
