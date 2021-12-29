import GlobalStyle from '@/assets/styles/globalStyles';
import { theme } from '@/assets/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import DefaultLayout from '@/components/layouts/Default';
import IntroLayout from '@/components/layouts/Intro';

function MyApp({ Component, pageProps, router: { route } }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        {route === '/' ? (
          <IntroLayout>
            <Component {...pageProps} />
          </IntroLayout>
        ) : (
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        )}
      </>
    </ThemeProvider>
  );
}

export default MyApp;
