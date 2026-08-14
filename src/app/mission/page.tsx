import type { Metadata } from "next";
import { Compass, GitFork, Hammer, Users } from "lucide-react";

import { ButtonLink } from "@/components/site/Button";
import { Card } from "@/components/site/Card";
import { PageHero } from "@/components/site/PageHero";
import { PageTransition, Reveal } from "@/components/site/Reveal";
import { SectionHeading, SectionWrapper } from "@/components/site/SectionWrapper";

export const metadata: Metadata = {
  title: "Mission & Values — The Foundry",
  description:
    "Our mission, our core values — open collaboration, learning by building, community-driven, open source first — and where The Foundry is heading next.",
  alternates: { canonical: "/mission" },
  openGraph: {
    title: "Mission & Values — The Foundry",
    description: "What The Foundry stands for and where the community is heading.",
    url: "/mission",
  },
};

const values = [
  {
    Icon: Users,
    title: "Open Collaboration",
    body: "Work happens in shared repos and public threads. Credit is distributed, decisions are documented, and newcomers can catch up by reading.",
  },
  {
    Icon: Hammer,
    title: "Learning by Building",
    body: "We prefer a rough working prototype over a perfect plan. Understanding follows the thing you shipped, not the other way round.",
  },
  {
    Icon: Compass,
    title: "Community-Driven",
    body: "Programs exist because members proposed and ran them. If something is missing, the path to fixing it is short and obvious.",
  },
  {
    Icon: GitFork,
    title: "Open Source First",
    body: "Default to permissive licenses and public issue trackers. What we learn together should outlive whoever wrote it.",
  },
];

const vision = [
  {
    title: "A public library of practice",
    body: "Every seminar, reading group, and hackathon leaves behind notes and code anyone can use, forever.",
  },
  {
    title: "Chapters that run themselves",
    body: "Local groups with the same playbook, the same openness, and full autonomy over their calendar.",
  },
  {
    title: "Maintainers with support",
    body: "Funding, review help, and mentorship for the small projects the ecosystem quietly depends on.",
  },
];

export default function Mission() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Mission"
        title="Make building together the default."
        description="We exist to give curious builders a place where knowledge circulates freely, collaboration is the norm rather than the exception, and everything we make stays open for the next person."
      >
        <ButtonLink href="/events">See what we run</ButtonLink>
      </PageHero>

      <SectionWrapper>
        <Reveal>
          <blockquote className="rounded-2xl border border-border bg-surface p-8 sm:p-12">
            <p className="eyebrow">Mission statement</p>
            <p className="mt-5 font-display text-2xl font-medium leading-snug sm:text-3xl">
              &ldquo;The Foundry brings brilliant minds into one room — physical or virtual — to
              share ideas and resources, collaborate on open-source projects, and learn faster
              together than any of us could alone.&rdquo;
            </p>
          </blockquote>
        </Reveal>
      </SectionWrapper>

      <SectionWrapper className="border-y border-border bg-surface pt-0 md:pt-0">
        <div className="pt-16 md:pt-24">
          <SectionHeading eyebrow="Core values" title="Four commitments we hold each other to" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <Card className="h-full bg-background">
                  <Icon className="size-5 text-accent" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="pb-24">
        <SectionHeading
          eyebrow="Vision"
          title="Where we're heading"
          description="Three things we want to be true about The Foundry in a few years."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {vision.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <Card className="h-full">
                <span className="font-mono text-xs text-accent">{`0${i + 1}`}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>
    </PageTransition>
  );
}
