import type { AppProps } from "next/app";
import { theme } from "lib/theme";
import { ThemeProvider } from "@emotion/react";
import { PageLayout } from "lib/layouts/PageLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  );
}

export default MyApp;
