import styled from '@emotion/styled';
import { Statistic } from 'antd';
import { ServiceWithLogs } from 'types/api/service';

interface Props extends ServiceWithLogs {}

const ServiceMetric = ({ name, uuid, logs, url }: Props) => {
  return (
    <EmotionWrapper>
      <Statistic title={name} value={logs[0]?.value} />
    </EmotionWrapper>
  );
};

export default ServiceMetric;

const EmotionWrapper = styled.div`
  padding: 16px;
  border-radius: 8px;

  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadow.default};
`;
