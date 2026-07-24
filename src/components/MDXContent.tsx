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

// 1. H2 — 32px (huyenchip.com style)
function CustomH2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  const id = props.id || props.children?.toString().toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-") || "";
  return (
    <div className="heading-container relative mb-5 mt-12">
      <h2 id={id} className="text-2xl sm:text-[30px] md:text-[32px] font-serif font-bold text-[var(--accent)] tracking-tight leading-tight scroll-mt-24 my-0">
        {props.children}
      </h2>
    </div>
  );
}

// 2. H3 — 26px (huyenchip.com style)
function CustomH3(props: React.HTMLAttributes<HTMLHeadingElement>) {
  const id = props.id || props.children?.toString().toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-") || "";
  return (
    <div className="heading-container relative mb-4 mt-9">
      <h3 id={id} className="text-xl sm:text-[24px] md:text-[26px] font-serif font-semibold text-[var(--accent-coral)] tracking-tight leading-snug scroll-mt-24 my-0">
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

// 5. External & Internal Link Component
function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { href, children, ...rest } = props;
  const isExternal = href?.startsWith("http") || props.target === "_blank";
  const maskId = React.useId();

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
        className="inline-flex items-center font-bold text-[var(--foreground)] underline underline-offset-2 decoration-[var(--accent)] hover:no-underline transition-all"
      >
        <span>{children}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          style={{ width: "0.7em", height: "0.7em" }}
          className="inline-block shrink-0 align-middle ml-0.5 text-[var(--muted)] opacity-70"
        >
          <mask id={maskId}>
            <rect x="0" y="0" width="24" height="24" fill="white" />
            <rect x="10" y="0" width="16" height="14" fill="black" />
          </mask>
          <rect x="3" y="6" width="15" height="15" rx="2" mask={`url(#${maskId})`} stroke="currentColor" strokeWidth="2.5" />
          <path d="M 10 14 L 20 4 h -6 h 6 v 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="sr-only">(opens in new tab)</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      {...rest}
      className="font-bold text-[var(--foreground)] underline underline-offset-2 decoration-[var(--accent)] hover:no-underline transition-all"
    >
      {children}
    </a>
  );
}

const sharedComponents = {
  h1: CustomH2,
  h2: CustomH2,
  h3: CustomH3,
  blockquote: CustomBlockquote,
  pre: CustomPre,
  a: CustomLink,
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
      [&_:is(h1,h2,h3,h4,h5,h6)_a]:no-underline [&_:is(h1,h2,h3,h4,h5,h6)_a]:decoration-transparent [&_:is(h1,h2,h3,h4,h5,h6)_a]:text-inherit
      prose-p:text-[17px] sm:prose-p:text-[18px] prose-p:leading-[1.8] prose-p:text-[var(--foreground)] prose-p:my-5
      prose-strong:text-[var(--foreground)]
      prose-ul:list-disc prose-ul:pl-6 prose-ul:my-4
      prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-4
      prose-li:my-1.5 prose-li:text-[17px] sm:prose-li:text-[18px] prose-li:leading-[1.8] prose-li:text-[var(--foreground)]
      prose-pre:!bg-transparent prose-pre:!p-0 prose-pre:!m-0 prose-pre:!border-0 prose-pre:!shadow-none
      prose-code:rounded prose-code:px-1.5 prose-code:py-0.5
      prose-code:bg-[var(--accent)]/10 prose-code:text-[var(--accent)]
      prose-code:font-mono prose-code:text-sm sm:prose-code:text-[15px]
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
