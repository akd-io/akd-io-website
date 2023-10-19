import { Anchor } from "@/components/Anchor"
import { ModeToggle } from "@/components/ModeToggle"
import PageWrapperWithMetadata from "@/components/PageWrapperWithMetadata"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { NextPage } from "next"

const Index: NextPage = () => {
  const links = [
    { title: "Qwik Website", href: "https://qwik.builder.io/" },
    { title: "Qwik Tutorial", href: "https://qwik.builder.io/tutorial/" },
    { title: "Qwik Sandbox", href: "https://qwik.builder.io/examples/introduction/hello-world/" },
    { title: "Qwik Docs", href: "https://qwik.builder.io/docs/" },
    { title: "Qwik Docs: Qwik City", href: "https://qwik.builder.io/docs/qwikcity/" },
    { title: "Qwik Docs: Think Qwik", href: "https://qwik.builder.io/docs/concepts/think-qwik/" },
    { title: "Qwik Docs: Resumable", href: "https://qwik.builder.io/docs/concepts/resumable/" },
    { title: "Qwik Docs: Progressive", href: "https://qwik.builder.io/docs/concepts/progressive/" },
    { title: "Qwik Docs: Reactivity", href: "https://qwik.builder.io/docs/concepts/reactivity/" },
    { title: "Qwik Ecosystem", href: "https://qwik.builder.io/ecosystem/" },
    { title: "Builder Discord (includes Qwik channel)", href: "https://discord.gg/Bb27b4EKm7" },
    { title: "Builder Blog", href: "https://www.builder.io/blog" },
    {
      title: "Builder Blog: Hydration is Pure Overhead",
      href: "https://www.builder.io/blog/hydration-is-pure-overhead",
    },
    {
      title: "Builder Blog: Hydration, the Saboteur of Lazy Loading",
      href: "https://www.builder.io/blog/hydration-sabotages-lazy-loading",
    },
    { title: "onwidget's awesome-qwik list", href: "https://github.com/onwidget/awesome-qwik" },
    { title: "qwikverse's awesome-qwik list", href: "https://github.com/qwikverse/awesome-qwik" },
    { title: "Partytown", href: "https://partytown.builder.io/" },
    { title: "Mitosis GitHub", href: "https://github.com/BuilderIO/mitosis" },
    { title: "Mitosis playground", href: "https://mitosis.builder.io/" },
    { title: "Builder.io", href: "https://builder.io/" },
    {
      title: "Builder Blog: Introducing Visual Copilot: A Better Figma-to-Code Workflow",
      href: "https://www.builder.io/blog/figma-to-code-visual-copilot",
    },
  ]
  return (
    <PageWrapperWithMetadata
      title="Qwik Links | akd.io"
      description="Useful links for getting started with Qwik. From my talk, Qwik and Resumability."
      keywords="qwik,resumability,web,frontend,development"
    >
      <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 pb-12 pt-4">
        <main className="flex flex-col gap-12">
          <section className="flex max-w-lg flex-col items-center gap-12">
            <div className="flex w-full items-center justify-between">
              <Anchor href="/">
                <span className="inline-flex items-center gap-1">
                  <ArrowLeft size={20} />
                  <span>Back to homepage</span>
                </span>
              </Anchor>
              <ModeToggle />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-bold">Qwik Links</h1>
              <p className="text-xl font-light">By Anders Kjær Damgaard</p>
            </div>
          </section>
          <section className="flex max-w-lg flex-col gap-3">
            <h2 className="text-xl font-bold">Hello! 👋</h2>
            <p>
              {`On October 19, 2023 I held a talk at CopenhagenJS titled "Qwik & Resumability". This page compiles a list of useful links for the attendees to get started with Qwik.`}
            </p>
          </section>
          <section className="flex max-w-lg flex-col gap-3">
            <h2 className="text-xl font-bold">Slides</h2>
            <Anchor
              href="https://docs.google.com/presentation/d/e/2PACX-1vRVlmQNmpwlSNWUgpTe_l3nMrR0W4S55VIknSfLWN6ghMK7bOJ5xd63VAJo-L5Br1JVZnKOIwxJw3AA/pub?start=false&loop=false&delayms=3000"
              isExternal
              target="_blank"
            >
              Qwik & Resumability slides
            </Anchor>
          </section>
          <section className="flex max-w-lg flex-col gap-3">
            <h2 className="text-xl font-bold">Links</h2>
            <ul className="flex list-disc flex-col gap-2 pl-6">
              {links.map((link) => (
                <li key={link.title}>
                  <Anchor href={link.href} isExternal target="_blank">
                    {link.title}
                  </Anchor>
                </li>
              ))}
            </ul>
          </section>
          <section className="flex max-w-lg flex-col items-center gap-4">
            <h2 className="text-xl font-bold">Follow me online</h2>
            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <a href="https://twitter.com/akd_io" target="_blank">
                  Twitter
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/akd-io" target="_blank">
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/anders-damgaard/" target="_blank">
                  LinkedIn
                </a>
              </Button>
            </div>
          </section>
        </main>
      </div>
    </PageWrapperWithMetadata>
  )
}

export default Index
