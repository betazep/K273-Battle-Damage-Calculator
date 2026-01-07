# Library Markdown Style Guide

Use Markdown wherever possible. Keep HTML only for layouts that Markdown cannot express.

## Headings
- Use `####` for section headers inside a book.

## Paragraphs
- Separate paragraphs with a blank line.

## Lists
- Use `-` for unordered lists.
- Keep list items short and consistent.

## Images
- Use Markdown image syntax:

```markdown
![Alt text](library-images/filename.png)
```

## Links
- Use `<https://example.com>` or `[Label](https://example.com)`.

## Tables
- Use Markdown tables:

```markdown
| Column | Column |
| --- | --- |
| Value | Value |
```

## Placeholders
- Keep template placeholders like `{{author}}` when needed.

## HTML fallback
- Use small HTML blocks only when Markdown cannot represent the layout (e.g., complex grids).
