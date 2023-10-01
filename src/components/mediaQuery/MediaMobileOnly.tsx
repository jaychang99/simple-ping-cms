import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const MediaMobileOnly = ({ children }: Props) => {
  return <EmotionWrapper>{children}</EmotionWrapper>;
};

export default MediaMobileOnly;

const EmotionWrapper = styled.div`
  ${({ theme }) => theme.device.tablet} {
    display: none;
  }
  ${({ theme }) => theme.device.pc} {
    display: none;
  }
  ${({ theme }) => theme.device.mobile} {
    display: block;
  }
`;
