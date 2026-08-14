import type { Metadata } from "next";

import { BlogClient } from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog — Notes from The Foundry community",
  description:
    "Essays and field notes from Foundry members on engineering craft, open-source maintenance, community, and learning in public.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — The Foundry",
    description: "Field notes on engineering, open source, and learning in public.",
    url: "/blog",
    type: "website",
  },
};

export default function Blog() {
  return <BlogClient />;
}
