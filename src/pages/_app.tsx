import { ThemeProvider } from '@emotion/react';
import CheckingAuth from 'components/error/CheckingAuth';
import { AppLayout } from 'components/layout/AppLayout';
import { useCheckAuth } from 'hooks/useCheckAuth';
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
  const { isAuthed, isAuthNeeded } = useCheckAuth();

  if (!isAuthed && isAuthNeeded) {
    return <CheckingAuth />;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="og:title" content="SCG Status CMS" />
        <meta
          name="og:description"
          content="SCG status CMS 에 오신 것을 환영합니다. "
        />
        <meta name="og:image" content="/images/seo/og_image.png" />
        <title>SCG Status CMS</title>
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
