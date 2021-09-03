import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ErrorProps } from 'next/error';
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

const CustomError: NextPage<ErrorProps> = ({ statusCode }) => {
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
        ) : (
          <H1>An error occured ({statusCode})</H1>
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

CustomError.getInitialProps = ({ res, err }) => {
  let statusCode = 404;
  if (res) {
    statusCode = res.statusCode;
  } else if (err && err.statusCode) {
    statusCode = err.statusCode;
  }
  return { statusCode };
};

export default CustomError;
