export const SLACK_INVITE_URL =
  "https://join.slack.com/t/thefoundry-ozc6204/shared_invite/zt-49d7jiemb-WC8d70C0vvbnwSAAYI7Gkg";

export const COURSE_LIBRARY_URL = "https://www.psdly.co.uk/free-course";

export const CONTACT_EMAIL = "thefoundrymeet@gmail.com";
export const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
  (process.env.NEXT_PUBLIC_FORMSPREE_KEY
    ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_KEY}`
    : "https://formspree.io/f/mnpqwdye");

export const socials = [
  { label: "GitHub" },
  { label: "X" },
  { label: "LinkedIn" },
] as const;

export const navLinks = [
  { label: "About", to: "/about" },
  { label: "Mission", to: "/mission" },
  { label: "Free library", to: "/library" },
  { label: "Events", to: "/events" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;
