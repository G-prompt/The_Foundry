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

// TODO: replace placeholder organizers with real people and avatar images.
const organizers = [
  { name: "Ada Okonkwo", role: "Community Lead", initials: "AO" },
  { name: "Miguel Santos", role: "Events", initials: "MS" },
  { name: "Lin Wei", role: "Open Source", initials: "LW" },
  { name: "Priya Raman", role: "Learning Programs", initials: "PR" },
];

const timeline = [
  {
    year: "2023",
    title: "A group chat that wouldn't stop",
    body: "Six engineers reviewing each other's side projects on weekends. No name, no schedule, just momentum.",
  },
  {
    year: "2024",
    title: "The first Forge weekend",
    body: "Forty people, one rented room, nine repos. We wrote everything down and open-sourced the playbook.",
  },
  {
    year: "2025",
    title: "Programs, not just events",
    body: "Reading groups, mentor office hours, and a public project board turned bursts into a rhythm.",
  },
  {
    year: "Today",
    title: "1,200 members building in public",
    body: "Still volunteer-run, still free, still governed in the open by the people who show up.",
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
        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {timeline.map((item, i) => (
            <li key={item.year} className="bg-surface">
              <Reveal delay={i * 0.06} className="h-full p-7">
                <p className="font-mono text-xs tracking-[0.14em] text-accent">{item.year}</p>
                <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
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
        <SectionHeading
          eyebrow="Organizers"
          title="The people keeping the lights on"
          description="Volunteers who run events, review contributions, and answer questions in Slack."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {organizers.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.06}>
              <Card className="h-full items-start">
                <div
                  className="grid size-14 place-items-center rounded-full border border-border bg-secondary font-mono text-sm text-muted-foreground"
                  role="img"
                  aria-label={`${person.name} avatar placeholder`}
                >
                  {person.initials}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{person.name}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{person.role}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>
    </PageTransition>
  );
}
