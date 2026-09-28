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

export const posts: BlogPost[] = [];
