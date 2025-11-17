export function formatTags(tags) {
  if (!tags || !Array.isArray(tags) || tags.length === 0) {
    return '';
  }
  return tags.join(' ');
}