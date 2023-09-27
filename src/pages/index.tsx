import { PageHeader } from 'components/pageHeader/PageHeader';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple Ping CMS</title>
      </Head>

      <PageHeader
        title="노출 페이지 관리"
        description="노출되는 페이지를 관리할 수 있습니다. "
      />
    </>
  );
}
