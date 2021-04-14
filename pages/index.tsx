import styled from '@emotion/styled';
import { NextPage } from 'next';
import React from 'react';
import PageWrapperWithMetadata from '../components/private/PageWrapperWithMetadata';
import Button from '../components/public/Button';
import { owl } from '../utils/owl';

const IndexContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderSection = styled(Section)`
  text-align: center;
`;

const ParagraphSection = styled(Section)`
  margin-top: 40px;
  > ${owl} {
    margin-top: 20px;
  }
`;

const FollowMeSection = styled(Section)`
  margin-top: 40px;
  text-align: center;
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

const NameHeading = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

const JobTitle = styled.span`
  margin-bottom: 0;
  font-size: 25px;
  font-weight: 300;
`;

const Location = styled.span`
  margin-top: 0;
  font-size: 20px;
  font-weight: 300;
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.4em;
`;

const A = styled.a`
  color: black;
`;

const FollowMeHeading = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

const ButtonsContainer = styled.div`
  margin-top: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Index: NextPage = () => (
  <PageWrapperWithMetadata
    title="Anders Kjær Damgaard | akd.io"
    description="The website of Anders Kjær Damgaard, a Software Developer based in Copenhagen doing frontend development using modern web technologies."
    keywords="Anders Kjær Damgaard,frontend,web,software,developer,development"
  >
    <IndexContainer>
      <Card>
        <HeaderSection>
          <ProfilePictureContainer>
            <ProfilePicture
              src="/static/picture.png"
              alt="Portrait photograph of Anders Kjær Damgaard."
            />
          </ProfilePictureContainer>
          <NameHeading>Anders Kjær Damgaard</NameHeading>
          <JobTitle>Freelance Frontend Engineer</JobTitle>
          <Location>Copenhagen, Denmark</Location>
        </HeaderSection>
        <ParagraphSection>
          <Paragraph>
            Hi! My name is Anders, and I am a passionate frontend engineer currently obsessed with
            Next.js, TypeScript, GraphQL and Serverless.
          </Paragraph>
          <Paragraph>
            I have spent the last 3 years employed at IT Minds and later Trifork, consulting as a
            frontend web developer on a dozen different projects for a dozen different companies. I
            have worked with many different teams, technologies and processes, and absolutely love
            the large amount of learning opportunities the ever-changing environment has to offer.
          </Paragraph>
          <Paragraph>
            I have recently taken the final step and become an independent consultant. If you are
            looking for someone strong in React, Redux, TypeScript, JavaScript, HTML, CSS,
            CSS-in-JS, etc., then check out my CV and shoot me a message on{' '}
            <A href="https://www.linkedin.com/in/anders-damgaard/">LinkedIn</A>!
          </Paragraph>
        </ParagraphSection>
        <FollowMeSection>
          <FollowMeHeading>Follow me online</FollowMeHeading>
          <ButtonsContainer>
            <Button href="https://twitter.com/akd_io">Twitter</Button>
            <Button href="https://github.com/akd-io">GitHub</Button>
            <Button href="https://www.linkedin.com/in/anders-damgaard/">LinkedIn</Button>
          </ButtonsContainer>
        </FollowMeSection>
      </Card>
    </IndexContainer>
  </PageWrapperWithMetadata>
);

export default Index;
