import styled from '@emotion/styled';
import { Popconfirm, Switch, message } from 'antd';
import { useUpdateUserAdmin } from 'feature/user/user.list/hooks/useUpdateUserAdmin';
import { KeyedMutator } from 'swr';
import { User } from 'types/api/user';

interface Props {
  mutate: KeyedMutator<User[]>;
  userUuid: string;
  isAdminCurrent: boolean;
}

const ColumnItemAdminToggle = ({ userUuid, isAdminCurrent, mutate }: Props) => {
  const { trigger } = useUpdateUserAdmin();
  const title = isAdminCurrent
    ? '관리자 권한을 해제하시겠습니까?'
    : '관리자로 전환하시겠습니까?';

  const handleConfirmAdmin = async () => {
    try {
      await trigger({
        uuid: userUuid,
        isAdmin: !isAdminCurrent,
      });
      mutate();
    } catch {
      message.error('관리자 권한 변경에 실패했습니다.');
    }
  };

  return (
    <EmotionWrapper>
      <Popconfirm
        title={title}
        okButtonProps={{
          danger: true,
        }}
        okText={isAdminCurrent ? '관리자 권한 해제' : '관리자로 전환'}
        cancelText="취소"
        onConfirm={handleConfirmAdmin}
      >
        <Switch checked={isAdminCurrent} />
      </Popconfirm>
    </EmotionWrapper>
  );
};

export default ColumnItemAdminToggle;

const EmotionWrapper = styled.div``;
