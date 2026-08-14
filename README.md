# The Foundry

**The Foundry** is an open-source community where brilliant minds meet to share ideas and resources, collaborate on real projects, and learn together — out loud, in public.

This repo is the community's marketing/community site: a fast, techy, minimal multi-page website built with Next.js.

## Purpose

The Foundry exists because building alone is slower and lonelier than it needs to be. This site is the front door to that community — it explains who we are, what we stand for, what's happening next, and how to join in. Concretely, the site is meant to:

- Introduce newcomers to the community and what membership actually looks like (**About**)
- Lay out the mission and core values that guide how the community operates (**Mission**)
- Surface what's on — hackathons, seminars, and other tech events — both upcoming and past (**Events**)
- Share field notes and write-ups from members (**Blog**)
- Make it easy to get in touch or join the community Slack, which is where the day-to-day collaboration actually happens (**Contact**)

## Pages

| Route       | Description                                                              |
| ----------- | ------------------------------------------------------------------------- |
| `/`         | Landing page — hero, community stats, highlights, upcoming events, latest posts |
| `/about`    | Origin story, what members can expect, organizer profiles                |
| `/mission`  | Mission statement, core values, vision                                    |
| `/events`   | Filterable hackathons, seminars, and other tech events (upcoming + past) |
| `/blog`     | Filterable member write-ups and field notes                              |
| `/contact`  | Contact form + **Join our Slack** section, plus other contact methods    |

## Tech stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS v4** — light, minimal, techy design system (off-white base, near-black ink, one electric-blue accent)
- **Framer Motion** (`motion`) — on-scroll reveals, page transitions, animated mobile nav
- **lucide-react** for icons
- No backend — this is a frontend-only site. The contact form opens the visitor's mail client via `mailto:`; there's no database or API layer.

## Project structure

```
src/
  app/
    layout.tsx          Root layout — fonts, Header, Footer
    page.tsx             Home
    about/page.tsx
    mission/page.tsx
    events/
      page.tsx           Metadata (server component)
      EventsClient.tsx    Filterable event grid (client component)
    blog/
      page.tsx           Metadata (server component)
      BlogClient.tsx      Filterable post grid (client component)
    contact/
      page.tsx           Slack section + contact info
      ContactForm.tsx     mailto: form (client component)
    not-found.tsx        Custom 404
    error.tsx             Error boundary
    globals.css           Tailwind v4 theme tokens + design system
  components/site/        Shared UI: Header, Footer, Button, Card, Reveal, PageHero, SectionWrapper
  data/
    events.ts             Sample event data (typed) — swap for real events or a CMS
    posts.ts               Sample blog post data (typed) — swap for real posts or a CMS
  lib/
    site.ts                 Site-wide constants: nav links, Slack invite URL, contact email, socials
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

A few placeholders are marked `// TODO` in the code and should be replaced with real values:

- **`src/lib/site.ts`** — `SLACK_INVITE_URL` (real Slack invite link), `CONTACT_EMAIL`, `socials` (real GitHub/X/LinkedIn URLs)
- **`src/components/site/Footer.tsx`** — social icon links
- **`src/data/events.ts`** — sample events; wire up to real events or a CMS
- **`src/data/posts.ts`** — sample blog posts; wire up to MDX or a CMS
- **`src/app/about/page.tsx`** — placeholder organizer names/initials; swap for real people and avatars
- **`src/app/contact/ContactForm.tsx`** — currently opens the visitor's mail client (`mailto:`); swap for a real form handler (e.g. Formspree, Resend) if/when a backend exists
