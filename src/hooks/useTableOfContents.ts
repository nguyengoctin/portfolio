import { useEffect, useState } from "react";

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export function useTableOfContents(initialHeadings: HeadingItem[] = []) {
  const [headings, setHeadings] = useState<HeadingItem[]>(initialHeadings);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    let elements: Element[] = [];

    const initHeadings = () => {
      elements = Array.from(document.querySelectorAll("article h2, article h3"));
      if (elements.length === 0) return false;

      const items: HeadingItem[] = elements.map((elem) => {
        const text = elem.textContent || "";
        const id = elem.id || text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
        if (!elem.id) elem.id = id;
        return {
          id,
          text,
          level: Number(elem.tagName.substring(1)),
        };
      });
      setHeadings(items);
      return true;
    };

    const handleScroll = () => {
      if (elements.length === 0) {
        elements = Array.from(document.querySelectorAll("article h2, article h3"));
      }
      if (elements.length === 0) return;

      const scrollPosition = window.scrollY + 120;
      let currentActiveId = elements[0]?.id || "";

      for (let i = 0; i < elements.length; i++) {
        const elem = elements[i] as HTMLElement;
        if (elem.offsetTop <= scrollPosition) {
          currentActiveId = elem.id;
        } else {
          break;
        }
      }
      setActiveId(currentActiveId);
    };

    // Immediate initial check
    initHeadings();
    handleScroll();

    // Retry checking after 50ms & 150ms in case MDX component renders asynchronously
    const timer1 = setTimeout(() => {
      initHeadings();
      handleScroll();
    }, 50);

    const timer2 = setTimeout(() => {
      initHeadings();
      handleScroll();
    }, 150);

    const article = document.querySelector("article");
    let mutationObserver: MutationObserver | null = null;
    if (article) {
      mutationObserver = new MutationObserver(() => {
        initHeadings();
        handleScroll();
      });
      mutationObserver.observe(article, { childList: true, subtree: true });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (mutationObserver) mutationObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { headings, activeId };
}
