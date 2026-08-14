import type { Metadata } from "next";
import { Mail, Slack } from "lucide-react";

import { ButtonAnchor } from "@/components/site/Button";
import { Card } from "@/components/site/Card";
import { PageHero } from "@/components/site/PageHero";
import { PageTransition, Reveal } from "@/components/site/Reveal";
import { SectionWrapper } from "@/components/site/SectionWrapper";
import { CONTACT_EMAIL, SLACK_INVITE_URL, socials } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact & Slack — The Foundry",
  description:
    "Get in touch with The Foundry organizers, or join the community Slack where projects, questions, and code review happen every day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact The Foundry",
    description: "Send us a message or join the community Slack.",
    url: "/contact",
  },
};

export default function Contact() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Contact"
        title="Say hello, or just show up."
        description="Questions about events, partnerships, or joining a project? Send a note — or skip the formalities and jump straight into Slack."
      />

      <SectionWrapper className="pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <Card className="hover:translate-y-0 hover:border-border hover:shadow-none">
              <h2 className="font-display text-2xl font-semibold">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We read everything and usually reply within a few days.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Card>
          </Reveal>

          <div className="flex flex-col gap-5">
            {/* Slack join section */}
            <Reveal delay={0.08}>
              <div className="relative overflow-hidden rounded-xl border border-accent/40 bg-accent-soft p-7">
                <Slack className="size-6 text-accent" aria-hidden="true" />
                <h2 className="mt-4 font-display text-2xl font-semibold">Join our Slack</h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  This is where The Foundry actually lives: project channels, code review,
                  weekly office hours, and event announcements.
                </p>
                <ButtonAnchor
                  href={SLACK_INVITE_URL} // TODO: replace with real Slack invite link
                  target="_blank"
                  rel="noreferrer noopener"
                  size="lg"
                  className="mt-6 w-full"
                >
                  Join our Slack
                </ButtonAnchor>
                <p className="mt-3 font-mono text-xs text-foreground/60">
                  Free, open to everyone, no approval queue.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <Card className="hover:translate-y-0 hover:border-border hover:shadow-none">
                <h2 className="eyebrow">Other ways to reach us</h2>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex rounded-md border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
}
