export function LINK_PLACEHOLDER(label: string): string {
  return `#LINK_PLACEHOLDER::${label}`;
}

export function isPlaceholder(url: string): boolean {
  return url.startsWith("#LINK_PLACEHOLDER::");
}

export function getPlaceholderLabel(url: string): string {
  if (isPlaceholder(url)) {
    return url.replace("#LINK_PLACEHOLDER::", "");
  }
  return url;
}
