import { notes, Note } from "#site/content";

export interface BacklinkItem {
  title: string;
  slug: string;
  excerpt?: string;
}

/**
 * Hàm tìm tất cả các ghi chú trỏ ngược lại ghi chú hiện tại (targetSlug)
 */
export function getBacklinks(targetSlug: string): BacklinkItem[] {
  const currentPath = `/notes/${targetSlug}`;

  return notes
    .filter((note) => {
      // Không tự trỏ chính nó
      if (note.slug === targetSlug) return false;

      // Kiểm tra xem nội dung ghi chú có chứa đường dẫn trỏ tới targetSlug hay không
      return note.body.includes(currentPath) || note.body.includes(`[[${targetSlug}]]`);
    })
    .map((note) => ({
      title: note.title,
      slug: note.slug,
    }));
}
