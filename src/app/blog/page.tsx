import type { Metadata } from "next";

import { BlogClient } from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog — Notes from The Foundry community",
  description: "The Foundry community blog is coming soon.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — The Foundry",
    description: "The Foundry community blog is coming soon.",
    url: "/blog",
    type: "website",
  },
};

export default function Blog() {
  return <BlogClient />;
}
