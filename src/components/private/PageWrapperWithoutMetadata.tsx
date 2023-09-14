import Head from 'next/head';
import { FC } from 'react';
import BasePageWrapper from './BasePageWrapper';

interface PageWrapperWithoutMetadataProps {
  title: string;
  children: React.ReactNode;
}
const PageWrapperWithoutMetadata: FC<PageWrapperWithoutMetadataProps> = ({ title, children }) => (
  <BasePageWrapper>
    <Head>
      <title>{title}</title>
      <meta name="robots" content="noindex" />
    </Head>
    {children}
  </BasePageWrapper>
);

export default PageWrapperWithoutMetadata;
