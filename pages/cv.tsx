import styled from '@emotion/styled';
import { NextPage } from 'next';
import React from 'react';
import PageWrapperWithMetadata from '../components/private/PageWrapperWithMetadata';
import {
  certificates,
  competencies,
  educations,
  occupations,
  personalQualifications,
} from '../utils/cv-constants';

const PageContainer = styled.main`
  max-width: 800px;
  margin: 20px;

  line-height: 1.33em;
`;

const ThreeColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-column-gap: 30px;
`;

const TwoColumnLayout = styled.div`
  column-count: 2;
  column-gap: 50px;
`;

const TableHeader = styled.div`
  font-weight: bold;
  font-size: 0.9em;
  color: rgba(0, 0, 0, 0.5);
`;

const CV: NextPage = () => {
  return (
    <PageWrapperWithMetadata
      title="CV of Anders Kjær Damgaard | akd.io"
      description="CV of Anders Kjær Damgaard, a Software Developer based in Copenhagen doing frontend development using modern web technologies."
      keywords="CV,Anders Kjær Damgaard,frontend,web,software,developer,development"
    >
      <PageContainer>
        <h1>CV &ndash; Anders Kjær Damgaard</h1>
        <h2>Occupation</h2>
        <ThreeColumnGrid>
          <TableHeader>PERIOD</TableHeader>
          <TableHeader>COMPANY</TableHeader>
          <TableHeader>POSITION</TableHeader>
          {occupations.map((occupation, i) => (
            <>
              <div key={i}>
                {occupation.startYear} &ndash; {occupation.endYear}
              </div>
              <div key={i}>{occupation.company}</div>
              <div key={i}>{occupation.position}</div>
            </>
          ))}
        </ThreeColumnGrid>
        <h2>Education</h2>
        <ThreeColumnGrid>
          <TableHeader>PERIOD</TableHeader>
          <TableHeader>EDUCATION</TableHeader>
          <TableHeader>INSTITUTE</TableHeader>
          {educations.map((education, i) => (
            <>
              <div key={i}>
                {education.startYear} &ndash; {education.endYear}
              </div>
              <div key={i}>{education.education}</div>
              <div key={i}>{education.institute}</div>
            </>
          ))}
        </ThreeColumnGrid>
        <h2>Certificates</h2>
        <ThreeColumnGrid>
          <TableHeader>YEAR</TableHeader>
          <TableHeader>COURSE NAME</TableHeader>
          <TableHeader>PROVIDER</TableHeader>
          {certificates.map((certificate, i) => (
            <>
              <div key={i}>{certificate.year}</div>
              <div key={i}>{certificate.courseName}</div>
              <div key={i}>{certificate.provider}</div>
            </>
          ))}
        </ThreeColumnGrid>
        <h2>Personal qualifications</h2>
        <ul>
          <TwoColumnLayout>
            {personalQualifications.map((qualification, i) => (
              <li key={i}>{qualification}</li>
            ))}
          </TwoColumnLayout>
        </ul>
        <h2>Competencies</h2>
        <ul>
          <TwoColumnLayout>
            {competencies.map((competence, i) => (
              <li key={i}>{competence}</li>
            ))}
          </TwoColumnLayout>
        </ul>
      </PageContainer>
    </PageWrapperWithMetadata>
  );
};

export default CV;
