import type { AppProps } from 'next/app';
import 'normalize.css';

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default CustomApp;
