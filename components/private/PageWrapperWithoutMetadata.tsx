import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';
import BasePageWrapper from './BasePageWrapper';

interface PageWrapperWithoutMetadataProps {
  title: string;
}
const PageWrapperWithoutMetadata: FC<PropsWithChildren<PageWrapperWithoutMetadataProps>> = ({
  title,
  children,
}) => (
  <BasePageWrapper>
    <Head>
      <title>{title}</title>
      <meta name="robots" content="noindex" />
    </Head>
    {children}
  </BasePageWrapper>
);

export default PageWrapperWithoutMetadata;
