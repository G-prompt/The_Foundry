import type { Metadata } from "next";

import { EventsClient } from "./EventsClient";

export const metadata: Metadata = {
  title: "Events — Hackathons, Seminars & Meetups | The Foundry",
  description: "The Foundry's event calendar is coming soon.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Events — The Foundry",
    description: "The Foundry's event calendar is coming soon.",
    url: "/events",
  },
};

export default function Events() {
  return <EventsClient />;
}
