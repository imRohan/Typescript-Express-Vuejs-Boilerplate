const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './app/js/index.js',
  output: {
    filename: './bundle.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          }
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loaders: 'style-loader!html-loader',
      },
      {
        test: /\.vue$/,
        loaders: 'vue-loader'
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    modules: [path.resolve(__dirname, "app"), "node_modules"],
    alias: {
      vue: 'vue/dist/vue.js',
    },
  }
};
