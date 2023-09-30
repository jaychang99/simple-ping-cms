import { PageHeader } from 'components/pageHeader/PageHeader';
import ViewServiceList from 'feature/service/service.list/views/ViewServiceList';

function ServicePage() {
  return (
    <>
      <PageHeader
        title="서비스 목록"
        description="SCG 에서 관리하는 서비스 목록을 확인할 수 있습니다. "
      />
      <ViewServiceList />
    </>
  );
}

export default ServicePage;
