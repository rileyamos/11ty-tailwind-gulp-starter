module.exports = function(eleventyConfig) {
  const CSSBUILDPATH = 'src/stylesheets/final.min.css';
  eleventyConfig.addPassthroughCopy(CSSBUILDPATH);
  eleventyConfig.addWatchTarget(CSSBUILDPATH);

  return {
    dir: {
      input: 'src'
    }
  };
};
