import { defineCollection, defineConfig, s } from "velite";
import remarkGfm from "remark-gfm";
import remarkWikiLink from "remark-wiki-link";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeShiki from "@shikijs/rehype";

// Helper lọc bảo mật dữ liệu public
const filterPublic = <T extends { publish?: boolean }>(items: T[]) => items?.filter((item) => item.publish === true) ?? [];

// 1. Schema cho Bài Viết Blog
const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.{md,mdx}",
  schema: s
    .object({
      title: s.string(),
      slug: s.path(),
      date: s.isodate(),
      description: s.string(),
      publish: s.boolean().default(false), // Mặc định private
      tags: s.array(s.string()).default([]),
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slug: data.slug.replace(/^blog\//, ""),
    })),
});

// 2. Schema cho Second Brain Notes (Digital Garden)
const notes = defineCollection({
  name: "Note",
  pattern: "notes/**/*.{md,mdx}",
  schema: s
    .object({
      title: s.string(),
      slug: s.path(),
      date: s.isodate(),
      publish: s.boolean().default(false), // Mặc định private
      tags: s.array(s.string()).default([]),
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slug: data.slug.replace(/^notes\//, ""),
    })),
});

// 3. Schema cho Dự Án Portfolio
const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.{md,mdx}",
  schema: s
    .object({
      title: s.string(),
      slug: s.path(),
      description: s.string(),
      publish: s.boolean().default(false), // Mặc định private
      techStack: s.array(s.string()),
      demoUrl: s.string().url().optional(),
      githubUrl: s.string().url().optional(),
      order: s.number().default(0),
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slug: data.slug.replace(/^projects\//, ""),
    })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts, notes, projects },
  // Lọc Bảo Mật Tối Giản & Clean
  prepare: (collections) => {
    collections.posts = filterPublic(collections.posts);
    collections.notes = filterPublic(collections.notes);
    collections.projects = filterPublic(collections.projects);
  },
  mdx: {
    remarkPlugins: [
      remarkGfm,
      [remarkWikiLink, { hrefTemplate: (permalink: string) => `/notes/${permalink}` }],
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: { className: ["subheading-anchor"] },
        },
      ],
      [
        rehypeShiki,
        {
          theme: "github-dark-dimmed",
        },
      ],
    ],
  },
});
