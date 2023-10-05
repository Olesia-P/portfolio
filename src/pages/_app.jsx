import React from 'react';
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    // <>
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    // </>
  );
}

export default MyApp;
