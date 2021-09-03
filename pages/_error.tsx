import styled from '@emotion/styled';
import { NextPage } from 'next';
import Link from 'next/link';
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

type ErrorProps = {
  statusCode?: number;
};
const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <PageWrapperWithoutMetadata title="Internal server error">
      <ErrorContainer>
        {statusCode === 500 ? (
          <>
            <H1>Internal server error</H1>
            <P>
              Please try again later, or <A href="mailto:akd@akd.io">contact me</A> if the error
              persists.
            </P>
          </>
        ) : statusCode ? (
          <H1>An error occured ({statusCode})</H1>
        ) : (
          <H1>An error occured</H1>
        )}
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
};

Error.getInitialProps = ({ res, err }): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
