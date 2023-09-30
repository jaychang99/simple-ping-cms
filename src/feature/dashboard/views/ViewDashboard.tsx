import styled from '@emotion/styled';
import { Button, DatePicker, Form } from 'antd';
import dayjs from 'dayjs';
import ServiceMetric from 'feature/dashboard/components/ServiceMetric';
import useGetServiceWithLogs from 'feature/dashboard/hooks/useGetServiceWithLogs';
import { useState } from 'react';

interface Props {}

type TFormValues = {
  dateRange: [dayjs.Dayjs, dayjs.Dayjs];
};

const ViewDashboard = ({}: Props) => {
  const [searchParams, setSearchParams] = useState({
    startDate: dayjs().subtract(1, 'day'),
    endDate: dayjs(),
  });
  const { data } = useGetServiceWithLogs({
    startDate: searchParams.startDate.format('YYYY-MM-DD'),
    endDate: searchParams.endDate.format('YYYY-MM-DD'),
    shouldFetch: true,
  });

  const handleFinish = (values: TFormValues) => {
    const [startDate, endDate] = values.dateRange;

    setSearchParams((searchParams) => {
      return {
        ...searchParams,
        startDate,
        endDate,
      };
    });
  };

  return (
    <EmotionWrapper>
      <h3>서비스 지표</h3>
      <Form
        layout="inline"
        onFinish={handleFinish}
        initialValues={{
          dateRange: [searchParams.startDate, searchParams.endDate],
        }}
      >
        <div className="search-form-wrapper">
          <Form.Item
            name="dateRange"
            rules={[
              {
                required: true,
                message: '날짜를 입력해주세요',
              },
            ]}
          >
            <DatePicker.RangePicker />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            조회
          </Button>
        </div>
      </Form>
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

  .search-form-wrapper {
    display: flex;
    margin-bottom: 16px;
    align-items: flex-start;
  }
`;
