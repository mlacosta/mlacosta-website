import { ThemeProvider } from '@mui/material/styles';
import { PageLayout } from 'lib/layouts/PageLayout';
import { theme } from 'lib/theme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          min-height: 99.5%;
          margin: 0;
          padding: 0;
        }
      `}</style>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  );
}

export default MyApp;
