import { Anchor } from "@/components/Anchor"
import { FC } from "react"
import PageWrapperWithoutMetadata from "../components/PageWrapperWithoutMetadata"

const Page404: FC = () => (
  <PageWrapperWithoutMetadata title="Page not found">
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-3 px-4 py-12">
      <span className="text-7xl font-bold opacity-30">404</span>
      <h1 className="text-xl font-bold">Page not found.</h1>
      <p>
        Let{"'"}s get you <Anchor href="/">back to safety</Anchor>.
      </p>
    </div>
  </PageWrapperWithoutMetadata>
)

export default Page404
