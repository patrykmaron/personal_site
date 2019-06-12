// next.config.js

// Ability to import SASS
const withSass = require('@zeit/next-sass')

module.exports = withSass({
    // SVG
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    }})
