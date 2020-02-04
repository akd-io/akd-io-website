import Error from 'next/error';
import Link from 'next/link';
import React from 'react';
import PageWrapperWithoutMetadata from '../components/private/PageWrapperWithoutMetadata';

class MyError extends Error {
  render = (): JSX.Element => {
    const { statusCode } = this.props;

    let title = 'Error';
    let header = 'An error occured';
    let backToFrontPageParagraph = (
      <>
        Back to the{' '}
        <Link href="/">
          <a>front page</a>
        </Link>
        ?
      </>
    );
    let tryAgainParagraph = (
      <>
        Please try again later, or <a href="mailto:akd@akd.io">contact me</a> if the error persists.
      </>
    );
    let paragraph = (
      <>
        {tryAgainParagraph}
        <br />
        {backToFrontPageParagraph}
      </>
    );

    switch (statusCode) {
      case 404: {
        title = 'Page not found';
        header = 'Page not found';
        paragraph = backToFrontPageParagraph;
        break;
      }
      case 500: {
        title = 'Internal server error';
        header = 'Internal server error';
        break;
      }
    }

    return (
      <PageWrapperWithoutMetadata title={title}>
        <h1>{header}</h1>
        <p>{paragraph}</p>
      </PageWrapperWithoutMetadata>
    );
  };
}

export default MyError;
