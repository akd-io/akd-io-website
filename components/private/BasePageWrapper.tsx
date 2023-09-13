import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import GlobalStyles from './GlobalStyles';

const BasePageWrapper: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Head>
      <script async defer data-domain="akd.io" src="https://stats.akd.io/js/index.js" />
    </Head>
    <GlobalStyles />
    {children}
  </>
);

export default BasePageWrapper;
