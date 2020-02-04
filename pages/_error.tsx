import styled from '@emotion/styled';
import Error from 'next/error';
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

class MyError extends Error {
  render = (): JSX.Element => {
    const { statusCode } = this.props;

    let title = 'Error';
    let header = <H1>An error occured ({statusCode})</H1>;
    let backToFrontPageParagraph = (
      <P>
        Back to the{' '}
        <Link href="/" passHref>
          <A>front page</A>
        </Link>
        ?
      </P>
    );
    let tryAgainParagraph = (
      <P>
        Please try again later, or <A href="mailto:akd@akd.io">contact me</A> if the error persists.
      </P>
    );
    let paragraph = (
      <>
        {tryAgainParagraph}
        {backToFrontPageParagraph}
      </>
    );

    switch (statusCode) {
      case 404: {
        title = 'Page not found';
        header = <H1>Page not found</H1>;
        paragraph = backToFrontPageParagraph;
        break;
      }
      case 500: {
        title = 'Internal server error';
        header = <H1>Internal server error</H1>;
        break;
      }
    }

    return (
      <PageWrapperWithoutMetadata title={title}>
        <ErrorContainer>
          {header}
          {paragraph}
        </ErrorContainer>
      </PageWrapperWithoutMetadata>
    );
  };
}

export default MyError;
