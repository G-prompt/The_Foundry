import type { Metadata } from "next";

import { EventsClient } from "./EventsClient";

export const metadata: Metadata = {
  title: "Events — Hackathons, Seminars & Meetups | The Foundry",
  description:
    "Browse The Foundry's upcoming and past events: 48-hour hackathons, technical seminars, reading groups, and open office hours — in person and virtual.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Events — The Foundry",
    description: "Hackathons, seminars, and community sessions run by The Foundry.",
    url: "/events",
  },
};

export default function Events() {
  return <EventsClient />;
}
