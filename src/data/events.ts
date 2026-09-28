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

export const events: FoundryEvent[] = [];
