import styled from '@emotion/styled';

type Props = {
  title: string;
  description: string;
};

export const PageHeader = ({ title, description }: Props) => {
  return (
    <EmotionWrapper>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </EmotionWrapper>
  );
};

const EmotionWrapper = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 700;
  }

  h2 {
    margin-top: 8px;
    font-weight: 400;
    margin-top: 16px;
    color: #999;
  }
`;
