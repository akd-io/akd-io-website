import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render = (): JSX.Element => (
    <Html lang="en-US">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
