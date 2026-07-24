import { SITE_CONFIG } from "@/config/site";

/**
 * Formats a date string into a localized string format (default: 'en-US' -> 'Jul 23, 2026')
 */
export function formatDate(
  dateString: string | Date,
  options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" },
  locale: string = "en-US"
): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, options);
}

/**
 * Calculates estimated reading time in minutes for markdown text
 */
export function calculateReadTime(text?: string, wpm = SITE_CONFIG.readingSpeedWpm): number {
  if (!text) return 1;
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / wpm));
}
