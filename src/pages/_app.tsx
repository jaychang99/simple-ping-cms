import { AppLayout } from 'components/layout/AppLayout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from 'styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="robots" content="noindex, nofollow" />
        <title>Simple Ping CMS</title>
      </Head>
      <GlobalStyles />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
