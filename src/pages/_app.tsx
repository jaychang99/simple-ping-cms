import { ThemeProvider } from '@emotion/react';
import CheckingAuth from 'components/error/CheckingAuth';
import { AppLayout } from 'components/layout/AppLayout';
import MobileSidebar from 'components/layout/components/MobileSidebar';
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
              <MobileSidebar />
              <Component {...pageProps} />
            </AppLayout>
          )}
        </ThemeProvider>
      </SWRConfig>
    </>
  );
}
