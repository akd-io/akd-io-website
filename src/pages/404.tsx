import { Anchor } from "@/components/Anchor"
import { FC } from "react"
import PageWrapperWithoutMetadata from "../components/PageWrapperWithoutMetadata"

const Page404: FC = () => (
  <PageWrapperWithoutMetadata title="Page not found">
    <div>
      <h1>Page not found</h1>
      <p>
        Back to the <Anchor href="/">front page</Anchor>.
      </p>
    </div>
  </PageWrapperWithoutMetadata>
)

export default Page404
