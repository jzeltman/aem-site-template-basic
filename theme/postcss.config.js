// postcss.config.js
const generateGrid = require('./src/mixins/grid');

module.exports = ({env}) => ({
  plugins: {
    'postcss-easy-import': {
      prefix: '_'
    },
    'postcss-mixins': {
      mixins: {
        'generate-grid': generateGrid,
      }
    },
    'postcss-nested': {},
    'postcss-at-rules-variables': {},
    tailwindcss: {},
    autoprefixer: {},
    'cssnano': env === 'production' ? {} : false
  }
});