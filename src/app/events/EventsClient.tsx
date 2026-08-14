"use client";

import { AnimatePresence, motion } from "motion/react";
import { CalendarDays, MapPin } from "lucide-react";
import { useMemo, useState } from "react";

import { ButtonAnchor } from "@/components/site/Button";
import { Card, Tag } from "@/components/site/Card";
import { PageHero } from "@/components/site/PageHero";
import { PageTransition } from "@/components/site/Reveal";
import { SectionHeading, SectionWrapper } from "@/components/site/SectionWrapper";
import { eventCategories, events, type FoundryEvent } from "@/data/events";
import { cn } from "@/lib/utils";
import { SLACK_INVITE_URL } from "@/lib/site";

type Filter = "All" | (typeof eventCategories)[number];
const filters: Filter[] = ["All", ...eventCategories];

function EventCard({ event }: { event: FoundryEvent }) {
  const isPast = event.status === "past";

  return (
    <Card className="h-full">
      <div className="flex flex-wrap items-center gap-2">
        <Tag tone="accent">{event.category}</Tag>
        <Tag>{event.format}</Tag>
        {isPast ? <Tag>Recap</Tag> : null}
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold">{event.title}</h3>

      <dl className="mt-3 space-y-1.5 font-mono text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <dt className="sr-only">Date</dt>
          <CalendarDays className="size-3.5 shrink-0" aria-hidden="true" />
          <dd>{event.dateLabel}</dd>
        </div>
        <div className="flex items-center gap-2">
          <dt className="sr-only">Location</dt>
          <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
          <dd>{event.location}</dd>
        </div>
      </dl>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {event.description}
      </p>

      {/* TODO: point href at the real RSVP or recap page */}
      <ButtonAnchor
        href={event.href}
        variant={isPast ? "outline" : "accent"}
        size="sm"
        className="mt-6 self-start"
      >
        {isPast ? "Read the recap" : "RSVP"}
      </ButtonAnchor>
    </Card>
  );
}

function EventGrid({ items }: { items: FoundryEvent[] }) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={items.map((i) => i.id).join("-")}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export function EventsClient() {
  const [filter, setFilter] = useState<Filter>("All");

  const { upcoming, past } = useMemo(() => {
    const visible = events.filter((e) => filter === "All" || e.category === filter);
    return {
      upcoming: visible.filter((e) => e.status === "upcoming"),
      past: visible.filter((e) => e.status === "past"),
    };
  }, [filter]);

  return (
    <PageTransition>
      <PageHero
        eyebrow="Events"
        title="Show up, build something, go home tired."
        description="Hackathons that ship, seminars that go deep, and low-key sessions where you can just ask the question you've been sitting on."
      >
        <ButtonAnchor href={SLACK_INVITE_URL} target="_blank" rel="noreferrer noopener">
          Get event invites in Slack
        </ButtonAnchor>
      </PageHero>

      <SectionWrapper>
        <div
          role="tablist"
          aria-label="Filter events by category"
          className="flex flex-wrap gap-2"
        >
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                filter === item
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-surface text-muted-foreground hover:border-accent hover:text-accent",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-14">
          <SectionHeading eyebrow="Upcoming" title="Next up" />
          {upcoming.length ? (
            <EventGrid items={upcoming} />
          ) : (
            <p className="mt-8 rounded-xl border border-dashed border-border p-8 text-sm text-muted-foreground">
              Nothing scheduled in this category yet — check Slack for new announcements.
            </p>
          )}
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="Archive" title="Past events" />
          {past.length ? (
            <EventGrid items={past} />
          ) : (
            <p className="mt-8 rounded-xl border border-dashed border-border p-8 text-sm text-muted-foreground">
              No archived events in this category.
            </p>
          )}
        </div>
      </SectionWrapper>
    </PageTransition>
  );
}
