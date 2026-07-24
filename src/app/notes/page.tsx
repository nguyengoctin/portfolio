import { notes } from "#site/content";
import { ContentListPage } from "@/components/ContentListPage";

export default function NotesListPage() {
  return (
    <ContentListPage
      title="Notes"
      description="A collection of technical notes, code snippets, and personal thoughts."
      emptyText="No notes published yet."
      items={notes}
      itemTypeBadge="note"
      basePath="/notes"
    />
  );
}

