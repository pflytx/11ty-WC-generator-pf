const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
// const lit = require("lit");

module.exports = function (eleventyConfig) {
  // Optional, used for the main application styles
  eleventyConfig.addWatchTarget("./src/app.css");
  eleventyConfig.addPassthroughCopy("./src/app.css");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // eleventyConfig.addPlugin(lit);

  // Allows transforming ex. `hello-world` into `HelloWorld`
  // for the component `class` export
  eleventyConfig.addFilter("createClass", (str) => {
    if (!str) {
      return;
    }
    return str.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('');
  });

  //adding npm package for use
  eleventyConfig.addPassthroughCopy({
    "node_modules/lit": "assets/lit",
    "node_modules/@lit/reactive-element": "assets/@lit/reactive-element",
    "node_modules/lit-html": "assets/lit-html",
    "node_modules/lit-element": "assets/lit-element"
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};