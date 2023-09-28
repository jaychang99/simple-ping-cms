import dayjs from 'dayjs';
import { TChartData } from 'feature/dashboard/types/TChartData';
import { Log } from 'types/api/log';

export const generateChartData = (logs: Log[]) => {
  const chartData = [] as TChartData[];

  logs.forEach((log) => {
    const { date, responseTime } = log;

    const formattedObj = {
      date: dayjs(date).format('YYYY-MM-DD HH:mm:ss'),
      responseTime: responseTime ?? 0, // responseTime이 null 이면 0 으로 처리
    };

    chartData.push(formattedObj);
  });

  return chartData;
};
