import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const PageSubTitle = ({ children }: Props) => {
  return <EmotionWrapper>{children}</EmotionWrapper>;
};

export default PageSubTitle;

const EmotionWrapper = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;

  color: ${({ theme }) => theme.color.gray400};
`;
