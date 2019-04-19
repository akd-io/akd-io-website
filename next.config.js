// next.config.js heavily inspired by https://github.com/zeit/next.js/issues/5750#issuecomment-442313585 to fix now-deployment bug.

module.exports = (phase, { defaultConfig }) => {
  const withSass = require('@zeit/next-sass');
  return withSass({
    target: 'serverless',
  });
};
