import Head from 'next/head';
import { FC } from 'react';
import GlobalStyles from './GlobalStyles';

const BasePageWrapper: FC = ({ children }) => (
  <>
    <Head>
      <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <script async defer data-domain="akd.io" src="https://stats.akd.io/js/index.js" />
    </Head>
    <GlobalStyles />
    {children}
  </>
);

export default BasePageWrapper;
