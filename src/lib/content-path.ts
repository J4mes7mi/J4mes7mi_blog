import { getRelativeLocaleUrl } from "astro:i18n";

/**
 * Strip the leading locale segment from a content collection id.
 * Example: `zh-cn/first-blog` -> `first-blog`
 */
export function contentSlug(id: string): string {
	const [, ...rest] = id.split("/");
	return rest.join("/");
}

/** Locale-prefixed URL for a file endpoint that must not end with a slash. */
export function localeFileUrl(locale: string, path: string): string {
	return getRelativeLocaleUrl(locale, path).replace(/\/+$/, "");
}
