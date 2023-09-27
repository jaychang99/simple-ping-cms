import { PageHeader } from 'components/pageHeader/PageHeader';
import { ViewServiceCreate } from 'feature/service/service.create/ViewServiceCreate';

function ServicePageCreate() {
  return (
    <>
      <PageHeader
        title="노출 페이지 추가"
        description="노출되는 페이지를 추가할 수 있습니다. "
      />
      <ViewServiceCreate />
    </>
  );
}

export default ServicePageCreate;
