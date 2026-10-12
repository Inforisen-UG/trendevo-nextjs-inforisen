/** Remove YAML frontmatter from a Markdown file (e.g. docs source → public/index.md). */
export function stripMarkdownFrontmatter(content: string): string {
  if (!content.startsWith('---\n')) {
    return content;
  }

  const closing = content.indexOf('\n---\n', 4);
  if (closing === -1) {
    return content;
  }

  return content.slice(closing + 5).replace(/^\n/, '');
}
