import type { Metadata } from "next";

import { ButtonAnchor } from "@/components/site/Button";
import { Card, Tag } from "@/components/site/Card";
import { PageHero } from "@/components/site/PageHero";
import { PageTransition, Reveal } from "@/components/site/Reveal";
import { SectionHeading, SectionWrapper } from "@/components/site/SectionWrapper";
import { SLACK_INVITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — The Foundry",
  description:
    "How The Foundry started, what the community does, and what members can expect: idea sharing, resource sharing, project collaboration, and learning together.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About The Foundry",
    description: "The origin story of The Foundry and what members can expect from it.",
    url: "/about",
  },
};

const expectations = [
  {
    title: "Idea sharing",
    body: "A dedicated space for rough ideas. Members respond with prior art, constraints, and honest scepticism — the useful kind.",
  },
  {
    title: "Resource sharing",
    body: "Notes, templates, reading lists, and tooling recommendations, curated by people who use them in production.",
  },
  {
    title: "Project collaboration",
    body: "Every project has an issue board and a maintainer who wants help. Pick something small and pair up.",
  },
  {
    title: "Learning together",
    body: "Reading groups and seminars run on a schedule, with notes published afterwards so nobody falls behind.",
  },
];

export default function About() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="About"
        title="A workshop, not an audience."
        description="The Foundry exists because building alone is slower and lonelier than it needs to be. We are a community of engineers, designers, and researchers who share what we know and make things together in the open."
      >
        <ButtonAnchor href={SLACK_INVITE_URL} target="_blank" rel="noreferrer noopener">
          Join the Community
        </ButtonAnchor>
      </PageHero>

      <SectionWrapper>
        <SectionHeading eyebrow="Our story" title="How we got here" />
        <p className="mt-8 max-w-2xl border-y border-border py-6 text-sm leading-relaxed text-muted-foreground">
          The Foundry is taking shape. Our story will appear here as the community grows.
        </p>
      </SectionWrapper>

      <SectionWrapper className="border-y border-border bg-surface">
        <SectionHeading
          eyebrow="What to expect"
          title="Four things members rely on"
          description="No gatekeeping, no lurker shame. Take what is useful, give back when you can."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {expectations.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <Card className="h-full bg-background">
                <Tag tone="accent">{`0${i + 1}`}</Tag>
                <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="pb-24">
        <SectionHeading eyebrow="Organizers" title="Meet the team" />
        <p className="mt-8 max-w-2xl border-y border-border py-6 text-sm leading-relaxed text-muted-foreground">
          Team profiles are coming soon.
        </p>
      </SectionWrapper>
    </PageTransition>
  );
}
