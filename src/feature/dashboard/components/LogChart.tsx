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
    xField: 'date',
    yField: 'responseTime',
    xAxis: {
      tickCount: 5,
    },
  };

  return <Line {...config} />;
};

export default LogChart;
