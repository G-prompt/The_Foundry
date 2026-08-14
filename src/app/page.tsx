import type { Metadata } from "next";
import { ArrowRight, BookOpen, Boxes, GitPullRequest, Users } from "lucide-react";

import { ButtonAnchor, ButtonLink } from "@/components/site/Button";
import { Card, Tag } from "@/components/site/Card";
import { PageTransition, Reveal } from "@/components/site/Reveal";
import { SectionHeading, SectionWrapper } from "@/components/site/SectionWrapper";
import { events } from "@/data/events";
import { posts } from "@/data/posts";
import { SLACK_INVITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Foundry — Where builders share, collaborate, and learn",
  description:
    "An open-source community space for sharing ideas and resources, collaborating on projects, and learning together. Hackathons, seminars, and weekly office hours.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Foundry — An open-source builder community",
    description:
      "Share ideas, collaborate on open-source projects, and learn together with The Foundry.",
    url: "/",
  },
};

const offerings = [
  {
    Icon: Boxes,
    title: "Idea sharing",
    body: "Half-formed thoughts welcome. Post it, get real questions back, and leave with a sharper version.",
  },
  {
    Icon: GitPullRequest,
    title: "Project collaboration",
    body: "Open repos, open issues, open reviews. Find a project that needs your skill this week.",
  },
  {
    Icon: BookOpen,
    title: "Learning together",
    body: "Reading groups, seminars, and study threads that keep going after the excitement fades.",
  },
  {
    Icon: Users,
    title: "Resource sharing",
    body: "A living library of notes, templates, and tooling that members actually use day to day.",
  },
];

const stats = [
  { value: "1,200+", label: "Members" },
  { value: "90+", label: "Open projects" },
  { value: "48", label: "Events hosted" },
  { value: "100%", label: "Open source" },
];

export default function Home() {
  const upcoming = events.filter((e) => e.status === "upcoming").slice(0, 3);
  const latest = posts.slice(0, 3);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden="true" className="grid-canvas pointer-events-none absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-32">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Open source, open door
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.03] sm:text-6xl md:text-7xl">
              Where brilliant minds
              <span className="text-accent"> build in the open.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              The Foundry is a community space to share ideas and resources, collaborate on
              real projects, and learn together — out loud, in public.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonAnchor
                href={SLACK_INVITE_URL}
                target="_blank"
                rel="noreferrer noopener"
                size="lg"
              >
                Join the Community <ArrowRight className="size-4" />
              </ButtonAnchor>
              <ButtonLink href="/events" variant="outline" size="lg">
                See upcoming events
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface px-5 py-6">
                  <dt className="eyebrow">{s.label}</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* What we offer */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="What you get"
          title="A community built like good software"
          description="Small pieces, clearly scoped, composed by people who care about the craft."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {offerings.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <Card className="h-full">
                <Icon className="size-5 text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-8">
          <ButtonLink href="/about" variant="ghost" size="sm">
            More about The Foundry <ArrowRight className="size-4" />
          </ButtonLink>
        </Reveal>
      </SectionWrapper>

      {/* Upcoming events */}
      <SectionWrapper className="border-y border-border bg-surface">
        <SectionHeading
          eyebrow="Calendar"
          title="What's coming up"
          description="Hackathons, seminars, and open sessions — most of them free and remote-friendly."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {upcoming.map((event, i) => (
            <Reveal key={event.id} delay={i * 0.07}>
              <Card className="h-full bg-background">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag tone="accent">{event.category}</Tag>
                  <Tag>{event.format}</Tag>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{event.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {event.dateLabel} · {event.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-8">
          <ButtonLink href="/events" variant="outline" size="sm">
            All events
          </ButtonLink>
        </Reveal>
      </SectionWrapper>

      {/* Latest writing */}
      <SectionWrapper>
        <SectionHeading eyebrow="Journal" title="From the community" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.07}>
              <Card className="h-full">
                <Tag>{post.category}</Tag>
                <h3 className="mt-4 font-display text-lg font-semibold">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <p className="mt-5 font-mono text-xs text-muted-foreground">
                  {post.author} · {post.readTime}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-8">
          <ButtonLink href="/blog" variant="outline" size="sm">
            Read the blog
          </ButtonLink>
        </Reveal>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-14 text-center sm:px-12">
            <div
              aria-hidden="true"
              className="grid-canvas pointer-events-none absolute inset-0"
            />
            <div className="relative mx-auto max-w-xl">
              <p className="eyebrow">Ready when you are</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Bring a question. Leave with collaborators.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Joining takes a minute and costs nothing. The rest happens in Slack.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ButtonAnchor
                  href={SLACK_INVITE_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  size="lg"
                >
                  Join our Slack
                </ButtonAnchor>
                <ButtonLink href="/contact" variant="outline" size="lg">
                  Get in touch
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionWrapper>
    </PageTransition>
  );
}
