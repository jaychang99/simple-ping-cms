import styled from '@emotion/styled';
import { processEnv } from 'constants/processEnv';
import Image from 'next/image';

export const ViewLogin = () => {
  const loginUrl = processEnv.NEXT_PUBLIC_API_ENDPOINT + '/auth/google';

  return (
    <EmotionWrapper>
      <h1>SCG Status Page CMS</h1>
      <h2>SCG status Page 를 위한 CMS 입니다.</h2>
      <a href={loginUrl}>
        <img
          src="/images/buttons/btn_google_signin_light_normal_web@2x.png"
          width={191}
          height={46}
          alt="구글 로그인"
        />
      </a>
    </EmotionWrapper>
  );
};

const EmotionWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;

  h1 {
    font-size: 32px;
    font-weight: 700;
  }

  h2 {
    font-weight: 400;
    margin-top: 16px;
  }

  a {
    margin-top: 32px;
  }
`;
