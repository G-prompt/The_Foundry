export type EventCategory = "Hackathons" | "Seminars" | "Other Tech Events";
export type EventFormat = "In-person" | "Virtual" | "Hybrid";

export interface FoundryEvent {
  id: string;
  title: string;
  date: string; // ISO date
  dateLabel: string;
  location: string;
  format: EventFormat;
  category: EventCategory;
  description: string;
  status: "upcoming" | "past";
  /** TODO: replace with real RSVP / recap URLs */
  href: string;
}

export const eventCategories: EventCategory[] = [
  "Hackathons",
  "Seminars",
  "Other Tech Events",
];

// TODO: replace sample events with real data (or fetch from a CMS).
export const events: FoundryEvent[] = [
  {
    id: "forge-48",
    title: "Forge 48: Open Source Hackathon",
    date: "2026-09-12",
    dateLabel: "Sep 12–14, 2026",
    location: "Lagos + Discord",
    format: "Hybrid",
    category: "Hackathons",
    description:
      "48 hours to ship a working open-source tool with a team you met the same morning. Mentors on site, demo night on Sunday.",
    status: "upcoming",
    href: "#",
  },
  {
    id: "ai-agents-jam",
    title: "Agents Jam",
    date: "2026-10-03",
    dateLabel: "Oct 3, 2026",
    location: "Virtual",
    format: "Virtual",
    category: "Hackathons",
    description:
      "A one-day sprint building small, useful agents. Bring an idea or adopt one from the community backlog.",
    status: "upcoming",
    href: "#",
  },
  {
    id: "winter-build",
    title: "Winter Build Weekend",
    date: "2025-12-06",
    dateLabel: "Dec 6–7, 2025",
    location: "Abuja",
    format: "In-person",
    category: "Hackathons",
    description:
      "Twenty-one teams, nine shipped repos, and one CLI that is now used in production by two members.",
    status: "past",
    href: "#",
  },
  {
    id: "systems-seminar",
    title: "Seminar: Designing Systems That Survive",
    date: "2026-09-25",
    dateLabel: "Sep 25, 2026",
    location: "Virtual",
    format: "Virtual",
    category: "Seminars",
    description:
      "A working session on boundaries, failure modes, and the cost of abstractions — with real incident write-ups.",
    status: "upcoming",
    href: "#",
  },
  {
    id: "type-systems",
    title: "Seminar: Type Systems for Working Engineers",
    date: "2026-11-14",
    dateLabel: "Nov 14, 2026",
    location: "Lagos",
    format: "In-person",
    category: "Seminars",
    description:
      "From narrowing to generics: a practical tour of the type-level tools you actually reach for weekly.",
    status: "upcoming",
    href: "#",
  },
  {
    id: "reading-group",
    title: "Papers Reading Group: Distributed Consensus",
    date: "2026-05-19",
    dateLabel: "May 19, 2026",
    location: "Virtual",
    format: "Virtual",
    category: "Seminars",
    description:
      "We read Raft together, argued about leader election for an hour, and left with annotated notes in the repo.",
    status: "past",
    href: "#",
  },
  {
    id: "open-office",
    title: "Open Office Hours",
    date: "2026-09-05",
    dateLabel: "Every Friday",
    location: "Slack Huddle",
    format: "Virtual",
    category: "Other Tech Events",
    description:
      "Drop in with a stuck branch, a design doc, or a career question. No agenda, just people who ship.",
    status: "upcoming",
    href: "#",
  },
  {
    id: "maintainers-night",
    title: "Maintainers Night",
    date: "2026-10-22",
    dateLabel: "Oct 22, 2026",
    location: "Lagos",
    format: "In-person",
    category: "Other Tech Events",
    description:
      "Three maintainers walk through their issue triage live, then we open PRs together on their repos.",
    status: "upcoming",
    href: "#",
  },
  {
    id: "showcase-01",
    title: "Community Showcase Vol. 1",
    date: "2026-03-08",
    dateLabel: "Mar 8, 2026",
    location: "Virtual",
    format: "Virtual",
    category: "Other Tech Events",
    description:
      "Twelve five-minute demos from members, from a Postgres extension to a hand-rolled font renderer.",
    status: "past",
    href: "#",
  },
];
