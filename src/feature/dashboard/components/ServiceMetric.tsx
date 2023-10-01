import styled from '@emotion/styled';
import { Statistic } from 'antd';
import MediaMobileOnly from 'components/mediaQuery/MediaMobileOnly';
import MediaNoneMobileOnly from 'components/mediaQuery/MediaNoneMobileOnly';
import ScrollArea from 'components/scrollArea/ScrollArea';
import { useWindowSize } from 'hooks/useWindowSize';
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
  const { width } = useWindowSize();

  return (
    <EmotionWrapper>
      <Statistic title={url} value={name} />
      <MediaMobileOnly>
        <div className="mobile-full-width">
          <ScrollArea options={{ x: width, y: 450 }}>
            <div className="mobile-chart-scroller">
              <LogChart logs={logs} />
            </div>
          </ScrollArea>
        </div>
      </MediaMobileOnly>
      <MediaNoneMobileOnly>
        <LogChart logs={logs} />
      </MediaNoneMobileOnly>
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

  .mobile-full-width {
    margin-left: -40px;
    margin-right: -40px;
    background-color: #fff;
  }

  .mobile-chart-scroller {
    width: 900px;
  }
`;
