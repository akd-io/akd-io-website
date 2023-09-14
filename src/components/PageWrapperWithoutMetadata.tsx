import Head from "next/head"
import { FC } from "react"

type PageWrapperWithoutMetadataProps = {
  title: string
  children: React.ReactNode
}
const PageWrapperWithoutMetadata: FC<PageWrapperWithoutMetadataProps> = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="robots" content="noindex" />
    </Head>
    {children}
  </>
)

export default PageWrapperWithoutMetadata
