import styled from '@emotion/styled';
import { Statistic } from 'antd';
import dynamic from 'next/dynamic';
import { ServiceWithLogs } from 'types/api/service';

interface Props extends ServiceWithLogs {}

// dymically import LogChart
const LogChart = dynamic(
  () => import('feature/dashboard/components/LogChart'),
  {
    ssr: false,
  },
);

const ServiceMetric = ({ name, uuid, logs, url }: Props) => {
  return (
    <EmotionWrapper>
      <Statistic title={url} value={name} />
      <LogChart logs={logs} />
    </EmotionWrapper>
  );
};

export default ServiceMetric;

const EmotionWrapper = styled.div`
  display: flex;

  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border-radius: 8px;

  min-height: 300px;

  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadow.default};

  ${({ theme }) => theme.device.mobile} {
    padding: 16px 0;
    background-color: transparent;
    box-shadow: none;
  }
`;
