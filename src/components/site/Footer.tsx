import Link from "next/link";
import { Slack } from "lucide-react";

import { ButtonAnchor } from "./Button";
import Image from "next/image";
import { CONTACT_EMAIL, navLinks, SLACK_INVITE_URL, socials } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div className="min-w-0">
            <div className="flex items-center gap-2.5">
              <Image
                src="/foundry.png"
                width={50}
                height={50}
                alt="The Foundry logo"
                className="brightness-0 dark:invert"
              />
              <span className="font-display text-base font-semibold">The Foundry</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              An open-source community where brilliant minds share ideas, build together, and
              learn out loud.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ label }) => (
                <span
                  key={label}
                  className="rounded-md border border-border px-2.5 py-1.5 font-mono text-xs text-muted-foreground"
                >
                  {label} · Coming soon
                </span>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="rounded-xl border border-border bg-background p-6">
            <Slack className="size-5 text-accent" aria-hidden="true" />
            <h2 className="mt-3 font-display text-lg font-semibold">Come build with us</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Most of the day-to-day happens in Slack — questions, code review, and project
              threads.
            </p>
            <ButtonAnchor
              href={SLACK_INVITE_URL}
              target="_blank"
              rel="noreferrer noopener"
              size="sm"
              className="mt-4 w-full"
            >
              Join our Slack
            </ButtonAnchor>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono">© {new Date().getFullYear()} The Foundry</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-mono transition-colors hover:text-foreground"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
