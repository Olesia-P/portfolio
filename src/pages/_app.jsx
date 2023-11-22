import React from 'react';
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import Layout from '../components/layout/layout';
import IndexPage from '../components/layout/head/head';

function MyApp({ Component, pageProps }) {
  return (
    // <>
    <Provider store={store}>
      <Layout>
        <IndexPage />
        <Component {...pageProps} lang="en" />
      </Layout>
    </Provider>
    // </>
  );
}

export default MyApp;
