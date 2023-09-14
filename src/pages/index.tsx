import { Anchor } from "@/components/Anchor"
import { ModeToggle } from "@/components/ModeToggle"
import PageWrapperWithMetadata from "@/components/PageWrapperWithMetadata"
import { Button } from "@/components/ui/button"
import { NextPage } from "next"
import Image from "next/image"
import portrait from "public/images/portrait.jpg"

const Index: NextPage = () => (
  <PageWrapperWithMetadata
    title="Anders Kjær Damgaard | akd.io"
    description="Hello! 👋 I'm a freelance frontend engineer based in Copenhagen doing frontend development using modern web technologies."
    keywords="Anders Kjær Damgaard,freelance,consultant,consulting,senior,lead,frontend,front-end,web,software,developer,development,react,next,next.js"
  >
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-12">
      <main className="flex flex-col gap-12">
        <section className="flex max-w-lg flex-col items-center gap-3">
          <div className="flex w-full justify-end">
            <ModeToggle />
          </div>
          <div className="h-32 w-32 sm:h-52 sm:w-52">
            <Image
              className="rounded-full"
              src={portrait}
              alt="Portrait photograph of Anders Kjær Damgaard."
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Anders Kjær Damgaard</h1>
            <p className="text-xl font-light">Freelance Frontend Engineer</p>
          </div>
        </section>
        <section className="flex max-w-lg flex-col gap-3">
          <h2 className="text-xl font-bold">Hello! 👋</h2>
          <p>
            My name is Anders, and I am a passionate frontend engineer obsessed with improving
            software development projects, from enhancing user and developer experience to
            increasing maintainability and agility.
          </p>
          <p>
            I have spent the last 5 years consulting as a frontend web developer for a dozen
            different companies. I have worked with many teams, technologies, and processes and love
            the ever-changing environment&apos;s many learning opportunities.
          </p>
          <p>
            Whether you are looking for a frontend lead to lay a good foundation for your next web
            development project, an experienced React developer to help finish the last user stories
            before the deadline, or a full-stack developer to build a smaller web app, get in touch!
          </p>
        </section>
        <section className="flex max-w-lg flex-col gap-3">
          <h2 className="text-xl font-bold">Create Next Stack</h2>
          <p>
            Check out{" "}
            <Anchor isExternal href="https://www.create-next-stack.com/">
              Create Next Stack
            </Anchor>
            , an open-source website and CLI tool I built that helps frontend teams get{" "}
            <Anchor isExternal href="https://nextjs.org/">
              Next.js
            </Anchor>{" "}
            projects set up in minutes instead of days.
          </p>
        </section>
        <section className="flex max-w-lg flex-col items-center gap-4">
          <h2 className="text-xl font-bold">Follow me online</h2>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <a href="https://twitter.com/akd_io">Twitter</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/akd-io">GitHub</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/anders-damgaard/">LinkedIn</a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  </PageWrapperWithMetadata>
)

export default Index
