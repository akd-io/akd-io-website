import Head from "next/head"
import React, { FC } from "react"

type PageWrapperWithMetadataProps = {
  title: string
  description: string
  keywords: string
  children: React.ReactNode
}
const PageWrapperWithMetadata: FC<PageWrapperWithMetadataProps> = ({
  title,
  description,
  keywords,
  children,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
    {children}
  </>
)

export default PageWrapperWithMetadata
