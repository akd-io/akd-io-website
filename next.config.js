const withPlugins = require('next-compose-plugins');
const nextOptimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [
    nextOptimizedImages,
    {
      mozjpeg: {
        quality: 90,
      },
      pngquant: {
        quality: [0.9, 1.0],
      },
      webp: {
        quality: 90,
      },
    },
  ],
]);
