import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';

export default async function (eleventyConfig) {
  // Layout aliases can make templates more portable
  eleventyConfig.addLayoutAlias('default', 'base.njk');

  // add support for syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // pass static assets through
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/js');

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data',
    },
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
    pathPrefix: '/eleventy-gh-pages-site',
  };
}
