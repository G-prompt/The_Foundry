# The Foundry

**The Foundry** is an open-source community where brilliant minds meet to share ideas and resources, collaborate on real projects, and learn together — out loud, in public.

This repo is the community's marketing/community site: a fast, techy, minimal multi-page website built with Next.js.

## Purpose

The Foundry exists because building alone is slower and lonelier than it needs to be. This site is the front door to that community — it explains who we are, what we stand for, what's happening next, and how to join in. Concretely, the site is meant to:

- Introduce newcomers to the community and what membership actually looks like (**About**)
- Lay out the mission and core values that guide how the community operates (**Mission**)
- Provide curated free technical learning resources and pathways to build together (**Free Library**)
- Surface what's on — hackathons, seminars, and other tech events — both upcoming and past (**Events**)
- Share field notes and write-ups from members (**Blog**)
- Make it easy to get in touch and join the community Slack, where day-to-day collaboration happens (**Contact**)

## Pages

| Route               | Description                                                                     |
| ------------------- | ------------------------------------------------------------------------------- |
| `/`                 | Landing page — hero, community stats, highlights, upcoming events, latest posts |
| `/about`            | Origin story, what members can expect, organizer profiles                       |
| `/mission`          | Mission statement, core values, vision                                           |
| `/library`          | Curated free technical courses with pathways to discuss and build on Slack      |
| `/library/callback` | Return page with community guidance after completing external courses           |
| `/events`           | Filterable hackathons, seminars, and other tech events (upcoming + past)        |
| `/blog`             | Filterable member write-ups and field notes                                     |
| `/contact`          | Contact form powered by Formspree + **Join our Slack** section and direct info   |

## Tech stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS v4** — light, minimal, techy design system with light and dark mode support
- **next-themes** — theme management and dark/light mode toggle
- **Framer Motion** (`motion`) — on-scroll reveals, page transitions, animated mobile navigation
- **lucide-react** for icons
- **Formspree** — AJAX contact form submission with live status handling

## Project structure

```
src/
  app/
    layout.tsx            Root layout — fonts, ThemeProvider, Header, Footer
    page.tsx               Home
    about/page.tsx         About page
    mission/page.tsx       Mission page
    library/
      page.tsx             Free course library (server component)
      callback/page.tsx    Post-course return & community orientation
    events/
      page.tsx             Metadata (server component)
      EventsClient.tsx      Filterable event grid (client component)
    blog/
      page.tsx             Metadata (server component)
      BlogClient.tsx        Filterable post grid (client component)
    contact/
      page.tsx             Slack section + contact info
      ContactForm.tsx       Formspree-connected contact form (client component)
    loading.tsx            Global route transition & workspace loading animation
    not-found.tsx          Custom 404
    error.tsx               Error boundary
    globals.css             Tailwind v4 theme tokens + custom animations & design system
  components/site/          Shared UI: Header, Footer, Button, Card, Reveal, PageHero, SectionWrapper, ThemeToggle
  data/
    events.ts               Sample event data (typed) — swap for real events or a CMS
    posts.ts                 Sample blog post data (typed) — swap for real posts or a CMS
  lib/
    site.ts                 Site-wide constants: nav links, Slack URL, Formspree endpoint, contact email, socials
    utils.ts                 `cn()` class-merging helper
```

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Things to swap before launch

A few placeholders or configurations can be customized before launch:

- **`src/lib/site.ts`** — verify `SLACK_INVITE_URL`, `COURSE_LIBRARY_URL`, `CONTACT_EMAIL`, `FORMSPREE_ENDPOINT`, and update `socials` with real GitHub/X/LinkedIn profile URLs
- **`src/components/site/Footer.tsx`** — social icon links
- **`src/data/events.ts`** — sample events; wire up to real events or a CMS
- **`src/data/posts.ts`** — sample blog posts; wire up to MDX or a CMS
- **`src/app/about/page.tsx`** — placeholder organizer names/initials; swap for real people and avatars
