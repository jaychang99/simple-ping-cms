import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
