import { AppType } from 'next/dist/next-server/lib/utils';
import 'normalize.css';
import React from 'react';

const MyApp: AppType = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
