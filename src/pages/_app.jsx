import React from 'react';
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import Layout from '../components/layout/layout';
import Meta from '../components/meta/meta';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Meta />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
