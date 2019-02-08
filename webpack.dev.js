const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  output: {
    filename: './dist/bundle.js',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  }
});
