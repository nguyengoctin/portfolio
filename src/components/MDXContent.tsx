"use client";

import * as React from "react";
import * as jsxRuntime from "react/jsx-runtime";
import {
  Callout,
  Quote,
  Toggle,
  Columns,
  Math,
  ToDo,
  Divider,
  Youtube,
  SyncedBlock,
  CopyButton,
} from "@/components/mdx";

interface MDXProps {
  code: string;
}

// 1. H2 — Cyan accent
function CustomH2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  const id = props.id || props.children?.toString().toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-") || "";
  return (
    <div className="heading-container relative mb-4 mt-10">
      <h2 id={id} className="text-2xl sm:text-3xl font-serif font-bold text-[var(--accent)] tracking-tight scroll-mt-24 my-0">
        {props.children}
      </h2>
    </div>
  );
}

// 2. H3 — Coral accent
function CustomH3(props: React.HTMLAttributes<HTMLHeadingElement>) {
  const id = props.id || props.children?.toString().toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-") || "";
  return (
    <div className="heading-container relative mb-3 mt-8">
      <h3 id={id} className="text-xl font-serif font-semibold text-[var(--accent-coral)] tracking-tight scroll-mt-24 my-0">
        {props.children}
      </h3>
    </div>
  );
}

// 3. Blockquote → Quote component
function CustomBlockquote(props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return <Quote>{props.children}</Quote>;
}

// 4. Code block — var(--card-bg) tự động dark/light, chữ rõ nét
function CustomPre(props: React.HTMLAttributes<HTMLPreElement>) {
  const preRef = React.useRef<HTMLPreElement>(null);
  const [textToCopy, setTextToCopy] = React.useState("");

  React.useEffect(() => {
    if (preRef.current) setTextToCopy(preRef.current.innerText || "");
  }, [props.children]);

  return (
    <div className="relative group my-6 rounded-2xl bg-[#1E1E1E] p-5 sm:p-6 ring-1 ring-white/10 not-prose">
      <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <CopyButton text={textToCopy} />
      </div>
      <pre
        ref={preRef}
        {...props}
        className="whitespace-pre-wrap break-words text-sm sm:text-[15px] font-mono text-slate-200 font-normal !bg-transparent leading-relaxed m-0 p-0"
      >
        {props.children}
      </pre>
    </div>
  );
}

const sharedComponents = {
  h1: CustomH2,
  h2: CustomH2,
  h3: CustomH3,
  blockquote: CustomBlockquote,
  pre: CustomPre,
  Callout,
  Quote,
  Toggle,
  Columns,
  Math,
  ToDo,
  Divider,
  Youtube,
  SyncedBlock,
  CopyButton,
};

export function MDXContent({ code }: MDXProps) {
  const Component = React.useMemo(() => {
    const fn = new Function(code);
    return fn({ ...jsxRuntime, components: sharedComponents }).default;
  }, [code]);

  return (
    <article className="
      prose dark:prose-invert max-w-none
      prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight
      [&_a]:text-[var(--accent)] [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-[var(--accent)]/40 hover:[&_a]:decoration-[var(--accent)]
      [&_:is(h1,h2,h3,h4,h5,h6)_a]:no-underline [&_:is(h1,h2,h3,h4,h5,h6)_a]:decoration-transparent [&_:is(h1,h2,h3,h4,h5,h6)_a]:text-inherit
      prose-p:leading-relaxed prose-p:text-[var(--foreground)]
      prose-strong:text-[var(--foreground)]
      prose-ul:list-disc prose-ul:pl-6 prose-ul:my-3
      prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-3
      prose-li:my-1 prose-li:text-[var(--foreground)] prose-li:leading-relaxed
      prose-pre:!bg-transparent prose-pre:!p-0 prose-pre:!m-0 prose-pre:!border-0 prose-pre:!shadow-none
      prose-code:rounded prose-code:px-1.5 prose-code:py-0.5
      prose-code:bg-[var(--accent)]/10 prose-code:text-[var(--accent)]
      prose-code:font-mono prose-code:text-sm
      prose-code:before:content-none prose-code:after:content-none
      prose-table:my-6 prose-table:w-full prose-table:border-collapse
      prose-thead:bg-[var(--card-bg)]
      prose-th:border prose-th:border-[var(--border)] prose-th:p-3 prose-th:text-left prose-th:font-semibold
      prose-td:border prose-td:border-[var(--border)] prose-td:p-3
      prose-hr:border-[var(--border)]
      prose-blockquote:not-italic prose-blockquote:border-0 prose-blockquote:p-0
    ">
      <Component components={sharedComponents} />
    </article>
  );
}
