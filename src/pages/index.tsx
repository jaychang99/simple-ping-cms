import { PageHeader } from 'components/pageHeader/PageHeader';
import ViewDashboard from 'feature/dashboard/views/ViewDashboard';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple Ping CMS</title>
      </Head>

      <PageHeader title="SCG STATUS CMS" description="SCG status CMS" />
      <ViewDashboard />
    </>
  );
}
