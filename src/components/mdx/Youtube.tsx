import React from "react";
export function Youtube({ id }: { id: string }) {
  return (
    <div className="my-5 rounded-xl overflow-hidden border border-[var(--border)] aspect-video w-full bg-black shadow-xs">
      <iframe className="w-full h-full border-0" src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </div>
  );
}
