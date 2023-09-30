import styled from '@emotion/styled';
import { Spin } from 'antd';

interface Props {}

const CheckingAuth = ({}: Props) => {
  return (
    <EmotionWrapper>
      <div className="content-wrapper">
        <Spin />
        <p>접근 권한을 확인 중입니다...</p>
      </div>
    </EmotionWrapper>
  );
};

export default CheckingAuth;

const EmotionWrapper = styled.div`
  // full screen, center element
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  .content-wrapper {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
`;
