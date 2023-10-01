import { Tag } from 'antd';
import { User } from 'types/api/user';

interface Props {
  isAdmin: User['isAdmin'];
}

const ColumnItemAdminBadge = ({ isAdmin }: Props) => {
  if (isAdmin) return <Tag color="red">관리자</Tag>;

  return <Tag color="gray">비인가 유저</Tag>;
};

export default ColumnItemAdminBadge;
