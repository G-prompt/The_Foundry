"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { ButtonAnchor, ButtonLink } from "./Button";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, SLACK_INVITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link
      href="/"
      className="group flex min-w-0 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="The Foundry — home"
    >
      <span className="grid size-8 shrink-0 place-items-center rounded-md bg-primary font-mono text-sm font-bold text-primary-foreground transition-colors group-hover:bg-accent">
        F
      </span>
      <span className="truncate font-display text-base font-semibold tracking-tight">
        The Foundry
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-8">
        <Logo />

        <div className="flex items-center gap-1.5">
          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  pathname === link.to && "text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex md:items-center md:gap-1.5">
            <ThemeToggle />
            <ButtonAnchor
              href={SLACK_INVITE_URL}
              target="_blank"
              rel="noreferrer noopener"
              size="sm"
            >
              Join the Community
            </ButtonAnchor>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 shrink-0 place-items-center rounded-md border border-border bg-surface text-foreground md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-t border-border bg-surface md:hidden"
          >
            <nav aria-label="Mobile" className="mx-auto max-w-6xl px-5 py-4">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      href={link.to}
                      className={cn(
                        "block rounded-md px-2 py-3 font-display text-lg text-foreground transition-colors hover:text-accent",
                        pathname === link.to && "text-accent",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center gap-3">
                <ThemeToggle />
                <ButtonAnchor
                  href={SLACK_INVITE_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex-1"
                >
                  Join the Community
                </ButtonAnchor>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export { ButtonLink };
