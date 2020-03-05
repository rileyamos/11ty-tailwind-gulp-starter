module.exports = function(eleventyConfig) {
  const CSSBUILDPATH = 'src/stylesheets/final.css';
  eleventyConfig.addPassthroughCopy(CSSBUILDPATH);
  eleventyConfig.addWatchTarget(CSSBUILDPATH);

  return {
    dir: {
      input: 'src'
    }
  };
};
