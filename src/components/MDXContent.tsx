"use client";

import * as React from "react";
import * as jsxRuntime from "react/jsx-runtime";

interface MDXProps {
  code: string;
}

export function MDXContent({ code }: MDXProps) {
  // Velite biên dịch MDX sử dụng jsxRuntime (jsx, jsxs, Fragment)
  const Component = React.useMemo(() => {
    const fn = new Function(code);
    return fn(jsxRuntime).default;
  }, [code]);

  return (
    <article className="prose dark:prose-invert max-w-none prose-headings:font-serif prose-a:text-[var(--accent)] prose-[pre]:bg-[#1e1e1e] prose-[pre]:p-4 prose-[pre]:rounded-lg">
      <Component />
    </article>
  );
}
