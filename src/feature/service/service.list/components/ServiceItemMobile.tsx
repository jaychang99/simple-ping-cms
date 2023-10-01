import styled from '@emotion/styled';
import { Statistic } from 'antd';
import { Service } from 'types/api/service';

interface Props {
  name: Service['name'];
  url: Service['url'];
}

const ServiceItemMobile = ({ name, url }: Props) => {
  return (
    <EmotionWrapper>
      <Statistic title={url} value={name} />
    </EmotionWrapper>
  );
};

export default ServiceItemMobile;

const EmotionWrapper = styled.div`
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadow.default};
  padding: 16px;
  border-radius: 8px;
`;
