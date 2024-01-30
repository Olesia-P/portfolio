import React from 'react';
import Head from 'next/head';
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import Meta from '../components/meta/meta';
import { store } from '../store/index';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Portfolio Junior Developer Olesia Pryhun</title>

        <Meta />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
