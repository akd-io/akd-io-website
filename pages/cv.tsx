import { NextPage } from 'next';
import React from 'react';
import PageWrapperWithMetadata from '../components/private/PageWrapperWithMetadata';

const CV: NextPage = () => (
  <PageWrapperWithMetadata
    title="CV of Anders Kjær Damgaard | akd.io"
    description="CV of Anders Kjær Damgaard, a Software Developer based in Copenhagen doing frontend development using modern web technologies."
    keywords="CV,Anders Kjær Damgaard,frontend,web,software,developer,development"
  >
    <h1>CV</h1>
  </PageWrapperWithMetadata>
);

export default CV;
