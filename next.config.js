module.exports = () => {
  const withCSS = require('@zeit/next-css');
  const withSass = require('@zeit/next-sass');
  return withCSS(
    withSass({
      target: 'serverless',
    })
  );
};
