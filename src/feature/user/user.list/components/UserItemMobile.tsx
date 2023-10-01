import styled from '@emotion/styled';
import ColumnItemAdminBadge from 'feature/user/user.list/components/columnItem/ColumnItemAdminBadge';
import ColumnItemAdminToggle from 'feature/user/user.list/components/columnItem/ColumnItemAdminToggle';
import { KeyedMutator } from 'swr';
import { User } from 'types/api/user';

interface Props {
  uuid: User['uuid'];
  firstName: User['firstName'];
  lastName: User['lastName'];
  email: User['email'];
  isAdmin: User['isAdmin'];
  mutate: KeyedMutator<User[]>;
}

const UserItemMobile = ({
  uuid,
  firstName,
  lastName,
  email,
  isAdmin,
  mutate,
}: Props) => {
  return (
    <EmotionWrapper>
      <div className="user-basic-info">
        <p className="name">
          <span>{firstName}</span>&nbsp;
          <span>{lastName}</span>
        </p>
        <p className="email">{email}</p>
      </div>
      <div className="content-user-role">
        <ColumnItemAdminBadge isAdmin={isAdmin} />
        <ColumnItemAdminToggle
          isAdminCurrent={isAdmin}
          userUuid={uuid}
          mutate={mutate}
        />
      </div>
    </EmotionWrapper>
  );
};

export default UserItemMobile;

const EmotionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background-color: #fff;

  padding: 16px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.default};

  .user-basic-info {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .name {
      font-size: 16px;
      font-weight: bold;
      color: ${({ theme }) => theme.color.gray400};
    }

    .email {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.45);
    }
  }

  .content-user-role {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-end;

    .ant-tag {
      margin: 0;
    }
  }
`;
