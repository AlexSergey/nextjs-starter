import '../assets/styles/globals.scss';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { isBrowser } from '../helpers/isBrowser';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
Router.events.on('routeChangeComplete', (url: string) => {
  if (isBrowser) {
    // TODO: Analytics here
  }
});

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */}
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
