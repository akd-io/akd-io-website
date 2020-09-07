const withPlugins = require('next-compose-plugins');
const nextOptimizedImages = require('next-optimized-images');
const nextTranspileModules = require('next-transpile-modules');

const withTM = nextTranspileModules(['drei', 'three']);

module.exports = withPlugins([
  withTM,
  [
    nextOptimizedImages,
    {
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.7, 0.8],
        /*
        TODO: OBS! Don't use resize and format conversion before next-optimized-images v3.
        Resize and format conversion does not work in combination with image compression, which is the most important feature.
        Read more at https://github.com/cyrilwanner/next-optimized-images/issues/120
        */
      },
    },
  ],
]);
