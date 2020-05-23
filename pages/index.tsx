import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import React from 'react';
import PageWrapperWithMetadata from '../components/private/PageWrapperWithMetadata';

const cardBreakpoint = '520px';
const lightGrey = '#eee';
const darkGrey = '#111';

const globalStyles = css`
  body {
    @media only screen and (min-width: ${cardBreakpoint}) {
      background: ${lightGrey};
    }
  }
`;

const IndexContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  background: white;

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

const ProfilePictureContainer = styled.div`
  position: relative;
  width: 65%;
  padding-bottom: 65%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ProfilePicture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const NameHeader = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

const PositionHeader = styled.h2`
  margin-bottom: 0;
  font-size: 25px;
  font-weight: 300;
`;

const LocationHeader = styled.h3`
  margin-top: 0;
  font-size: 20px;
  font-weight: 300;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.25em;
`;

const Button = styled.a`
  display: inline-block;
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  padding-left: 1em;
  padding-right: 1em;
  margin-top: 1em;
  margin-left: 0.5em;
  margin-right: 0.5em;
  border: 1px solid ${darkGrey};
  border-radius: 0.3em;
  background: ${darkGrey};
  color: white;
  text-decoration: none;
  transition: color 0.1s, background-color 0.1s;

  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
  }

  &:hover,
  &:active {
    background: white;
    color: black;
  }
`;

const Index: NextPage = () => (
  <PageWrapperWithMetadata
    title="Anders Kjær Damgaard"
    description="The website of Anders Kjær Damgaard, a Software Developer based in Copenhagen."
    keywords="Anders Kjær Damgaard,frontend,web,software,developer,development"
  >
    <Global styles={globalStyles} />
    <IndexContainer>
      <Card>
        <ProfilePictureContainer className="profile-picture-container">
          <ProfilePicture
            src={require('../public/static/picture.png')}
            alt="Portrait photograph of Anders Kjær Damgaard."
          />
        </ProfilePictureContainer>
        <NameHeader>Anders Kjær Damgaard</NameHeader>
        <PositionHeader>Software Developer</PositionHeader>
        <LocationHeader>Copenhagen, Denmark</LocationHeader>
        <Description>
          Software development and computer science is an old, long-lasting passion of mine. A
          passion that my curiosity has always led me to, and one that I am currently enjoying,
          doing frontend development using modern web technologies.
        </Description>
        <div>
          <Button href="https://twitter.com/akd_io">Twitter</Button>
          <Button href="https://github.com/akd-io">GitHub</Button>
          <br />
          <Button href="https://www.linkedin.com/in/anders-damgaard/">LinkedIn</Button>
          <Button href="mailto:akd@akd.io">Email</Button>
        </div>
      </Card>
    </IndexContainer>
  </PageWrapperWithMetadata>
);

export default Index;
