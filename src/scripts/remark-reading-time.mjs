import { toString } from 'mdast-util-to-string';
import readingTime from 'reading-time';

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTimeResult = readingTime(textOnPage);
    // data.astro.frontmatter là nơi Astro lưu trữ frontmatter mở rộng
    data.astro.frontmatter.readingTime = readingTimeResult.text;
  };
}
