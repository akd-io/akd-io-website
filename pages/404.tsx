import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import PageWrapperWithoutMetadata from '../components/private/PageWrapperWithoutMetadata';
import UnstyledA from '../components/public/UnstyledA';

const ErrorContainer = styled.main`
  min-height: 100vh;
  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  text-align: center;
`;

const P = styled.p`
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
`;

const A = styled(UnstyledA)`
  text-decoration: underline;
`;

const Page404: React.FC = () => (
  <PageWrapperWithoutMetadata title="Page not found">
    <ErrorContainer>
      <H1>Page not found</H1>
      <P>
        Back to the{' '}
        <Link href="/" passHref>
          <A>front page</A>
        </Link>
        .
      </P>
    </ErrorContainer>
  </PageWrapperWithoutMetadata>
);

export default Page404;
