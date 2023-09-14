import { Anchor } from "@/components/Anchor"
import { FC } from "react"
import PageWrapperWithoutMetadata from "../components/PageWrapperWithoutMetadata"

const Page404: FC = () => (
  <PageWrapperWithoutMetadata title="Internal server error">
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-3 px-4 py-12">
      <span className="text-7xl font-bold opacity-30">500</span>
      <h1 className="text-xl font-bold">Internal server error.</h1>
      <div className="flex flex-col items-center">
        <p>Please try again later.</p>
        <p>
          <Anchor href="/">Back to safety</Anchor>
        </p>
      </div>
    </div>
  </PageWrapperWithoutMetadata>
)

export default Page404
