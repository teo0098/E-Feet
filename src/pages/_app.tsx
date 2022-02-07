import type { AppProps } from 'next/app';

import '../styles/globals.css';

import { Layout } from '@components/Layout';

import { useInitFirebase } from '@hooks/index';

const App = ({ Component, pageProps }: AppProps) => {
  useInitFirebase();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
