import { PageHeader } from 'components/pageHeader/PageHeader';
import ViewUserList from 'feature/user/user.list/views/ViewUserList';

function UsersPage() {
  return (
    <>
      <PageHeader
        title="CMS 유저 관리"
        description="CMS 유저를 관리할 수 있습니다. (권한 부여 및 삭제)"
      />
      <ViewUserList />
    </>
  );
}

export default UsersPage;
