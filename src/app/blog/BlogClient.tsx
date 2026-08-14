"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";

import { Card, Tag } from "@/components/site/Card";
import { PageHero } from "@/components/site/PageHero";
import { PageTransition } from "@/components/site/Reveal";
import { SectionWrapper } from "@/components/site/SectionWrapper";
import { postCategories, posts, type BlogPost } from "@/data/posts";
import { cn } from "@/lib/utils";

type Filter = "All" | (typeof postCategories)[number];
const filters: Filter[] = ["All", ...postCategories];

function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Card className={cn("h-full", featured && "md:col-span-2")}>
      <div className="flex flex-wrap items-center gap-2">
        <Tag tone="accent">{post.category}</Tag>
        {post.tags.map((tag) => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
      </div>

      <h2
        className={cn(
          "mt-4 font-display font-semibold",
          featured ? "text-2xl sm:text-3xl" : "text-lg",
        )}
      >
        {/* TODO: link to the real post route once posts are wired to MDX/CMS */}
        <a
          href="#"
          className="inline-flex items-start gap-1.5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {post.title}
          <ArrowUpRight className="mt-1 size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
      </h2>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {post.excerpt}
      </p>

      <footer className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-border pt-4 font-mono text-xs text-muted-foreground">
        <span className="text-foreground">{post.author}</span>
        <span aria-hidden="true">·</span>
        <span>{post.role}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={post.date}>{post.dateLabel}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readTime}</span>
      </footer>
    </Card>
  );
}

export function BlogClient() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () => posts.filter((p) => filter === "All" || p.category === filter),
    [filter],
  );

  return (
    <PageTransition>
      <PageHero
        eyebrow="Blog"
        title="Written by members, for members."
        description="Postmortems, tutorials, and honest write-ups from people mid-project — not polished thought leadership."
      />

      <SectionWrapper>
        <div role="tablist" aria-label="Filter posts by category" className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                filter === item
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-surface text-muted-foreground hover:border-accent hover:text-accent",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((post, i) => (
              <PostCard key={post.slug} post={post} featured={i === 0 && filter === "All"} />
            ))}
          </motion.div>
        </AnimatePresence>

        {visible.length === 0 ? (
          <p className="mt-10 rounded-xl border border-dashed border-border p-8 text-sm text-muted-foreground">
            No posts in this category yet.
          </p>
        ) : null}
      </SectionWrapper>
    </PageTransition>
  );
}
