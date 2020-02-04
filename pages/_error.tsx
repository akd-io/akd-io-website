import Error from 'next/error';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

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
      <>
        <Head>
          <title>{title}</title>
          <meta name="robots" content="noindex" />
        </Head>
        <h1>{header}</h1>
        <p>{paragraph}</p>
      </>
    );
  };
}

export default MyError;
