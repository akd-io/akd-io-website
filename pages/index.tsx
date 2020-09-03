import styled from '@emotion/styled';
import { NextPage } from 'next';
import React from 'react';
import PageWrapperWithMetadata from '../components/private/PageWrapperWithMetadata';
import Button from '../components/public/Button';

const IndexContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 100%;
  max-width: 440px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  animation-name: fadein;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
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
`;

const ProfilePicture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  border-radius: 50%;
`;

const NameHeader = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

const PositionHeader = styled.span`
  margin-bottom: 0;
  font-size: 25px;
  font-weight: 300;
`;

const LocationHeader = styled.span`
  margin-top: 0;
  font-size: 20px;
  font-weight: 300;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.4em;
`;

const FollowMeHeader = styled.h2`
  margin-top: 40px;
  font-size: 20px;
  font-weight: 400px;
`;

const ButtonsContainer = styled.div`
  margin-top: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Index: NextPage = () => (
  <PageWrapperWithMetadata
    title="Anders Kjær Damgaard | akd.io"
    description="The website of Anders Kjær Damgaard, a Software Developer based in Copenhagen doing frontend development using modern web technologies."
    keywords="Anders Kjær Damgaard,frontend,web,software,developer,development"
  >
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
        <FollowMeHeader>Follow me online</FollowMeHeader>
        <ButtonsContainer>
          <Button href="https://twitter.com/akd_io">Twitter</Button>
          <Button href="https://github.com/akd-io">GitHub</Button>
          <Button href="https://www.linkedin.com/in/anders-damgaard/">LinkedIn</Button>
        </ButtonsContainer>
      </Card>
    </IndexContainer>
  </PageWrapperWithMetadata>
);

export default Index;
