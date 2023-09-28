import styled from '@emotion/styled';
import { Log } from 'types/api/log';
import { Line } from '@ant-design/plots';
import { generateChartData } from 'feature/dashboard/functions/generateChartData';

interface Props {
  logs: Log[];
}

const LogChart = ({ logs }: Props) => {
  const chartData = generateChartData(logs);

  const config = {
    data: chartData,
    // padding: 'auto',
    xField: 'date',
    yField: 'responseTime',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };

  console.log('chartData', chartData);

  return <Line {...config} />;
};

export default LogChart;

const EmotionWrapper = styled.div``;
