import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  options: {
    x: number;
    y: number;
  };
}

const ScrollArea = ({ children, options }: Props) => {
  return <EmotionWrapper options={options}>{children}</EmotionWrapper>;
};

export default ScrollArea;

const EmotionWrapper = styled.div<{ options: Props['options'] }>`
  width: ${({ options: { x } }) => x}px;
  height: ${({ options: { y } }) => y}px;
  overflow-x: scroll;
  overflow-y: scroll;
  box-shadow: ${({ theme }) => theme.shadow.default};
  padding: 16px;
`;
