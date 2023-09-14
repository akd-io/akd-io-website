import "@/styles/globals.css"
import PlausibleProvider from "next-plausible"
import type { AppProps } from "next/app"

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <PlausibleProvider domain="akd.io">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default CustomApp
