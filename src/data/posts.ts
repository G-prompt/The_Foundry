export type PostCategory = "Engineering" | "Community" | "Open Source" | "Learning";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  role: string;
  date: string; // ISO
  dateLabel: string;
  readTime: string;
  category: PostCategory;
  tags: string[];
}

export const postCategories: PostCategory[] = [
  "Engineering",
  "Community",
  "Open Source",
  "Learning",
];

// TODO: replace sample posts with MDX / CMS content.
export const posts: BlogPost[] = [
  {
    slug: "why-we-build-in-public",
    title: "Why we build in public",
    excerpt:
      "Working in the open is slower on day one and faster by week three. Notes on how The Foundry runs its repos, reviews, and retros where anyone can read along.",
    author: "Ada Okonkwo",
    role: "Organizer",
    date: "2026-08-02",
    dateLabel: "Aug 2, 2026",
    readTime: "6 min read",
    category: "Community",
    tags: ["culture", "open-source"],
  },
  {
    slug: "first-pull-request",
    title: "Your first pull request, without the fear",
    excerpt:
      "A step-by-step path from cloning a repo to a merged contribution — including the unglamorous parts nobody writes tutorials about.",
    author: "Miguel Santos",
    role: "Member",
    date: "2026-07-21",
    dateLabel: "Jul 21, 2026",
    readTime: "9 min read",
    category: "Open Source",
    tags: ["git", "beginners"],
  },
  {
    slug: "reading-source-code",
    title: "How to read source code you didn't write",
    excerpt:
      "Entry points, call graphs, and the two questions we ask before touching a single line of an unfamiliar codebase.",
    author: "Lin Wei",
    role: "Mentor",
    date: "2026-07-04",
    dateLabel: "Jul 4, 2026",
    readTime: "7 min read",
    category: "Engineering",
    tags: ["craft", "debugging"],
  },
  {
    slug: "hackathon-postmortem",
    title: "Postmortem: what nine teams shipped in 48 hours",
    excerpt:
      "Scope, sleep, and the surprising correlation between the smallest idea and the most finished demo at Winter Build Weekend.",
    author: "Priya Raman",
    role: "Organizer",
    date: "2026-06-18",
    dateLabel: "Jun 18, 2026",
    readTime: "5 min read",
    category: "Community",
    tags: ["hackathon", "recap"],
  },
  {
    slug: "learning-in-groups",
    title: "Learning in groups beats learning alone",
    excerpt:
      "What a year of reading groups taught us about pacing, accountability, and why the person explaining learns the most.",
    author: "Tomas Bauer",
    role: "Member",
    date: "2026-05-30",
    dateLabel: "May 30, 2026",
    readTime: "4 min read",
    category: "Learning",
    tags: ["study-groups", "notes"],
  },
  {
    slug: "maintaining-small-libraries",
    title: "The quiet work of maintaining a small library",
    excerpt:
      "Issue triage, semver discipline, and saying no kindly — a maintainer's field notes after 300 stars and 900 issues.",
    author: "Sara Nilsen",
    role: "Maintainer",
    date: "2026-05-11",
    dateLabel: "May 11, 2026",
    readTime: "8 min read",
    category: "Open Source",
    tags: ["maintenance", "semver"],
  },
];
