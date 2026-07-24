import { posts } from "#site/content";
import { ContentListPage } from "@/components/ContentListPage";

export default function BlogListPage() {
  return (
    <ContentListPage
      title="Blog"
      description="Deep dives into software engineering, technical insights, and web development."
      emptyText="No blog posts published yet."
      items={posts}
      itemTypeBadge="post"
      basePath="/blog"
    />
  );
}

