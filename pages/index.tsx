import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import Head from 'next/head';
import 'normalize.css';
import React from 'react';
import './index.scss';

const cardBreakpoint = '520px';
const lightGrey = '#eee';

const globalStyles = css`
  html,
  body,
  div#__next {
    min-height: 100vh;
  }

  body {
    background: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    @media only screen and (min-width: ${cardBreakpoint}) {
      background: ${lightGrey};
    }
  }

  div#__next {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: white;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 40px;
  padding-left: 40px;
  animation-name: fadein;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media only screen and (min-width: ${cardBreakpoint}) {
    min-height: 0;
    max-width: 440px;
    margin: 40px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  }

  & > * + * {
    margin: 0;
    margin-top: 25px;
  }
`;

const Index: NextPage = () => (
  <>
    <Head>
      <title>Anders Kjær Damgaard</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <meta
        name="description"
        content="The website of Anders Kjær Damgaard, a Software Developer based in Copenhagen."
      />
      <meta
        name="keywords"
        content="Anders Kjær Damgaard,frontend,web,software,developer,development"
      />
      <meta name="robots" content="index,follow" />
    </Head>
    <Global styles={globalStyles} />
    <Card>
      <div className="profile-picture-container">
        <img src="static/picture.png" alt="Circular portrait photograph of Anders Kjær Damgaard." />
      </div>
      <h1 className="name">Anders Kjær Damgaard</h1>
      <h2 className="position">Software Developer</h2>
      <h3 className="location">Copenhagen, Denmark</h3>
      <p className="description">
        Software development and computer science is an old, long-lasting passion of mine. A passion
        that my curiosity has always led me to, and one that I am currently enjoying, doing frontend
        development using modern web technologies.
      </p>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/anders-damgaard/">LinkedIn</a>
        <a href="https://github.com/akd-io">GitHub</a>
        <a href="mailto:akd@akd.io">Email</a>
      </div>
    </Card>
  </>
);

export default Index;
