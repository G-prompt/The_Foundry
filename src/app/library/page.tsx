import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, BookOpen, MessagesSquare, Users } from "lucide-react";

import { ButtonAnchor, ButtonLink } from "@/components/site/Button";
import { Card, Tag } from "@/components/site/Card";
import { PageHero } from "@/components/site/PageHero";
import { PageTransition, Reveal } from "@/components/site/Reveal";
import { SectionWrapper } from "@/components/site/SectionWrapper";
import { COURSE_LIBRARY_URL, SLACK_INVITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Learning Library — The Foundry",
  description:
    "Start with free technical courses, then bring your questions and projects to The Foundry community on Slack.",
  alternates: { canonical: "/library" },
  openGraph: {
    title: "Free Learning Library — The Foundry",
    description: "Learn at your own pace, then build alongside other professionals.",
    url: "/library",
  },
};

const communitySpaces = [
  {
    Icon: MessagesSquare,
    title: "General discussion",
    body: "Share what you are learning, ask for direction, and meet people working across the industry.",
  },
  {
    Icon: Users,
    title: "Hands-on groups",
    body: "Turn a course into practice with project threads, pairing, feedback, and working sessions.",
  },
  {
    Icon: BookOpen,
    title: "Technical support",
    body: "Bring the bug, the architecture question, or the problem you cannot quite untangle yet.",
  },
];

export default function Library() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Free learning library"
        title="Learn something useful. Then build it with people."
        description="Start with a free technical course from our recommended library. When you are ready to go deeper, bring your questions, projects, and progress back to The Foundry."
      >
        <ButtonAnchor
          href={COURSE_LIBRARY_URL}
          target="_blank"
          rel="noreferrer noopener"
          size="lg"
        >
          Browse free courses <ArrowUpRight className="size-4" />
        </ButtonAnchor>
        <ButtonLink href="/library/callback" variant="outline" size="lg">
          Return to The Foundry
        </ButtonLink>
      </PageHero>

      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">A simple path forward</p>
            <h2 className="mt-3 max-w-lg text-3xl font-semibold sm:text-4xl">
              Learn at your pace. Return with better questions.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              The library gives you a place to start. The Foundry gives you people to learn
              with, practical context, and a place to keep going when the course ends.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {[
              ["01", "Choose a course", "Open the external library and find a topic that matches your next goal."],
              ["02", "Download or start learning", "Use the course provider's own tools and materials to learn hands-on."],
              ["03", "Come back and connect", "Join the Slack community for technical insight, support, and collaboration."],
            ].map(([number, title, body], index) => (
              <Reveal key={number} delay={index * 0.08}>
                <div className="grid grid-cols-[auto_1fr] gap-4 border-t border-border py-5">
                  <span className="font-mono text-sm text-accent">{number}</span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="community" className="border-y border-border bg-surface">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow">Bring it back here</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">The course is only the beginning.</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            When you return to The Foundry, you get the part a course cannot provide: people who
            can compare approaches, review your work, and help you keep momentum.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {communitySpaces.map(({ Icon, title, body }, index) => (
            <Reveal key={title} delay={index * 0.07}>
              <Card className="h-full bg-background">
                <Icon className="size-5 text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-10">
          <ButtonAnchor
            href={SLACK_INVITE_URL}
            target="_blank"
            rel="noreferrer noopener"
            size="lg"
          >
            Join the Slack community <ArrowUpRight className="size-4" />
          </ButtonAnchor>
        </Reveal>
      </SectionWrapper>

      <SectionWrapper className="pb-24">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-5 border-t border-border pt-8">
            <div>
              <Tag tone="accent">Keep building</Tag>
              <p className="mt-3 text-sm text-muted-foreground">
                Free resources get you moving. Community helps you go further.
              </p>
            </div>
            <ButtonLink href="/events" variant="outline" size="sm">
              See upcoming events <ArrowLeft className="size-4 rotate-180" />
            </ButtonLink>
          </div>
        </Reveal>
      </SectionWrapper>
    </PageTransition>
  );
}