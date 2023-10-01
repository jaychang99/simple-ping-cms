import styled from '@emotion/styled';
import { Table } from 'antd';
import MediaMobileOnly from 'components/mediaQuery/MediaMobileOnly';
import MediaNoneMobileOnly from 'components/mediaQuery/MediaNoneMobileOnly';
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
      <MediaNoneMobileOnly>
        <Table dataSource={data} columns={ColumnServiceList({ mutate })} />
      </MediaNoneMobileOnly>
      <MediaMobileOnly>
        <div className="mobile-service-list-container">
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
      </MediaMobileOnly>
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

  .mobile-service-list-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
