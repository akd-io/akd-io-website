import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';
import BasePageWrapper from './BasePageWrapper';
import GlobalStyles from './GlobalStyles';

interface PageWrapperWithMetadataProps {
  title: string;
  description: string;
  keywords: string;
}
const PageWrapperWithMetadata: FC<PropsWithChildren<PageWrapperWithMetadataProps>> = ({
  title,
  description,
  keywords,
  children,
}) => (
  <BasePageWrapper>
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index,follow" />
    </Head>
    <GlobalStyles />
    {children}
  </BasePageWrapper>
);

export default PageWrapperWithMetadata;
