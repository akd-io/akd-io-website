import styled from '@emotion/styled';
import { NextPage } from 'next';
import React from 'react';
import PageWrapperWithMetadata from '../components/private/PageWrapperWithMetadata';
import Button from '../components/public/Button';
import { owl } from '../utils/owl';
import portrait from '../public/images/portrait.jpg';
import Image from 'next/image';
import { Anchor } from '../components/public/Anchor';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FadeInContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;

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
  margin-top: 60px;

  align-items: flex-start;

  > ${owl} {
    margin-top: 20px;
  }
`;

const LatestReleaseSection = styled(Section)`
  margin-top: 40px;

  align-items: flex-start;

  > ${owl} {
    margin-top: 20px;
  }
`;

const FollowMeSection = styled(Section)`
  margin-top: 60px;
  text-align: center;
`;

const PortraitContainer = styled.div`
  position: relative;
  width: 40%;
  padding-bottom: 40%;
`;

const Portrait = styled(Image)`
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

const H2 = styled.h2`
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
    title="Anders Kjær Damgaard | akd.io"
    description="Hello! 👋 I'm a freelance frontend engineer based in Copenhagen doing frontend development using modern web technologies."
    keywords="Anders Kjær Damgaard,freelance,consultant,consulting,senior,lead,frontend,front-end,web,software,developer,development,react,next,next.js"
  >
    <PageContainer>
      <FadeInContainer>
        <HeaderSection>
          <PortraitContainer>
            <Portrait
              src={portrait.src}
              alt="Portrait photograph of Anders Kjær Damgaard."
              layout="fill"
            />
          </PortraitContainer>
          <NameHeading>Anders Kjær Damgaard</NameHeading>
          <JobTitle>Freelance Frontend Engineer</JobTitle>
          <Location>Copenhagen, Denmark</Location>
        </HeaderSection>
        <ParagraphSection>
          <H2>Hello! 👋</H2>
          <Paragraph>
            My name is Anders, and I am a passionate frontend engineer obsessed with improving
            software development projects, from enhancing user and developer experience to
            increasing maintainability and agility.
          </Paragraph>
          <Paragraph>
            I have spent the last 4 years consulting as a frontend web developer for a dozen
            different companies. I have worked with many teams, technologies, and processes and love
            the ever-changing environment&apos;s many learning opportunities.
          </Paragraph>
          <Paragraph>
            Whether you are looking for a frontend lead to lay a good foundation for your next web
            development project or an experienced React developer to help finish the last user
            stories before the deadline,{' '}
            <Anchor isExternal href="https://www.linkedin.com/in/anders-damgaard/">
              LinkedIn
            </Anchor>{' '}
            is the place to get in touch.
          </Paragraph>
        </ParagraphSection>
        <LatestReleaseSection>
          <H2>Latest release</H2>
          <Paragraph>
            I recently released{' '}
            <Anchor isExternal href="https://www.create-next-stack.com/">
              Create Next Stack
            </Anchor>
            , an open-source website and CLI tool that helps frontend teams get{' '}
            <Anchor isExternal href="https://nextjs.org/">
              Next.js
            </Anchor>{' '}
            projects set up in minutes instead of days. Check it out!
          </Paragraph>
        </LatestReleaseSection>
        <FollowMeSection>
          <H2>Follow me online</H2>
          <ButtonsContainer>
            <Button href="https://twitter.com/akd_io">Twitter</Button>
            <Button href="https://github.com/akd-io">GitHub</Button>
            <Button href="https://www.linkedin.com/in/anders-damgaard/">LinkedIn</Button>
          </ButtonsContainer>
        </FollowMeSection>
      </FadeInContainer>
    </PageContainer>
  </PageWrapperWithMetadata>
);

export default Index;
