/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  const sections = [
    { id: "vision", title: "Vision" },
    { id: "problem", title: "The Problem" },
    { id: "approach", title: "Approach" },  
    { id: "scope", title: "Scope" },
    { id: "cta", title: "Conclusion" },
  ];

  return (
    <main>
      <header className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <p className="mb-3 text-sm/relaxed text-neutral-500">Manifesto</p>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-5xl">
            You Can't Automate Curiosity
          </h1>
          <p className="mt-3 text-balance text-neutral-600 dark:text-neutral-400">
            The Future Of Search in the Age of AI
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
            <span>Last updated: 2025-09-17</span>
            <span className="hidden h-1 w-1 rounded-full bg-neutral-400 align-middle "/>
            <a
              href="https://github.com/ra2607Alessandro/GEMM"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-black/10 px-3 py-1.5 text-foreground hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
            >
              <GitHubIcon className="h-4 w-4" aria-hidden="true"/>
              Github
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-[1fr_280px]">
          <article className="mx-auto w-full max-w-3xl">
            <Section id="vision" title="Vision">
              <p>
                The Internet is Search. <br /><br />


                Search engines have defined the way we travel accross the web for decades. <br /><br />

                
                Some say that with AI all search engines will be replaced by Agents or that AI has completely solved the problem of search. <br /><br />

               
                But let's be honest: That's entire crock of shit!
                
              </p>
            </Section>

           

            <Section id="problem" title="The Problem">
              <p>
               The number of ways we can search the web today is infinite. <br /><br />
              We can:<br />
              - Google it<br/>
              - Ask ChatGPT<br/>
              - Ask Perplexity<br/>

              And many more considering how many search engines and AI search tools there are.<br /><br />
              The problem is not the search <br /><br />
              The problem is in the answer<br /><br />
              
              The search is easy to automate due to its technical nature.<br/><br/>
              The process that every single search engine or search tools uses is literally the same (web scraping, text or link extraction and embedding, etc.).<br/>
              But unfortunately, if you have used the tools, you'll know that even the answer is always the same.<br /><br />
              It's either the links that Google gives you, or the text and citations that ChatGPT and Perplexity give you.<br /><br />
              But all of those answers are relevant to the prompt/search you generated, they are just meant to give you an answer based on the aggregation of words and symbols you put together to trigger the search.
              <br /><br />
              But what about YOU?<br /><br />
              What about the goals YOU have that lead you to ask the query?<br /><br />
              What about the flame that sprinkled YOUR curiosity?<br /><br />
              
              Do you want more answers, or do you want more RELEVANT answers?
               
              </p>
            </Section>

            <Section id="approach" title="Approach">
              <p>
                My view of search is the one of a personalized experience.<br /><br />
                I don't just want the truth-grounded answer, I want that the answer reflects the question I asked. <br /><br />
                I often use Perplexity to create roadmaps or study plans every time I want to learn something new. <br /><br />
                The problem I always face is even if I craft the more specific prompt ever written, with role, context, guidelines etc.,  the answer almost seems to follow the spirit of "Let's give him the most amount of information we can find around the query", not "Let's find the most RELEVANT amount of information present in the web related to his question"<br /><br />
                And this is, in my opinion why we still haven't cracked the search problem. <br /><br />
                LLMs can hallucinate.<br /><br />
                Search engines are too broad. <br /><br />
                Perplexity gives you a lot of things you don't even need. <br /><br />
                What's missing? <br /><br />
                The personalization of search. <br /><br />
                The empathy of search. <br /><br />
                Asking a query and be able to say: "It just got me."
              </p>
            </Section>

           

            <Section id="scope" title="Scope">
              <p>
                In the Github repository linked above you will find  a little and unfinished draft of a Rails 8 AI-powered search assistant that answers questions using only information scraped from the web.<br/><br/>
                It runs a multi-stage pipeline: web search → scraping → vectorization → truth-grounded AI synthesis with citations. Responses must never hallucinate and must always include proper citations..<br/><br/>
                <li>Truth-grounded: Every factual statement is supported by citations to scraped sources.</li>
                <li>Three-input model: A search has a required query and optional goal and rules.</li>
                <li>Semantic search: Vector embeddings (1536 dims) stored in PostgreSQL with pgvector; nearest-neighbor queries via neighbor gem.</li>
                <li>Real-time UX: Progress and results stream to the UI using Turbo Streams; background processing with Solid Queue.</li>
              </p>
              <h3 className="mt-6 text-lg font-medium">Core Principles</h3>
              <ul className="list-disc pl-6">
               <li>Personalized Search: The search will be shaped around the goal and instruction provided to the assistant in order to receive the most personalized output possible</li>
               <li>Truth only: Synthesize from scraped content; never inject model “knowledge.”</li>
               <li>Citations everywhere: Inline citations like [1], [2] must appear next to claims.</li>
               <li>Robustness: Timeouts, retries, rate-limiting, fallbacks for scraping failures.</li>
               <li>Safety: Sanitize inputs and scraped HTML; validate URLs; store only non-sensitive data.</li>
               </ul>
            </Section>

            <Section id="cta" title="Conclusion">
              <p>
                Thank You for having read this manifesto. <br/><br/>
                If you share the same vision ans values please consider leaving a star on the Githbub repository above and if you want to contact me, below you will find my X profile and Linkedln profile.<br/><br/>
                Thanks for your time!<br/><br/>
                Alessandro Aimar
              </p>
            </Section>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
            <a
            href="https://x.com/Alessandro90947"
            target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-black/10 px-3 py-1.5 text-foreground hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5">
             <XIcon className="h-4 w-4" aria-hidden="true"/>
              X 
            </a>

            <span className="hidden h-1 w-1 rounded-full bg-neutral-400 align-middle "/>
            <a
              href="https://www.linkedin.com/in/alessandro-aimar-17bb95331/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-black/10 px-3 py-1.5 text-foreground hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
            >
              <LinkedInIcon className="h-4 w-4" aria-hidden="true"/>
              Linkedln
            </a>
          </div>

            <footer className="mt-16 border-t border-black/10 pt-8 text-sm text-neutral-500 dark:border-white/10">
              <p>
                Licensed under MIT. © {new Date().getFullYear()} Alessandro Aimar.
              </p>
            </footer>
          </article>

          <aside className="lg:sticky lg:top-10">
            <nav
              aria-label="On this page"
              className="rounded-lg border border-black/10 p-4 dark:border-white/10"
            >
              <p className="mb-2 text-xs uppercase tracking-wide text-neutral-500">
                On this page
              </p>
              <ul className="space-y-2 text-sm">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      className="text-neutral-700 underline-offset-4 hover:underline dark:text-neutral-300"
                      href={`#${s.id}`}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="prose-content mt-4 space-y-4 text-pretty text-[1.02rem] leading-7 text-neutral-800 dark:text-neutral-200">
        {children}
      </div>
      <hr className="my-10 border-black/10 dark:border-white/10" />
    </section>
  );
}

// Removed unused Callout component to satisfy ESLint.

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" role="img" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.05.66-3.69-1.29-3.69-1.29-.5-1.27-1.23-1.61-1.23-1.61-.99-.67.08-.66.08-.66 1.09.08 1.66 1.12 1.66 1.12.98 1.67 2.57 1.19 3.2.91.1-.7.38-1.2.69-1.48-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.41.11-2.94 0 0 .93-.3 3.05 1.13.88-.25 1.82-.37 2.76-.38.94 0 1.89.13 2.77.38 2.12-1.43 3.05-1.13 3.05-1.13.6 1.53.22 2.66.11 2.94.7.77 1.12 1.75 1.12 2.95 0 4.22-2.57 5.14-5.01 5.41.39.34.73 1.01.73 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.19.64.76.53a10.97 10.97 0 0 0 7.5-10.4C23.02 5.24 18.27.5 12 .5z"
      />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" role="img" {...props}>
      <path d="M7.119 20.452H3.554V9h3.565z" />
      <path d="M5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124z" />
      <path d="M20.447 20.452h-3.554v-5.569c0-1.329-.027-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.6 0 4.266 2.369 4.266 5.455v6.288z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" role="img" {...props}>
      <path d="M18.244 2H21.5l-7.5 8.551L22.5 22h-6.751l-5.275-6.082L4.5 22H1.244l8.023-9.153L1 2h6.751l4.767 5.5L18.244 2zM16.87 20h1.88L8.14 4H6.259l10.61 16z" />
    </svg>
  );
}
