import { ThemeProvider } from '@emotion/react';
import { AppLayout } from 'components/layout/AppLayout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GlobalStyles } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
import { SWRConfig } from 'swr';
import { fetcher } from 'utils/fetcher';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLoginPage = router.pathname === '/login';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="robots" content="noindex, nofollow" />
        <title>Simple Ping CMS</title>
      </Head>
      <SWRConfig
        value={{
          fetcher: fetcher,
          shouldRetryOnError: false,
        }}
      >
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {isLoginPage ? (
            <Component {...pageProps} />
          ) : (
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          )}
        </ThemeProvider>
      </SWRConfig>
    </>
  );
}
