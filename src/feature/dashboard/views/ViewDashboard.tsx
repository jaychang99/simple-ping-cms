import styled from '@emotion/styled';
import ServiceMetric from 'feature/dashboard/components/ServiceMetric';
import useGetServiceWithLogs from 'feature/dashboard/hooks/useGetServiceWithLogs';

interface Props {}

const ViewDashboard = ({}: Props) => {
  const { data } = useGetServiceWithLogs({});

  return (
    <EmotionWrapper>
      <h3>서비스 지표</h3>
      <div className="metric-container">
        {data?.map((item) => (
          <ServiceMetric key={item.uuid} {...item} />
        ))}
      </div>
    </EmotionWrapper>
  );
};

export default ViewDashboard;

const EmotionWrapper = styled.div`
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;

    color: ${({ theme }) => theme.color.gray400};
  }
  .metric-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
  }
`;
