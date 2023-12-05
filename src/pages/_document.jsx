// pages/_document.js
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Meta from '../components/meta/meta';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add your meta tags, link tags, and other head content here */}
          <Meta />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
