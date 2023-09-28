import styled from '@emotion/styled';
import useGetMe from 'hooks/useGetMe';

interface Props {}

const UserProfile = ({}: Props) => {
  const { data } = useGetMe({});

  if (!data) return null;

  return (
    <EmotionWrapper>
      <p className="name">
        <span>{data.firstName}</span>&nbsp;
        <span>{data.lastName}</span>
      </p>
      <p
        className="email"
        style={{ color: 'rgba(0, 0, 0, 0.45)', fontSize: '12px' }}
      >
        {data.email}
      </p>
    </EmotionWrapper>
  );
};

export default UserProfile;

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .name {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.gray400};
  }

  .email {
    font-size: '12px';
    color: 'rgba(0, 0, 0, 0.45)';
  }
`;
