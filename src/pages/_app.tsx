import "@/styles/globals.css"
import PlausibleProvider from "next-plausible"
import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <PlausibleProvider domain="akd.io">
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  )
}

export default CustomApp
