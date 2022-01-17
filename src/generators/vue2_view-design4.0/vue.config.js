const { resolve } = require('path');
const proxy = require('./setupProxy');
const { VUE_APP_PUBLIC_PATH } = process.env.VUE_APP_PUBLIC_PATH;

module.exports = {
  publicPath: VUE_APP_PUBLIC_PATH,
  outputDir: 'dist',
  productionSourceMap: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve(__dirname, 'src/theme/common.less')],
    },
  },
  css: { loaderOptions: { less: { javascriptEnabled: true } } },
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    port: 8080,
    proxy,
    overlay: { warnings: false, errors: true },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve(__dirname, 'src/'));
  },
};
