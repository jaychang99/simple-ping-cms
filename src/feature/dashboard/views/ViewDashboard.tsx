import styled from '@emotion/styled';
import ServiceMetric from 'feature/dashboard/components/ServiceMetric';
import useGetServiceWithLogs from 'feature/dashboard/hooks/useGetServiceWithLogs';

interface Props {}

const ViewDashboard = ({}: Props) => {
  const { data } = useGetServiceWithLogs({});

  return (
    <EmotionWrapper>
      {data?.map((item) => (
        <ServiceMetric key={item.uuid} {...item} />
      ))}
    </EmotionWrapper>
  );
};

export default ViewDashboard;

const EmotionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
`;
