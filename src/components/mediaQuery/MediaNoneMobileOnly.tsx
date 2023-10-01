import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const MediaNoneMobileOnly = ({ children }: Props) => {
  return <EmotionWrapper>{children}</EmotionWrapper>;
};

export default MediaNoneMobileOnly;

const EmotionWrapper = styled.div`
  ${({ theme }) => theme.device.tablet} {
    display: block;
  }
  ${({ theme }) => theme.device.pc} {
    display: block;
  }
  ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;
