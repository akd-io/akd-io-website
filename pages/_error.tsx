import Error from 'next/error';
import Head from 'next/head';
import React from 'react';

class MyError extends Error {
  render = (): JSX.Element => (
    <>
      <Head>
        <title>Error {this.props.statusCode}</title>
      </Head>
      {this.props.statusCode === 500 ? (
        <>
          <h1>Internal server error</h1>
          <p>
            Please try again later, or <a href="mailto:akd@akd.io">contact me</a> if the error
            persists.
          </p>
        </>
      ) : this.props.statusCode === 404 ? (
        <>
          <h1>Page not found</h1>
          <p>Back to the front page?</p>
        </>
      ) : (
        <>
          <h1>An error occured</h1>
          <p>
            Please try again later, or <a href="mailto:akd@akd.io">contact me</a> if the error
            persists.
          </p>
        </>
      )}
    </>
  );
}

export default MyError;
