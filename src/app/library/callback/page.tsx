import type { Metadata } from "next";
import { ArrowRight, MessageCircle } from "lucide-react";

import { ButtonLink } from "@/components/site/Button";
import { PageHero } from "@/components/site/PageHero";
import { PageTransition } from "@/components/site/Reveal";
import { SectionWrapper } from "@/components/site/SectionWrapper";

export const metadata: Metadata = {
  title: "Welcome Back — The Foundry",
  description: "Continue learning with The Foundry community.",
  alternates: { canonical: "/library/callback" },
};

export default function LibraryCallback() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Welcome back"
        title="Keep the learning going."
        description="You are back at The Foundry. Bring what you learned, the bug you found, or the project you want to build into the community."
      >
        <ButtonLink href="/events">
          See upcoming events <ArrowRight className="size-4" />
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Get in touch
        </ButtonLink>
      </PageHero>

      <SectionWrapper className="pb-24">
        <div className="max-w-2xl border-t border-border pt-8">
          <MessageCircle className="size-5 text-accent" aria-hidden="true" />
          <h2 className="mt-4 font-display text-2xl font-semibold">Bring your questions to Slack</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            This site does not currently receive download callbacks, so this page can be opened
            manually after you finish learning. The community is where discussion, support, and
            collaboration continue.
          </p>
          <ButtonLink href="/contact" variant="ghost" size="sm" className="mt-5">
            Join the conversation <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
}
